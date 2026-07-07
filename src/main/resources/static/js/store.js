// store.js — local-store.ts의 JavaScript 버전 (타입 제거)

/* ──────────────────────────────────────────────
   공휴일 데이터 (holidays.ts 포팅)
────────────────────────────────────────────── */
const FIXED_HOLIDAYS = {
  '01-01':'신정','03-01':'삼일절','05-05':'어린이날',
  '06-06':'현충일','08-15':'광복절','10-03':'개천절',
  '10-09':'한글날','12-25':'크리스마스',
};
const LUNAR_HOLIDAYS = {
  '2024-02-09':'설날연휴','2024-02-10':'설날','2024-02-11':'설날연휴','2024-02-12':'대체공휴일',
  '2024-05-15':'부처님오신날','2024-09-16':'추석연휴','2024-09-17':'추석','2024-09-18':'추석연휴',
  '2025-01-28':'설날연휴','2025-01-29':'설날','2025-01-30':'설날연휴',
  '2025-05-05':'부처님오신날','2025-10-05':'추석연휴','2025-10-06':'추석','2025-10-07':'추석연휴','2025-10-08':'대체공휴일',
  '2026-02-17':'설날연휴','2026-02-18':'설날','2026-02-19':'설날연휴',
  '2026-05-24':'부처님오신날','2026-09-24':'추석연휴','2026-09-25':'추석','2026-09-26':'추석연휴',
  '2027-02-06':'설날연휴','2027-02-07':'설날','2027-02-08':'설날연휴',
  '2027-05-13':'부처님오신날','2027-10-14':'추석연휴','2027-10-15':'추석','2027-10-16':'추석연휴',
};

function getHoliday(dateStr) {
  if (LUNAR_HOLIDAYS[dateStr]) return LUNAR_HOLIDAYS[dateStr];
  return FIXED_HOLIDAYS[dateStr.slice(5)] || null;
}

