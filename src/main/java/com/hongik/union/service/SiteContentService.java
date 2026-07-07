package com.hongik.union.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * store.js의 Store 객체(dbGet/dbGetStr 기반 getter들)를 서버에서 그대로 재현한다.
 * Thymeleaf가 페이지 렌더링 시점에 Redis 데이터를 직접 읽어 HTML에 채워 넣을 수 있도록 하기 위함이며,
 * 관리자 페이지(admin/index.html)는 여전히 store.js를 통해 클라이언트에서 읽고 쓴다 (같은 Redis 키를 공유).
 */
@Service
public class SiteContentService {

    private final RedisService redis;
    private final ObjectMapper mapper;

    public SiteContentService(RedisService redis, ObjectMapper mapper) {
        this.redis = redis;
        this.mapper = mapper;
    }

    private List<Map<String, Object>> getList(String key, List<Map<String, Object>> def) {
        String raw = redis.get(key);
        if (raw == null || raw.isBlank()) return def;
        try {
            return mapper.readValue(raw, new TypeReference<List<Map<String, Object>>>() {});
        } catch (Exception e) {
            return def;
        }
    }

    private String getStr(String key) {
        String raw = redis.get(key);
        return raw == null ? "" : raw;
    }

    private Map<String, Object> parseJsonObject(String raw) {
        if (raw == null || raw.isBlank()) return null;
        try {
            return mapper.readValue(raw, new TypeReference<Map<String, Object>>() {});
        } catch (Exception e) {
            return null;
        }
    }

    private List<Object> parseJsonList(String raw) {
        if (raw == null || raw.isBlank()) return List.of();
        try {
            return mapper.readValue(raw, new TypeReference<List<Object>>() {});
        } catch (Exception e) {
            return List.of();
        }
    }

    public List<Map<String, Object>> getNotices()          { return getList("hn_notices", DefaultData.NOTICES); }
    public List<Map<String, Object>> getMinutes()           { return getList("hn_minutes", DefaultData.MINUTES); }
    public List<Map<String, Object>> getClubNews()          { return getList("hn_club_news", List.of()); }
    public List<Map<String, Object>> getPenalties()         { return getList("hn_penalties", List.of()); }
    public List<Map<String, Object>> getForms()             { return getList("hn_forms", DefaultData.FORMS); }
    public List<Map<String, Object>> getElection()          { return getList("hn_election", DefaultData.ELECTION); }
    public List<Map<String, Object>> getCalendarEvents()    { return getList("hn_calendar_events", List.of()); }
    public List<Map<String, Object>> getProvisionalClubs()  { return getList("hn_provisional_clubs", List.of()); }

    public List<Map<String, Object>> getClubs() {
        List<Map<String, Object>> data = getList("hn_clubs", List.of());
        return data.isEmpty() ? DefaultData.CLUBS : data;
    }

    public List<String> getBanners() {
        String countStr = redis.get("hn_banner_count");
        if (countStr == null || countStr.isBlank()) {
            List<Object> legacy = parseJsonList(redis.get("hn_banners"));
            if (!legacy.isEmpty()) {
                List<String> out = new ArrayList<>();
                for (Object o : legacy) out.add(o == null ? "" : o.toString());
                return out;
            }
            return List.of("", "", "");
        }
        int count;
        try {
            count = Integer.parseInt(countStr.trim());
        } catch (NumberFormatException e) {
            count = 0;
        }
        List<String> out = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            out.add(getStr("hn_banner_" + i));
        }
        return out;
    }

    public String getLogo()           { return getStr("hn_logo"); }
    public String getOrgImage()       { return getStr("hn_org_image"); }
    public String getLocationImage()  { return getStr("hn_location_image"); }
    public String getClubMapImage()   { return getStr("hn_club_map_image"); }

    public Map<String, Object> getActivityCertFile() { return parseJsonObject(redis.get("hn_activity_cert")); }
    public Map<String, Object> getClubCertFile()     { return parseJsonObject(redis.get("hn_club_cert")); }

    public Map<String, Object> getSiteContent() {
        Map<String, Object> merged = new LinkedHashMap<>(DefaultData.CONTENT);
        Map<String, Object> data = parseJsonObject(redis.get("hn_content"));
        if (data != null) merged.putAll(data);
        return merged;
    }
}
