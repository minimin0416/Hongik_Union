package com.hongik.union.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hongik.union.service.RedisService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/data")
@CrossOrigin(origins = "*")
public class DataController {

    private final RedisService redisService;
    private final ObjectMapper objectMapper;

    public DataController(RedisService redisService, ObjectMapper objectMapper) {
        this.redisService = redisService;
        this.objectMapper = objectMapper;
    }

    // GET /api/data?key=xxx  →  값 조회
    // Spring은 String 반환 타입에 Jackson을 쓰지 않고 원문 그대로 text/plain으로
    // 내려버려서, 저장된 원본 문자열을 직접 JSON 문자열로 인코딩해줘야
    // 프론트(store.js)의 res.json() + JSON.parse(value) 체인과 형식이 맞는다.
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> get(@RequestParam String key) throws JsonProcessingException {
        String value = redisService.get(key);
        return ResponseEntity.ok(objectMapper.writeValueAsString(value));
    }

    // POST /api/data  →  값 저장
    // body: { "key": "xxx", "value": "yyy" }
    @PostMapping
    public ResponseEntity<?> set(@RequestBody Map<String, String> body) {
        String key = body.get("key");
        String value = body.get("value");
        redisService.set(key, value);
        return ResponseEntity.ok(Map.of("ok", true));
    }
}