/* ──────────────────────────────────────────────
   기본값
────────────────────────────────────────────── */
const defaultNotices = [
  { id:'1', title:'[공지] 2025년 1학기 동아리 활동 보고서 제출 안내', content:'자세한 내용은 추후 공지 예정입니다.', isPinned:true, createdAt:'2025-05-28' },
  { id:'2', title:'[공지] 동아리방 청소 및 점검 일정 안내', content:'', isPinned:false, createdAt:'2025-05-25' },
  { id:'3', title:'[공지] 총동아리연합회 정기총회 개최 안내', content:'', isPinned:false, createdAt:'2025-05-20' },
];
const defaultMinutes = [
  { id:'1', title:'2025년 1학기 제5차 정기회의', date:'2025-05-20', attendees:'15명' },
  { id:'2', title:'2025년 1학기 제4차 정기회의', date:'2025-05-06', attendees:'13명' },
];
const defaultForms = [
  { id:'1', name:'동아리 등록 신청서', description:'신규 동아리 등록 시 제출', fileType:'HWP', updatedAt:'2025.03' },
  { id:'2', name:'동아리 등록 갱신 신청서', description:'매 학기 갱신 시 제출', fileType:'HWP', updatedAt:'2025.03' },
  { id:'3', name:'활동 지원금 신청서', description:'활동 지원금 신청 시 제출', fileType:'HWP', updatedAt:'2025.03' },
  { id:'4', name:'활동 보고서 양식', description:'학기 말 제출 필수', fileType:'HWP', updatedAt:'2025.03' },
];
const defaultClubs = [
  { id:1, name:'홍익극회', category:'공연분과', room:'A동 101호', desc:'연극 공연 및 창작 활동을 하는 동아리', president:'홍길동', contact:'010-0000-0001', recruitPeriod:'매 학기 초 모집', meetingSchedule:'매주 화·목 18:00', intro:'홍익극회는 연극을 사랑하는 사람들이 모여 창작 활동을 하는 동아리입니다. 매 학기 정기 공연을 개최하며, 연기·연출·스태프 등 다양한 분야에서 활동할 수 있습니다.', activities:['정기 연극 공연 (매 학기)','창작극 제작','워크숍 및 연기 수업','타 대학 연극제 참가'], targets:['연극에 관심 있는 누구나','연기 경험 없어도 가능','공연 기획·제작에 관심 있는 학생'], instagram:'@hongik_theatre', imageUrl:'' },
  { id:2, name:'홍익밴드', category:'공연분과', room:'D동 205호', desc:'다양한 장르의 음악을 연주하는 밴드 동아리', president:'김민준', contact:'010-0000-0002', recruitPeriod:'매 학기 초 모집', meetingSchedule:'매주 수·금 18:00', intro:'홍익밴드는 기타·베이스·드럼·키보드·보컬 등 밴드 구성으로 다양한 장르의 음악을 연주하는 동아리입니다. 매 학기 정기 공연과 교내 행사 공연을 진행합니다.', activities:['정기 공연 (매 학기)','교내 행사 공연','합주 연습','악기별 레슨'], targets:['악기 연주 가능한 학생','밴드 음악을 좋아하는 학생','보컬 지원 가능'], instagram:'@hongik_band', imageUrl:'' },
  { id:3, name:'홍익농구', category:'스포츠분과', room:'체육관', desc:'농구를 즐기고 실력을 키우는 동아리', president:'이준혁', contact:'010-0000-0003', recruitPeriod:'상시 모집', meetingSchedule:'매주 토 14:00', intro:'홍익농구는 농구를 좋아하는 학생들이 모여 함께 운동하고 친목을 도모하는 동아리입니다. 초보자도 환영하며, 교내외 대회에도 참가합니다.', activities:['정기 연습 (매주)','학교 농구 리그 참가','친선 경기','농구 기초 교육'], targets:['농구를 좋아하는 누구나','초보자도 환영','규칙적으로 참여 가능한 학생'], instagram:'@hongik_basketball', imageUrl:'' },
  { id:4, name:'홍익축구', category:'스포츠분과', room:'운동장', desc:'축구 경기 및 친선 대회 참여 동아리', president:'박성민', contact:'010-0000-0004', recruitPeriod:'매 학기 초 모집', meetingSchedule:'매주 일 10:00', intro:'홍익축구는 축구를 사랑하는 학생들의 동아리입니다. 정기 연습과 대회 참가를 통해 실력을 향상시키고 팀워크를 키웁니다.', activities:['정기 연습 (매주)','교내 축구 대회','타 대학 친선 경기','풋살 대회 참가'], targets:['축구를 좋아하는 누구나','초보자도 환영'], instagram:'@hongik_soccer', imageUrl:'' },
  { id:5, name:'홍익등산', category:'레저분과', room:'B동 302호', desc:'주말 등산 및 자연 탐방 동아리', president:'최서연', contact:'010-0000-0005', recruitPeriod:'상시 모집', meetingSchedule:'격주 토 06:00 (산행)', intro:'홍익등산은 자연 속에서 건강을 찾는 동아리입니다. 서울 근교 명산부터 전국 유명 산까지 함께 오르며 친목을 다집니다.', activities:['정기 산행 (격주)','국내 유명 산 탐방','MTB·트레킹 병행','산행 후 뒤풀이'], targets:['등산을 좋아하는 누구나','자연을 사랑하는 학생','체력에 관계없이 참여 가능'], instagram:'@hongik_hiking', imageUrl:'' },
  { id:6, name:'홍익CCC', category:'종교분과', room:'G동 201호', desc:'기독교 신앙 공동체 동아리', president:'정다은', contact:'010-0000-0006', recruitPeriod:'상시 모집', meetingSchedule:'매주 목 18:00', intro:'홍익CCC는 기독교 신앙을 바탕으로 함께 성장하는 공동체입니다. 예배·성경공부·봉사활동을 통해 신앙과 인성을 키워갑니다.', activities:['주간 예배','성경 공부','봉사 활동','수련회'], targets:['기독교 신앙에 관심 있는 학생','종교 관계없이 관심 있는 누구나'], instagram:'@hongik_ccc', imageUrl:'' },
  { id:7, name:'홍익봉사', category:'사회분과', room:'G동 105호', desc:'지역 사회 봉사 활동을 하는 동아리', president:'임지우', contact:'010-0000-0007', recruitPeriod:'매 학기 초 모집', meetingSchedule:'매월 2·4주 토 10:00', intro:'홍익봉사는 지역 사회에 기여하는 다양한 봉사 활동을 운영하는 동아리입니다. 아동센터·노인복지관·환경봉사 등 다양한 분야에서 활동합니다.', activities:['지역 아동센터 교육 봉사','노인복지관 방문','환경 정화 활동','헌혈 캠페인'], targets:['봉사에 관심 있는 누구나','사회 기여를 원하는 학생'], instagram:'@hongik_volunteer', imageUrl:'' },
  { id:8, name:'홍익영어토론', category:'학술분과', room:'E동 401호', desc:'영어로 토론하고 스피킹 실력을 키우는 동아리', president:'강현우', contact:'010-0000-0008', recruitPeriod:'매 학기 초 모집', meetingSchedule:'매주 화 19:00', intro:'홍익영어토론은 영어 토론을 통해 글로벌 커뮤니케이션 능력을 키우는 동아리입니다. 시사 이슈를 영어로 토론하며 스피킹과 논리력을 향상시킵니다.', activities:['주간 영어 토론','TESOL 특강','영어 모의 UN','스피치 대회 참가'], targets:['영어 토론에 관심 있는 학생','초·중·고급 모두 환영','TOEIC·토플 준비생'], instagram:'@hongik_debate', imageUrl:'' },
  { id:9, name:'홍익사진', category:'전시분과', room:'F동 503호', desc:'사진 촬영 및 전시회를 개최하는 동아리', president:'윤지아', contact:'010-0000-0009', recruitPeriod:'매 학기 초 모집', meetingSchedule:'매주 금 17:00', intro:'홍익사진은 사진에 관심 있는 학생들이 모여 촬영 기술을 연마하고 작품을 공유하는 동아리입니다. 매 학기 정기 전시회를 개최합니다.', activities:['정기 사진전 (매 학기)','출사 (교내·외)','사진 편집 워크숍','공모전 참가'], targets:['사진에 관심 있는 누구나','DSLR·미러리스·스마트폰 모두 가능','입문자 환영'], instagram:'@hongik_photo', imageUrl:'' },
];
const defaultElection = [
  { id:'1', title:'[공고] 제40대 총동아리연합회 임원 선거 일정 공고', content:'', date:'2025-11-01', status:'예정' },
  { id:'2', title:'[공고] 제39대 총동아리연합회 임원 선거 당선자 발표', content:'', date:'2024-11-20', status:'완료' },
];
const defaultContent = {
  bannerSlides: [
    { title:'홍익대학교 총동아리연합회', subtitle:'우리 모두가 함께 만들어가는 동아리 문화' },
    { title:'2025년 동아리 활동', subtitle:'다양한 분야에서 꿈을 펼치세요' },
    { title:'동아리 신규 가입 안내', subtitle:'나에게 맞는 동아리를 찾아보세요' },
  ],
  aboutIntro: '홍익대학교 총동아리연합회(이하 총동아리연합회)는 홍익대학교 내 모든 중앙동아리를 대표하는 학생 자치 기구입니다.\n\n총동아리연합회는 동아리들의 권익을 대변하고, 동아리 활동을 지원하며, 학교와 동아리 간의 원활한 소통을 담당합니다.',
  aboutVision: '모든 동아리가 자유롭게 활동하고 성장할 수 있는 환경을 만들어, 홍익대학교 내 동아리 문화를 더욱 풍성하게 발전시킵니다.',
  workItems: [
    { title:'동아리 등록 및 관리', desc:'신규 동아리 등록 심사, 기존 동아리 활동 현황 관리 및 지원' },
    { title:'활동 지원금 배분', desc:'학교로부터 지원받은 활동비를 각 동아리에 공정하게 배분' },
    { title:'동아리방 관리', desc:'동아리방 배정, 청소 점검, 시설 개선 요청 등 관리 업무' },
    { title:'공연 및 행사 기획', desc:'전체 동아리 연합 행사, 공연 일정 조율 및 진행 지원' },
    { title:'학교-동아리 간 소통', desc:'학교 측과 동아리 간의 원활한 소통 및 의견 전달 창구 역할' },
    { title:'정기총회 운영', desc:'매 학기 정기총회 개최, 주요 안건 심의 및 의결' },
  ],
  locationAddress: '홍익대학교 G동 301-1호 총동아리연합회실',
  locationHours: '평일 10:00 ~ 17:00',
  locationPhone: '02-320-XXXX',
  locationEmail: 'union@hongik.ac.kr',
  rules: '제1장 총칙\n제1조 본 회의 명칭은 홍익대학교 총동아리연합회라 한다.',
  faqs: [
    { q:'동아리를 새로 만들고 싶은데 어떻게 하나요?', a:'매 학기 초에 신규 동아리 등록 신청을 받습니다.' },
    { q:'동아리방은 어떻게 신청하나요?', a:'동아리방은 학기 초에 선착순 또는 추첨으로 배정됩니다.' },
    { q:'활동 지원금은 언제 받을 수 있나요?', a:'활동 지원금은 학기 초에 신청을 받아 배분합니다.' },
    { q:'총동아리연합회 운영시간은 언제인가요?', a:'평일 오전 10시부터 오후 5시까지 운영합니다. G동 301-1호에 위치합니다.' },
  ],
  electionIntro: '동아리선거관리위원회(이하 선관위)는 총동아리연합회 임원 선거를 공정하고 투명하게 관리하기 위해 구성된 독립적인 기구입니다.',
  electionValues: [
    { title:'공정성', desc:'독립적으로 운영하여 선거의 공정성 보장' },
    { title:'투명성', desc:'모든 선거 과정을 공개하여 투명성 확보' },
    { title:'적법성', desc:'관련 규정에 따라 적법하게 선거 진행' },
  ],
  instagramUrl: '', kakaoUrl: '',
  clubBuildings: [
    { building:'A동', clubs:['홍익극회 (101호)','홍익뮤지컬 (102호)'] },
    { building:'B동', clubs:['홍익등산 (302호)','홍익사이클 (303호)'] },
    { building:'D동', clubs:['홍익밴드 (205호)','홍익재즈 (206호)'] },
    { building:'G동', clubs:['총동아리연합회실 (301-1호)','홍익봉사 (105호)'] },
  ],
  infoRules: [
    { title:'동아리 등록 규정', desc:'신규 동아리 등록 및 등록 갱신 관련 규정' },
    { title:'동아리방 사용 규정', desc:'동아리방 사용 방법, 금지 사항, 청소 의무 등' },
    { title:'활동 지원금 관리 규정', desc:'지원금 신청, 사용, 정산 관련 규정' },
    { title:'벌점 부과 기준', desc:'벌점 부과 사유, 기준, 이의신청 절차' },
  ],
  askTitle: '질문 있어요',
  askDesc: '궁금한 점을 남겨주시면 확인 후 답변드리겠습니다.',
  askCategories: ['동아리 등록 관련','동아리방 관련','지원금 관련','증명서 발급 관련','벌점 관련','기타'],
  activityCertDesc: '양식 파일을 다운로드 후 작성하여 총동아리연합회실(G301-1)에 제출하거나 카카오톡으로 전달해주세요.',
  clubCertDesc: '양식 파일을 다운로드 후 작성하여 총동아리연합회실(G301-1)에 제출하거나 카카오톡으로 전달해주세요.',
  certSubmitTitle: '제출 방법',
  certSubmitMethods: ['파일 작성 후 총동아리연합회실 G301-1 직접 제출','또는 카카오톡 플러스친구로 파일 전달'],
  footerTitle: '홍익대학교 총동아리연합회',
  footerCopyright: '© 2025 홍익대학교 총동아리연합회. All rights reserved.',
};

