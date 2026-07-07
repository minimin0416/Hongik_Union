package com.hongik.union.service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * store.js의 defaultNotices/defaultMinutes/defaultForms/defaultClubs/
 * defaultElection/defaultContent를 그대로 옮긴 서버 사이드 기본값.
 * 관리자 페이지에서 아직 아무 데이터도 저장하지 않았을 때 공개 페이지에 보여줄 값이다.
 */
final class DefaultData {

    private DefaultData() {}

    private static Map<String, Object> m(Object... kv) {
        Map<String, Object> map = new LinkedHashMap<>();
        for (int i = 0; i < kv.length; i += 2) map.put((String) kv[i], kv[i + 1]);
        return map;
    }

    static final List<Map<String, Object>> NOTICES = List.of(
        m("id", "1", "title", "[공지] 2025년 1학기 동아리 활동 보고서 제출 안내", "content", "자세한 내용은 추후 공지 예정입니다.", "isPinned", true, "createdAt", "2025-05-28"),
        m("id", "2", "title", "[공지] 동아리방 청소 및 점검 일정 안내", "content", "", "isPinned", false, "createdAt", "2025-05-25"),
        m("id", "3", "title", "[공지] 총동아리연합회 정기총회 개최 안내", "content", "", "isPinned", false, "createdAt", "2025-05-20")
    );

    static final List<Map<String, Object>> MINUTES = List.of(
        m("id", "1", "title", "2025년 1학기 제5차 정기회의", "date", "2025-05-20", "attendees", "15명", "attachment", null),
        m("id", "2", "title", "2025년 1학기 제4차 정기회의", "date", "2025-05-06", "attendees", "13명", "attachment", null)
    );

    static final List<Map<String, Object>> FORMS = List.of(
        m("id", "1", "name", "동아리 등록 신청서", "description", "신규 동아리 등록 시 제출", "fileType", "HWP", "updatedAt", "2025.03", "attachment", null),
        m("id", "2", "name", "동아리 등록 갱신 신청서", "description", "매 학기 갱신 시 제출", "fileType", "HWP", "updatedAt", "2025.03", "attachment", null),
        m("id", "3", "name", "활동 지원금 신청서", "description", "활동 지원금 신청 시 제출", "fileType", "HWP", "updatedAt", "2025.03", "attachment", null),
        m("id", "4", "name", "활동 보고서 양식", "description", "학기 말 제출 필수", "fileType", "HWP", "updatedAt", "2025.03", "attachment", null)
    );

