# 홍익대학교 총동아리연합회 홈페이지 프로젝트

## 기본 정보
- 학교: 홍익대학교
- 단체: 제39대 총동아리연합회 Union
- 프레임워크: **Spring Boot 3.3 (Java 17)** + Thymeleaf + Tailwind CSS (CDN)
- 원본 프로젝트: `c:\Users\hkm17\Desktop\code\landingpage\hongik-union` (Next.js 버전)

## 개발 서버 실행
```bash
# 환경변수 먼저 설정
export UPSTASH_REDIS_URL="rediss://default:비밀번호@호스트.upstash.io:6379"

# Maven으로 실행
cd C:\Users\hkm17\Desktop\code\hongik-union-backend
./mvnw spring-boot:run
```
→ http://localhost:8080

## 관리자 페이지
- URL: http://localhost:8080/admin
- 기본 비밀번호: `hongik2025`
- admin/index.html 파일 상단의 `ADMIN_PW` 변수에서 변경 가능

## 관리자 탭 기능
| 탭 | 기능 |
|---|---|
| 총동아리연합회 | 소개글, 비전, 오시는 길 정보, 회칙 |
| 동아리 | 동아리 목록 추가/수정/삭제 + 동아리방 건물 위치 |
| 소식마당 | 공지사항, 일정(달력), 회의록, 동아리 소식 |
| 정보마당 | 규칙, 양식 파일 업로드, 벌점 현황 |
| 선거 | 선거 공고 관리 |
| 문의 | Q&A 답변 처리 |
| 이미지 | 로고, 배너 3장, 조직도, 오시는 길 지도, 동아리방 지도 |
| 사이트 설정 | 배너 문구, 인스타·카카오 링크, 푸터 |

## 완성된 페이지 (23개)
- `/` 메인 (배너 슬라이더, 달력, 공지, 오시는 길)
- `/about/intro`, `/about/work`, `/about/org`, `/about/location`, `/about/rules`
- `/clubs/central` (분류 필터+검색), `/clubs/location`
- `/news/notices`, `/news/calendar`, `/news/minutes`, `/news/clubs`
- `/info/rules`, `/info/forms`, `/info/penalty`
- `/election/intro`, `/election/announce`
- `/contact/faq`, `/contact/ask`, `/contact/qna`
- `/admin`

## 데이터 저장 방식
- **Upstash Redis** (서버리스 Redis) — 어디서든 접근 가능
- localStorage 캐시 우선, 백그라운드에서 Redis 동기화
- 이미지: base64로 Redis에 저장 (큰 이미지는 압축 후 저장)
- API: Spring Boot `/api/data` (GET/POST/DELETE)

## 원본 Next.js 프로젝트와 동일한 데이터 공유
- **같은 Upstash Redis를 사용하면 데이터가 공유됨**
- 관리자 페이지에서 입력한 데이터가 양쪽에서 모두 보임

## 남은 할 일
- [ ] Upstash Redis URL 환경변수 설정
- [ ] 배너/로고 실제 이미지 업로드 (관리자 → 이미지)
- [ ] 인스타·카카오 링크 설정 (관리자 → 사이트 설정)
- [ ] 동아리 정보 실제로 입력 (관리자 → 동아리)
- [ ] 관리자 비밀번호 변경
- [ ] Railway/Render/Fly.io 등에 배포

## 배포 순서
1. GitHub 저장소 생성 → 코드 푸시
2. Railway.app 또는 Render.com 가입
3. GitHub 저장소 연결 → 자동 배포
4. 환경변수 `UPSTASH_REDIS_URL` 등록
5. (선택) 커스텀 도메인 연결

## 다음 대화 시작할 때
"이 프로젝트 이어서 작업해줘" 라고 하면
Claude가 이 파일 + CLAUDE.md 읽고 맥락 파악함

## Spring Boot 학습 포인트
이 프로젝트의 Java 파일들:
- `HongikUnionApplication.java` → `@SpringBootApplication` 진입점
- `DataController.java` → `@RestController`, `@GetMapping`, `@PostMapping`, `@RequestParam`, `@RequestBody`
- `PageController.java` → `@Controller`, HTML 뷰 반환
- `RedisService.java` → `@Service`, `StringRedisTemplate` 사용법
- `RedisConfig.java` → `@Configuration`, `@Bean`, SSL Redis 연결
- `WebConfig.java` → `WebMvcConfigurer`, CORS 설정