/* ──────────────────────────────────────────────
   DB 헬퍼 (local-store.ts dbGet/dbSet 포팅)
────────────────────────────────────────────── */
const API = '/api/data';

async function dbGet(key, def) {
  const cached = localStorage.getItem(key);
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      fetch(`${API}?key=${encodeURIComponent(key)}`)
        .then(r => { if (!r.ok) throw new Error(); return r.json(); })
        .then(v => { if (typeof v === 'string') localStorage.setItem(key, v); else localStorage.removeItem(key); })
        .catch(() => {});
      return parsed;
    } catch { localStorage.removeItem(key); }
  }
  try {
    const res = await fetch(`${API}?key=${encodeURIComponent(key)}`);
    if (!res.ok) return def;
    const value = await res.json();
    if (value === null) return def;
    try { localStorage.setItem(key, value); } catch {}
    return JSON.parse(value);
  } catch { return def; }
}

async function dbSet(key, value) {
  const serialized = JSON.stringify(value);
  try { localStorage.setItem(key, serialized); } catch (e) { try { localStorage.removeItem(key); } catch {} }
  try {
    const res = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, value: serialized }),
    });
    if (!res.ok) console.error('[DB] 저장 실패:', key, res.status);
  } catch (e) { console.error('[DB] 저장 오류:', key, e); }
}