    static final List<Map<String, Object>> CLUBS = List.of(
        m("id", 1, "name", "홍익극회", "category", "공연분과", "room", "A동 101호", "desc", "연극 공연 및 창작 활동을 하는 동아리", "president", "홍길동", "contact", "010-0000-0001", "recruitPeriod", "매 학기 초 모집", "meetingSchedule", "매주 화·목 18:00", "intro", "홍익극회는 연극을 사랑하는 사람들이 모여 창작 활동을 하는 동아리입니다. 매 학기 정기 공연을 개최하며, 연기·연출·스태프 등 다양한 분야에서 활동할 수 있습니다.", "activities", List.of("정기 연극 공연 (매 학기)", "창작극 제작", "워크숍 및 연기 수업", "타 대학 연극제 참가"), "targets", List.of("연극에 관심 있는 누구나", "연기 경험 없어도 가능", "공연 기획·제작에 관심 있는 학생"), "instagram", "@hongik_theatre", "imageUrl", ""),
        m("id", 2, "name", "홍익밴드", "category", "공연분과", "room", "D동 205호", "desc", "다양한 장르의 음악을 연주하는 밴드 동아리", "president", "김민준", "contact", "010-0000-0002", "recruitPeriod", "매 학기 초 모집", "meetingSchedule", "매주 수·금 18:00", "intro", "홍익밴드는 기타·베이스·드럼·키보드·보컬 등 밴드 구성으로 다양한 장르의 음악을 연주하는 동아리입니다. 매 학기 정기 공연과 교내 행사 공연을 진행합니다.", "activities", List.of("정기 공연 (매 학기)", "교내 행사 공연", "합주 연습", "악기별 레슨"), "targets", List.of("악기 연주 가능한 학생", "밴드 음악을 좋아하는 학생", "보컬 지원 가능"), "instagram", "@hongik_band", "imageUrl", ""),
        m("id", 3, "name", "홍익농구", "category", "스포츠분과", "room", "체육관", "desc", "농구를 즐기고 실력을 키우는 동아리", "president", "이준혁", "contact", "010-0000-0003", "recruitPeriod", "상시 모집", "meetingSchedule", "매주 토 14:00", "intro", "홍익농구는 농구를 좋아하는 학생들이 모여 함께 운동하고 친목을 도모하는 동아리입니다. 초보자도 환영하며, 교내외 대회에도 참가합니다.", "activities", List.of("정기 연습 (매주)", "학교 농구 리그 참가", "친선 경기", "농구 기초 교육"), "targets", List.of("농구를 좋아하는 누구나", "초보자도 환영", "규칙적으로 참여 가능한 학생"), "instagram", "@hongik_basketball", "imageUrl", ""),
        m("id", 4, "name", "홍익축구", "category", "스포츠분과", "room", "운동장", "desc", "축구 경기 및 친선 대회 참여 동아리", "president", "박성민", "contact", "010-0000-0004", "recruitPeriod", "매 학기 초 모집", "meetingSchedule", "매주 일 10:00", "intro", "홍익축구는 축구를 사랑하는 학생들의 동아리입니다. 정기 연습과 대회 참가를 통해 실력을 향상시키고 팀워크를 키웁니다.", "activities", List.of("정기 연습 (매주)", "교내 축구 대회", "타 대학 친선 경기", "풋살 대회 참가"), "targets", List.of("축구를 좋아하는 누구나", "초보자도 환영"), "instagram", "@hongik_soccer", "imageUrl", ""),
        m("id", 5, "name", "홍익등산", "category", "레저분과", "room", "B동 302호", "desc", "주말 등산 및 자연 탐방 동아리", "president", "최서연", "contact", "010-0000-0005", "recruitPeriod", "상시 모집", "meetingSchedule", "격주 토 06:00 (산행)", "intro", "홍익등산은 자연 속에서 건강을 찾는 동아리입니다. 서울 근교 명산부터 전국 유명 산까지 함께 오르며 친목을 다집니다.", "activities", List.of("정기 산행 (격주)", "국내 유명 산 탐방", "MTB·트레킹 병행", "산행 후 뒤풀이"), "targets", List.of("등산을 좋아하는 누구나", "자연을 사랑하는 학생", "체력에 관계없이 참여 가능"), "instagram", "@hongik_hiking", "imageUrl", ""),
        m("id", 6, "name", "홍익CCC", "category", "종교분과", "room", "G동 201호", "desc", "기독교 신앙 공동체 동아리", "president", "정다은", "contact", "010-0000-0006", "recruitPeriod", "상시 모집", "meetingSchedule", "매주 목 18:00", "intro", "홍익CCC는 기독교 신앙을 바탕으로 함께 성장하는 공동체입니다. 예배·성경공부·봉사활동을 통해 신앙과 인성을 키워갑니다.", "activities", List.of("주간 예배", "성경 공부", "봉사 활동", "수련회"), "targets", List.of("기독교 신앙에 관심 있는 학생", "종교 관계없이 관심 있는 누구나"), "instagram", "@hongik_ccc", "imageUrl", ""),
        m("id", 7, "name", "홍익봉사", "category", "사회분과", "room", "G동 105호", "desc", "지역 사회 봉사 활동을 하는 동아리", "president", "임지우", "contact", "010-0000-0007", "recruitPeriod", "매 학기 초 모집", "meetingSchedule", "매월 2·4주 토 10:00", "intro", "홍익봉사는 지역 사회에 기여하는 다양한 봉사 활동을 운영하는 동아리입니다. 아동센터·노인복지관·환경봉사 등 다양한 분야에서 활동합니다.", "activities", List.of("지역 아동센터 교육 봉사", "노인복지관 방문", "환경 정화 활동", "헌혈 캠페인"), "targets", List.of("봉사에 관심 있는 누구나", "사회 기여를 원하는 학생"), "instagram", "@hongik_volunteer", "imageUrl", ""),
        m("id", 8, "name", "홍익영어토론", "category", "학술분과", "room", "E동 401호", "desc", "영어로 토론하고 스피킹 실력을 키우는 동아리", "president", "강현우", "contact", "010-0000-0008", "recruitPeriod", "매 학기 초 모집", "meetingSchedule", "매주 화 19:00", "intro", "홍익영어토론은 영어 토론을 통해 글로벌 커뮤니케이션 능력을 키우는 동아리입니다. 시사 이슈를 영어로 토론하며 스피킹과 논리력을 향상시킵니다.", "activities", List.of("주간 영어 토론", "TESOL 특강", "영어 모의 UN", "스피치 대회 참가"), "targets", List.of("영어 토론에 관심 있는 학생", "초·중·고급 모두 환영", "TOEIC·토플 준비생"), "instagram", "@hongik_debate", "imageUrl", ""),
        m("id", 9, "name", "홍익사진", "category", "전시분과", "room", "F동 503호", "desc", "사진 촬영 및 전시회를 개최하는 동아리", "president", "윤지아", "contact", "010-0000-0009", "recruitPeriod", "매 학기 초 모집", "meetingSchedule", "매주 금 17:00", "intro", "홍익사진은 사진에 관심 있는 학생들이 모여 촬영 기술을 연마하고 작품을 공유하는 동아리입니다. 매 학기 정기 전시회를 개최합니다.", "activities", List.of("정기 사진전 (매 학기)", "출사 (교내·외)", "사진 편집 워크숍", "공모전 참가"), "targets", List.of("사진에 관심 있는 누구나", "DSLR·미러리스·스마트폰 모두 가능", "입문자 환영"), "instagram", "@hongik_photo", "imageUrl", "")
    );

