# 홍익대 총동아리연합회 홈페이지 — Spring Boot + JavaScript 버전

## 프로젝트 개요

홍익대학교 총동아리연합회 공식 홈페이지의 **Java/Spring Boot + HTML/JavaScript 풀스택 버전**입니다.

- 원본: `c:\Users\hkm17\Desktop\code\landingpage\hongik-union` (Next.js + TypeScript)
- 이 프로젝트: **Java 학습용** + 실 배포 가능한 Spring Boot 버전

### 기술 스택

| 영역 | 기술 |
|------|------|
| 백엔드 언어 | **Java 17** |
| 백엔드 프레임워크 | **Spring Boot 3.3** |
| 템플릿 엔진 | **Thymeleaf** (HTML 페이지 렌더링) |
| 프론트엔드 | **HTML + CSS + Vanilla JavaScript** (TypeScript 없음) |
| CSS 프레임워크 | **Tailwind CSS** (CDN) |
| 데이터베이스 | **Upstash Redis** (서버리스 Redis) |
| 배포 | Railway, Render, Fly.io 등 (Java 지원 서버) |

---

## 프로젝트 구조

```
hongik-union-backend/
├── src/main/java/com/hongik/union/
│   ├── HongikUnionApplication.java       ← 진입점 (@SpringBootApplication)
│   ├── config/
│   │   ├── RedisConfig.java              ← Upstash Redis SSL 연결 설정
│   │   └── WebConfig.java               ← CORS 설정
│   ├── service/
│   │   └── RedisService.java            ← Redis GET/SET/FLUSH
│   └── controller/
│       ├── DataController.java          ← /api/data REST API
│       └── PageController.java         ← HTML 페이지 라우팅
├── src/main/resources/
│   ├── templates/                        ← Thymeleaf HTML 템플릿
│   │   ├── fragments/head.html          ← 공통 <head> (Tailwind, store.js)
│   │   ├── fragments/nav.html           ← 헤더/내비게이션
│   │   ├── index.html                   ← 메인 페이지
│   │   ├── about/{intro,work,org,location,rules}.html
│   │   ├── clubs/{central,location}.html
│   │   ├── news/{notices,calendar,minutes,clubs}.html
│   │   ├── info/{rules,forms,penalty}.html
│   │   ├── election/{intro,announce}.html
│   │   ├── contact/{faq,ask,qna}.html
│   │   └── admin/index.html            ← 관리자 페이지
│   ├── static/
│   │   ├── js/store.js                 ← 데이터 계층 (local-store.ts JS 포팅)
│   │   └── css/style.css
│   └── application.properties
└── pom.xml
```

---

## 핵심 개념

### 데이터 흐름

```
브라우저 (HTML/JS)
  → /api/data (Spring Boot DataController)
  → Upstash Redis (서버리스 Redis)
```

### store.js

`local-store.ts` (Next.js 버전)에서 TypeScript 타입만 제거한 JavaScript 버전입니다.

- **`dbGet(key, defaultVal)`**: Redis에서 JSON 데이터 조회 (localStorage 캐시 우선)
- **`dbSet(key, value)`**: Redis에 JSON 데이터 저장
- **`dbGetStr(key)`**: Redis에서 문자열(이미지 base64 등) 조회
- **`dbSetStr(key, value)`**: Redis에 문자열 저장
- **`Store.initNav()`**: 헤더 내비게이션 초기화 (로고, SNS 링크, 모바일 메뉴)

### Redis 키 목록

| 키 | 데이터 |
|----|--------|
| `hn_notices` | 공지사항 배열 |
| `hn_calendar_events` | 일정 배열 |
| `hn_minutes` | 회의록 배열 |
| `hn_club_news` | 동아리 소식 배열 |
| `hn_penalties` | 벌점 배열 |
| `hn_forms` | 양식 배열 |
| `hn_election` | 선거공고 배열 |
| `hn_inquiries` | 문의 배열 |
| `hn_clubs` | 동아리 목록 배열 |
| `hn_banners` | 배너 이미지 배열 (base64) |
| `hn_logo` | 로고 이미지 (base64) |
| `hn_org_image` | 조직도 이미지 (base64) |
| `hn_location_image` | 오시는 길 지도 (base64) |
| `hn_club_map_image` | 동아리방 위치 지도 (base64) |
| `hn_content` | 사이트 전체 설정 (JSON) |

---

## 환경 변수 설정

```bash
# .env (로컬 개발)
UPSTASH_REDIS_URL=rediss://default:비밀번호@호스트.upstash.io:6379
```

Upstash 콘솔 (https://console.upstash.com) → Redis → Connect → **Java/Lettuce** 탭에서 URL 복사

---

## 실행 방법

```bash
# 환경변수 설정 후
export UPSTASH_REDIS_URL="rediss://..."

# Maven으로 실행
./mvnw spring-boot:run

# 또는 JAR 빌드 후 실행
./mvnw package -DskipTests
java -jar target/union-backend-0.0.1-SNAPSHOT.jar
```

서버 시작 후 `http://localhost:8080` 접속

---

## 관리자 페이지

- URL: `/admin`
- 기본 비밀번호: `hongik2025` (admin/index.html의 `ADMIN_PW` 변수에서 변경 가능)

### 관리 가능한 항목

| 탭 | 기능 |
|----|------|
| 총동아리연합회 | 소개글, 비전, 오시는 길 정보, 회칙 |
| 동아리 | 동아리 목록 추가/수정/삭제, 동아리방 건물 위치 |
| 소식마당 | 공지사항, 일정(달력), 회의록, 동아리 소식 |
| 정보마당 | 규칙, 양식 파일, 벌점 현황 |
| 선거 | 선거 공고 관리 |
| 문의 | Q&A 답변 처리 |
| 이미지 | 로고, 배너, 조직도, 오시는 길 지도, 동아리방 지도 |
| 사이트 설정 | 배너 문구, SNS 링크, 푸터 |

---

## 원본 Next.js 프로젝트와의 차이점

| | Next.js 원본 | Spring Boot 버전 |
|--|--|--|
| 언어 | TypeScript | Java (백엔드) + JavaScript (프론트엔드) |
| 렌더링 | React Server/Client Components | Thymeleaf + Vanilla JS |
| API | Next.js Route Handler | Spring Boot @RestController |
| 배포 | Vercel (무료) | Railway/Render 등 (유료 가능) |
| 데이터 | Upstash Redis (동일) | Upstash Redis (동일) |

---

## 주요 Spring Boot 개념 (학습 포인트)

```java
// 1. @RestController — REST API 엔드포인트
@RestController
@RequestMapping("/api/data")
public class DataController { ... }

// 2. @Controller — HTML 페이지 렌더링
@Controller
public class PageController {
    @GetMapping("/") public String index() { return "index"; }
}

// 3. @Service — 비즈니스 로직
@Service
public class RedisService {
    private final StringRedisTemplate redis;
    public String get(String key) { return redis.opsForValue().get(key); }
}

// 4. @Configuration + @Bean — 설정
@Configuration
public class RedisConfig {
    @Bean
    public RedisConnectionFactory redisConnectionFactory() { ... }
}
```

---

## 배포 시 체크리스트

```
□ UPSTASH_REDIS_URL 환경변수 설정
□ spring.thymeleaf.cache=true (application.properties)
□ 관리자 비밀번호 변경 (admin/index.html → ADMIN_PW)
□ CORS 설정 확인 (WebConfig.java)
```