async function dbGetStr(key) {
  const cached = localStorage.getItem(key);
  if (cached && cached !== '[object Object]') {
    fetch(`${API}?key=${encodeURIComponent(key)}`)
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(v => { if (typeof v === 'string') localStorage.setItem(key, v); else localStorage.removeItem(key); })
      .catch(() => {});
    return cached;
  }
  if (cached === '[object Object]') localStorage.removeItem(key);
  try {
    const res = await fetch(`${API}?key=${encodeURIComponent(key)}`);
    if (!res.ok) return '';
    const value = await res.json();
    if (value !== null && typeof value === 'string') { try { localStorage.setItem(key, value); } catch {} return value; }
    return '';
  } catch { return ''; }
}

async function dbSetStr(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { try { localStorage.removeItem(key); } catch {} }
  try {
    const res = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, value }),
    });
    if (!res.ok) console.error('[DB] 저장 실패:', key, res.status);
  } catch (e) { console.error('[DB] 저장 오류:', key, e); }
}

/* ──────────────────────────────────────────────
   유틸
────────────────────────────────────────────── */
function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve({ url: e.target.result, name: file.name, type: file.type });
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function compressImage(file, maxW = 400, mime = 'image/png', quality = 0.85) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = e => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const s = img.width > maxW ? maxW / img.width : 1;
        const w = Math.round(img.width * s) || 1;
        const h = Math.round(img.height * s) || 1;
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL(mime, quality));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function downloadFile(url, name) {
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
}