    static final List<Map<String, Object>> ELECTION = List.of(
        m("id", "1", "title", "[공고] 제40대 총동아리연합회 임원 선거 일정 공고", "content", "", "date", "2025-11-01", "status", "예정"),
        m("id", "2", "title", "[공고] 제39대 총동아리연합회 임원 선거 당선자 발표", "content", "", "date", "2024-11-20", "status", "완료")
    );

    static final Map<String, Object> CONTENT = m(
        "bannerSlides", List.of(
            m("title", "홍익대학교 총동아리연합회", "subtitle", "우리 모두가 함께 만들어가는 동아리 문화"),
            m("title", "2025년 동아리 활동", "subtitle", "다양한 분야에서 꿈을 펼치세요"),
            m("title", "동아리 신규 가입 안내", "subtitle", "나에게 맞는 동아리를 찾아보세요")
        ),
        "aboutIntro", "홍익대학교 총동아리연합회(이하 총동아리연합회)는 홍익대학교 내 모든 중앙동아리를 대표하는 학생 자치 기구입니다.\n\n총동아리연합회는 동아리들의 권익을 대변하고, 동아리 활동을 지원하며, 학교와 동아리 간의 원활한 소통을 담당합니다.",
        "aboutVision", "모든 동아리가 자유롭게 활동하고 성장할 수 있는 환경을 만들어, 홍익대학교 내 동아리 문화를 더욱 풍성하게 발전시킵니다.",
        "workItems", List.of(
            m("title", "동아리 등록 및 관리", "desc", "신규 동아리 등록 심사, 기존 동아리 활동 현황 관리 및 지원"),
            m("title", "활동 지원금 배분", "desc", "학교로부터 지원받은 활동비를 각 동아리에 공정하게 배분"),
            m("title", "동아리방 관리", "desc", "동아리방 배정, 청소 점검, 시설 개선 요청 등 관리 업무"),
            m("title", "공연 및 행사 기획", "desc", "전체 동아리 연합 행사, 공연 일정 조율 및 진행 지원"),
            m("title", "학교-동아리 간 소통", "desc", "학교 측과 동아리 간의 원활한 소통 및 의견 전달 창구 역할"),
            m("title", "정기총회 운영", "desc", "매 학기 정기총회 개최, 주요 안건 심의 및 의결")
        ),
        "locationAddress", "홍익대학교 G동 301-1호 총동아리연합회실",
        "locationHours", "평일 10:00 ~ 17:00",
        "locationPhone", "02-320-XXXX",
        "locationEmail", "union@hongik.ac.kr",
        "rules", "제1장 총칙\n제1조 본 회의 명칭은 홍익대학교 총동아리연합회라 한다.",
        "faqs", List.of(
            m("q", "동아리를 새로 만들고 싶은데 어떻게 하나요?", "a", "매 학기 초에 신규 동아리 등록 신청을 받습니다."),
            m("q", "동아리방은 어떻게 신청하나요?", "a", "동아리방은 학기 초에 선착순 또는 추첨으로 배정됩니다."),
            m("q", "활동 지원금은 언제 받을 수 있나요?", "a", "활동 지원금은 학기 초에 신청을 받아 배분합니다."),
            m("q", "총동아리연합회 운영시간은 언제인가요?", "a", "평일 오전 10시부터 오후 5시까지 운영합니다. G동 301-1호에 위치합니다.")
        ),
        "electionIntro", "동아리선거관리위원회(이하 선관위)는 총동아리연합회 임원 선거를 공정하고 투명하게 관리하기 위해 구성된 독립적인 기구입니다.",
        "electionValues", List.of(
            m("title", "공정성", "desc", "독립적으로 운영하여 선거의 공정성 보장"),
            m("title", "투명성", "desc", "모든 선거 과정을 공개하여 투명성 확보"),
            m("title", "적법성", "desc", "관련 규정에 따라 적법하게 선거 진행")
        ),
        "instagramUrl", "", "kakaoUrl", "",
        "clubBuildings", List.of(
            m("building", "A동", "clubs", List.of("홍익극회 (101호)", "홍익뮤지컬 (102호)")),
            m("building", "B동", "clubs", List.of("홍익등산 (302호)", "홍익사이클 (303호)")),
            m("building", "D동", "clubs", List.of("홍익밴드 (205호)", "홍익재즈 (206호)")),
            m("building", "G동", "clubs", List.of("총동아리연합회실 (301-1호)", "홍익봉사 (105호)"))
        ),
        "infoRules", List.of(
            m("title", "동아리 등록 규정", "desc", "신규 동아리 등록 및 등록 갱신 관련 규정"),
            m("title", "동아리방 사용 규정", "desc", "동아리방 사용 방법, 금지 사항, 청소 의무 등"),
            m("title", "활동 지원금 관리 규정", "desc", "지원금 신청, 사용, 정산 관련 규정"),
            m("title", "벌점 부과 기준", "desc", "벌점 부과 사유, 기준, 이의신청 절차")
        ),
        "askTitle", "질문 있어요",
        "askDesc", "궁금한 점을 남겨주시면 확인 후 답변드리겠습니다.",
        "askCategories", List.of("동아리 등록 관련", "동아리방 관련", "지원금 관련", "증명서 발급 관련", "벌점 관련", "기타"),
        "activityCertDesc", "양식 파일을 다운로드 후 작성하여 총동아리연합회실(G301-1)에 제출하거나 카카오톡으로 전달해주세요.",
        "clubCertDesc", "양식 파일을 다운로드 후 작성하여 총동아리연합회실(G301-1)에 제출하거나 카카오톡으로 전달해주세요.",
        "certSubmitTitle", "제출 방법",
        "certSubmitMethods", List.of("파일 작성 후 총동아리연합회실 G301-1 직접 제출", "또는 카카오톡 플러스친구로 파일 전달"),
        "footerTitle", "홍익대학교 총동아리연합회",
        "footerCopyright", "© 2025 홍익대학교 총동아리연합회. All rights reserved.",
        "rulesFile", null
    );
}
