package com.hongik.union.web;

import com.hongik.union.service.SiteContentService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.List;
import java.util.Map;

/**
 * 모든 페이지 컨트롤러에 로고/사이트설정/메뉴/현재경로를 자동으로 주입한다.
 * fragments/nav.html이 이 값들로 헤더(로고, 메뉴, 푸터)를 서버에서 직접 렌더링한다.
 */
@ControllerAdvice(basePackages = "com.hongik.union.controller")
public class GlobalModelAttributes {

    private final SiteContentService siteContentService;

    public GlobalModelAttributes(SiteContentService siteContentService) {
        this.siteContentService = siteContentService;
    }

    private static Map<String, Object> navItem(String title, String href, String section, List<Map<String, Object>> submenu) {
        return Map.of("title", title, "href", href, "section", section, "submenu", submenu);
    }

    private static Map<String, Object> sub(String title, String href) {
        return Map.of("title", title, "href", href);
    }

    public static final List<Map<String, Object>> NAV_ITEMS = List.of(
        navItem("총동아리연합회", "/about/intro", "/about", List.of(
            sub("소개", "/about/intro"), sub("주요업무", "/about/work"), sub("조직도", "/about/org"),
            sub("오시는 길", "/about/location"), sub("회칙", "/about/rules")
        )),
        navItem("동아리 소개", "/clubs/central", "/clubs", List.of(
            sub("중앙동아리", "/clubs/central"), sub("가동아리", "/clubs/provisional"), sub("동아리방 위치", "/clubs/location")
        )),
        navItem("소식마당", "/news/notices", "/news", List.of(
            sub("공지사항", "/news/notices"), sub("일정", "/news/calendar"), sub("회의록", "/news/minutes"), sub("동아리 소식", "/news/clubs")
        )),
        navItem("정보마당", "/info/rules", "/info", List.of(
            sub("규칙", "/info/rules"), sub("양식 및 가이드라인", "/info/forms"), sub("활동증명서", "/info/activity-cert"),
            sub("동아리증명서", "/info/club-cert"), sub("벌점 현황", "/info/penalty")
        )),
        navItem("동아리선거관리위원회", "/election/intro", "/election", List.of(
            sub("소개", "/election/intro"), sub("선거 공고", "/election/announce")
        )),
        navItem("문의사항", "/contact/faq", "/contact", List.of(
            sub("자주 묻는 질문", "/contact/faq"), sub("질문 있어요", "/contact/ask")
        ))
    );

    @ModelAttribute
    public void addGlobals(HttpServletRequest request, Model model) {
        model.addAttribute("navItems", NAV_ITEMS);
        model.addAttribute("currentPath", request.getRequestURI());
        model.addAttribute("logo", siteContentService.getLogo());
        model.addAttribute("content", siteContentService.getSiteContent());
    }
}