function openAsBlob(att) {
  const parts = att.url.split(',');
  const mime = parts[0].split(':')[1].split(';')[0];
  const binary = atob(parts[1]);
  const arr = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) arr[i] = binary.charCodeAt(i);
  const blob = new Blob([arr], { type: mime });
  window.open(URL.createObjectURL(blob), '_blank');
}

/* ──────────────────────────────────────────────
   getter / setter (local-store.ts 동일)
────────────────────────────────────────────── */
const Store = {
  getNotices:    () => dbGet('hn_notices', defaultNotices),
  saveNotices:   v  => dbSet('hn_notices', v),
  getMinutes:    () => dbGet('hn_minutes', defaultMinutes),
  saveMinutes:   v  => dbSet('hn_minutes', v),
  getClubNews:   () => dbGet('hn_club_news', []),
  saveClubNews:  v  => dbSet('hn_club_news', v),
  getPenalties:  () => dbGet('hn_penalties', []),
  savePenalties: v  => dbSet('hn_penalties', v),
  getForms:      () => dbGet('hn_forms', defaultForms),
  saveForms:     v  => dbSet('hn_forms', v),
  getElection:   () => dbGet('hn_election', defaultElection),
  saveElection:  v  => dbSet('hn_election', v),
  getInquiries:  () => dbGet('hn_inquiries', []),
  saveInquiries: v  => dbSet('hn_inquiries', v),
  getBanners: async () => {
    const countStr = await dbGetStr('hn_banner_count');
    if (!countStr) {
      const legacy = await dbGet('hn_banners', null);
      if (legacy && Array.isArray(legacy) && legacy.some(b => b)) {
        await Store.saveBanners(legacy);
        return legacy;
      }
      return ['','',''];
    }
    const count = parseInt(countStr, 10) || 0;
    return Promise.all(Array.from({ length: count }, (_, i) => dbGetStr(`hn_banner_${i}`)));
  },
  saveBanners: async arr => {
    await dbSetStr('hn_banner_count', String(arr.length));
    await Promise.all(arr.map((img, i) => dbSetStr(`hn_banner_${i}`, img || '')));
  },
  getCalendarEvents:  () => dbGet('hn_calendar_events', []),
  saveCalendarEvents: v  => dbSet('hn_calendar_events', v),
  getClubs: async () => {
    const data = await dbGet('hn_clubs', []);
    if (data.length === 0) {
      const seeded = defaultClubs.map(c => ({ ...c, instagram: c.instagram || '', imageUrl: '' }));
      await dbSet('hn_clubs', seeded);
      return seeded;
    }
    return data;
  },
  saveClubs: v => dbSet('hn_clubs', v),
  getProvisionalClubs:  () => dbGet('hn_provisional_clubs', []),
  saveProvisionalClubs: v  => dbSet('hn_provisional_clubs', v),
  getAdminPassword:  async () => (await dbGetStr('hn_admin_pw')) || 'hongik2025admin',
  saveAdminPassword: pw => dbSetStr('hn_admin_pw', pw),
  getNoticeAttachment: async id => { const v = await dbGetStr(`hn_att_${id}`); return v ? JSON.parse(v) : null; },
  saveNoticeAttachment: (id, att) => dbSetStr(`hn_att_${id}`, JSON.stringify({ name: att.name, type: att.type, url: att.url })),
  getNoticeImages: async id => { const v = await dbGetStr(`hn_imgs_${id}`); return v ? JSON.parse(v) : []; },
  saveNoticeImages: (id, images) => dbSetStr(`hn_imgs_${id}`, JSON.stringify(images)),
  getLogo: async () => {
    localStorage.removeItem('hn_logo');
    return dbGetStr('hn_logo');
  },
  saveLogo: v => {
    localStorage.removeItem('hn_logo');
    return dbSetStr('hn_logo', v);
  },
  getOrgImage:       () => dbGetStr('hn_org_image'),
  saveOrgImage:      v  => dbSetStr('hn_org_image', v),
  getLocationImage:  () => dbGetStr('hn_location_image'),
  saveLocationImage: v  => dbSetStr('hn_location_image', v),
  getClubMapImage:   () => dbGetStr('hn_club_map_image'),
  saveClubMapImage:  v  => dbSetStr('hn_club_map_image', v),
  getActivityCertFile: async () => { const v = await dbGetStr('hn_activity_cert'); return v ? JSON.parse(v) : null; },
  saveActivityCertFile: att => dbSetStr('hn_activity_cert', JSON.stringify(att)),
  getClubCertFile: async () => { const v = await dbGetStr('hn_club_cert'); return v ? JSON.parse(v) : null; },
  saveClubCertFile: att => dbSetStr('hn_club_cert', JSON.stringify(att)),
  getSiteContent: async () => {
    const data = await dbGet('hn_content', {});
    return { ...defaultContent, ...data };
  },
  saveSiteContent: v => dbSet('hn_content', v),
  getHoliday,
  readFileAsBase64,
  compressImage,
  downloadFile,
  openAsBlob,
};

/* ──────────────────────────────────────────────
   네비게이션 초기화
────────────────────────────────────────────── */
const NAV_ITEMS = [
  { title:'총동아리연합회', href:'/about/intro', submenu:[
    { title:'소개', href:'/about/intro' },
    { title:'주요업무', href:'/about/work' },
    { title:'조직도', href:'/about/org' },
    { title:'오시는 길', href:'/about/location' },
    { title:'회칙', href:'/about/rules' },
  ]},
  { title:'동아리 소개', href:'/clubs/central', submenu:[
    { title:'중앙동아리', href:'/clubs/central' },
    { title:'가동아리', href:'/clubs/provisional' },
    { title:'동아리방 위치', href:'/clubs/location' },
  ]},
  { title:'소식마당', href:'/news/notices', submenu:[
    { title:'공지사항', href:'/news/notices' },
    { title:'일정', href:'/news/calendar' },
    { title:'회의록', href:'/news/minutes' },
    { title:'동아리 소식', href:'/news/clubs' },
  ]},
  { title:'정보마당', href:'/info/rules', submenu:[
    { title:'규칙', href:'/info/rules' },
    { title:'양식 및 가이드라인', href:'/info/forms' },
    { title:'활동증명서', href:'/info/activity-cert' },
    { title:'동아리증명서', href:'/info/club-cert' },
    { title:'벌점 현황', href:'/info/penalty' },
  ]},
  { title:'동아리선거관리위원회', href:'/election/intro', submenu:[
    { title:'소개', href:'/election/intro' },
    { title:'선거 공고', href:'/election/announce' },
  ]},
  { title:'문의사항', href:'/contact/faq', submenu:[
    { title:'자주 묻는 질문', href:'/contact/faq' },
    { title:'질문 있어요', href:'/contact/ask' },
  ]},
];

async function initNav() {
  const path = window.location.pathname;
  const [content, logo] = await Promise.all([Store.getSiteContent(), Store.getLogo()]);

  // 로고
  const logoText = document.getElementById('logo-text');
  const logoImg  = document.getElementById('logo-img');
  if (logo && logoImg) {
    logoImg.src = logo;
    logoImg.style.display = 'block';
    if (logoText) logoText.style.display = 'none';
  }

  // 데스크탑 내비
  const desktopNav = document.getElementById('desktop-nav');
  if (desktopNav) {
    desktopNav.innerHTML = NAV_ITEMS.map(item => {
      const isActive = path.startsWith(item.href.split('/').slice(0,2).join('/'));
      return `
        <div class="relative group h-full flex items-center">
          <a href="${item.href}" class="px-3 xl:px-4 h-full flex items-center text-sm font-medium transition-colors whitespace-nowrap border-b-2 ${isActive ? 'text-gray-900 border-gray-900' : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'}">
            ${item.title}
          </a>
          <div class="absolute top-full left-0 hidden group-hover:block min-w-36 bg-white shadow-lg rounded-b-lg overflow-hidden z-50 border-t-2 border-gray-900">
            ${item.submenu.map(sub => `
              <a href="${sub.href}" class="block px-4 py-2.5 text-sm transition-colors ${path === sub.href ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}">
                ${sub.title}
              </a>
            `).join('')}
          </div>
        </div>`;
    }).join('');
  }

  // SNS 아이콘
  const icons = document.getElementById('header-icons');
  if (icons) {
    icons.insertAdjacentHTML('afterbegin', `
      <a href="${content.instagramUrl || '#'}" ${content.instagramUrl ? 'target="_blank"' : ''} class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-600">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
      </a>
      <a href="${content.kakaoUrl || '#'}" ${content.kakaoUrl ? 'target="_blank"' : ''} class="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="#3A1D1D"><path d="M12 3C6.48 3 2 6.69 2 11.25c0 2.9 1.87 5.45 4.68 6.96L5.5 21l3.9-2.04C10.23 19.31 11.1 19.5 12 19.5c5.52 0 10-3.69 10-8.25S17.52 3 12 3z"/></svg>
      </a>
    `);
  }

  // 모바일 메뉴
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    mobileMenu.innerHTML = NAV_ITEMS.map(item => `
      <div>
        <button class="mobile-menu-toggle w-full flex items-center justify-between px-4 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 border-b border-gray-100">
          ${item.title}
          <svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="mobile-submenu hidden bg-gray-50">
          ${item.submenu.map(sub => `<a href="${sub.href}" class="block px-8 py-3 text-sm text-gray-600 hover:text-gray-900 border-b border-gray-100">${sub.title}</a>`).join('')}
        </div>
      </div>
    `).join('');

    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileMenu.querySelectorAll('.mobile-menu-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const sub = btn.nextElementSibling;
        const svg = btn.querySelector('svg');
        sub.classList.toggle('hidden');
        svg.style.transform = sub.classList.contains('hidden') ? '' : 'rotate(180deg)';
      });
    });
  }

  // 푸터
  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.className = 'bg-gray-700 text-gray-300 py-6 mt-4';
    footer.innerHTML = `
      <div class="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>
          <p class="text-sm font-semibold text-white">${content.footerTitle || '홍익대학교 총동아리연합회'}</p>
          <p class="text-xs mt-1">위치: ${content.locationAddress || ''} · 이메일: ${content.locationEmail || ''}</p>
          <p class="text-xs mt-0.5">${content.footerCopyright || '© 2026 홍익대학교 총동아리연합회 Union. All rights reserved.'}</p>
        </div>
        <div class="flex flex-col items-end gap-1">
          <a href="/admin" class="text-xs text-gray-400 hover:text-white transition-colors">관리자 페이지</a>
          <a href="https://www.hongik.ac.kr/kr/etc/privacy-policy.do" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-300 hover:text-white underline underline-offset-2 inline-block transition-colors">개인정보 처리방침</a>
        </div>
      </div>
    `;
  }
}

/* ──────────────────────────────────────────────
   스크롤 리빌 (ScrollReveal.tsx 포팅) — [data-sr] 요소가
   뷰포트에 들어오면 sr-visible + sr-{애니메이션} 클래스를 붙인다
────────────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('[data-sr]');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const anim = el.dataset.sr || 'fade-up';
      const delay = el.dataset.srDelay || '0';
      const duration = el.dataset.srDuration || '600';
      el.style.animationDelay = `${delay}ms`;
      el.style.animationDuration = `${duration}ms`;
      el.classList.add('sr-visible', `sr-${anim}`);
      observer.unobserve(el);
    });
  }, { threshold: 0.15 });
  els.forEach(el => observer.observe(el));
}
document.addEventListener('DOMContentLoaded', initScrollReveal);
Store.initScrollReveal = initScrollReveal;

Store.initNav = initNav;

/* ──────────────────────────────────────────────
   페이지 공개(reveal) — 데이터 렌더링이 끝난 뒤 호출하면
   body에 'ready' 클래스가 붙어 화면이 한 번에 나타난다.
   페이지 스크립트가 실패해도 화면이 영원히 안 뜨는 일이 없도록
   안전장치로 3초 뒤에는 무조건 공개한다.
────────────────────────────────────────────── */
function revealPage() { document.body.classList.add('ready'); }
setTimeout(revealPage, 15000);
Store.reveal = revealPage;

window.Store = Store;
