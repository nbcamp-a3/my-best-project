## 내배캠 React 3기 A-3조 뉴스피드 팀 프로젝트

### 📢 프로젝트 개요

**23. 11. 22 - 23. 11. 27**

- 프로젝트명: 내.베.프(my best project)
- 주제: 내일배움캠프 수강생의 프로젝트 공유 커뮤니티
- 소개글: 내일배움캠프 3기 수강생 여러분! 서로의 프로젝트를 공유해 보세요!
- 기대효과: 내일배움캠프 수강생들이 서로 과제를 공유하며 피드백하는 문화

### 👥 팀 소개

- 팀명: 三의 맹세
- 팀원: 준혁(팀장), 혜원, 창성, 영륜

#### ✅ Ground Rules

```
1. 매일 아침 10시 삼의 맹세 회의 - 충성(忠) 정의(義) 예의(禮)
2. 의무적인 휴게시간 원할때 1시간 - 정의(義)
3. 서로 존중하며 배려하기 - 예의(禮)
4. 팀장의 명령에 무조건 복종! - 충성(忠)정의(義) 예의(禮)
5. 항상 나서서 최선을 다해 도와줄 것 - 충성(忠)정의(義) 
6. 팀원 오류 경청하기 - 예의(禮) 정의(義)
```

#### 🎯 목표

**" 프.로.젝.트 완성하기 "**

### 💡 구현 기능

#### 사용자 인증/인가

- 로그인
  - 이메일, 패스워드를 이용한 로그인
  - 소셜 로그인 (Github)
- 회원가입
  - 이메일, 패스워드를 이용한 회원가입
- 오류 표시
  - 서버 응답을 받아 오류 내용 표시


#### 메인 페이지

-  네비게이션
   - 프로필 아이콘 클릭 시 모달창 (외부 영역 클릭 시 닫힘)
   - 마이페이지, 로그아웃 이동 가능
   - 카테고리별 과제 이동
-  랜덤으로 작성한 게시글 메인 화면에 표시
   - 클릭 시 과제 상세 페이지로 이동
-  반응형 UI

#### 과제 목록 페이지

- 작성자 정보와 작성 시간, 썸네일을 포함해 게시글 일부 표시
- 사이드바를 통한 카테고리 이동
- 로그인한 사용자만 게시글 쓰기 페이지로 이동 

#### 과제 상세 페이지

- 게시글 카테고리와 작성자 정보, 제목, 내용, 작성시간 표시
- 자신이 작성한 글만 수정, 삭제 가능
- Github 링크 첨부, 좋아요 기능
- 댓글

  - 로그인한 사용자만 댓글 작성
  - 최신순으로 정렬
  - 자신의 댓글만 삭제

#### 게시글 쓰기 

  - 제목, 내용에 대한 유효성 검사
  - 썸네일 등록과 미리보기 지원
  - 글쓰기 에디터 적용

#### 마이 페이지

- 사용자 프로필
  - 프로필 이미지, 닉네임 수정
  - 프로필 이미지 미리보기
- 작성한 게시글 수와 게시글 목록 표시

### 📝 역할 분담

- 준혁: 메인 페이지, 네비게이션, 좋아요 기능
- 혜원: 과제 상세 페이지, 글쓰기 페이지
- 창성: Authentication, 게시글 작성 에디터
- 영륜: 마이 페이지, 과제 목록 페이지, 상세 페이지 게시글 삭제

### 🚩 개발 내용

#### 💻 개발 환경

- IDE: Visual Studio Code
- OS: windows, Mac
- Package Manager: Yarn Classic (v1.22.19)
- React boilerplate: create-react-app

#### 📌 사용 기술

- React - 사용자와 상호작용할 수 있는 UI를 효율적으로 구현
- Styled-components - 자바스크립트로 스타일 관리. 재사용이 쉬운 컴포넌트를 만들고 동적 스타일링 용이
- Redux - 전역 상태 관리 도구
- React-router-dom - 클라이언트 사이드 라우팅. URL에 맞는 컴포넌트 렌더링
- firebase - 사용자 인증과 데이터베이스 등의 서버 기능 제공
- Toast UI Editor - 마크다운과 위지윅 방식 모두 지원하는 무료 에디터

#### 🌐 페이지

- `/`: 메인 페이지
- `/boards`: 게시글 목록 페이지
- `/boards/:id`: 게시글 상세 페이지
- `/boards/:id/edit`: 과제 수정 페이지
- `/boards/new`: 게시글 작성 페이지
- `/mypage`: 마이 페이지
- `/mypage/edit`: 프로필 수정 페이지

#### 📂 디렉토리 구조

```
📦my-best-project
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂assets
 ┃ ┣ 📂constants
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂component1
 ┃ ┃ ┃ ┣📜component1.jsx
 ┃ ┃ ┃ ┗📜styles.js
 ┃ ┃ ┣ 📂component2
 ┃ ┃ ┃ ┣📜component2.jsx
 ┃ ┃ ┃ ┗📜styles.js
 ┃ ┣ 📂hooks
 ┃ ┣ 📂mock
 ┃ ┣ 📂pages
 ┃ ┣ 📂utils
 ┃ ┣ 📂redux
 ┃ ┃ ┣ 📂config
 ┃ ┃ ┗ 📂modules
 ┃ ┣ 📜App.jsx
 ┃ ┗ 📜index.js
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜jsconfig.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜yarn.lock
```

- `assets/` 멀티미디어 파일(이미지, 폰트)
- `constants/` 상수 (색상, 공유되는 값 등)
- `components/` 재사용 가능한 컴포넌트
- 기능 단위로 나누어 하나의 폴더 내에서 컴포넌트를 생성
  - 스타일은 `styles.js` 파일에 작성하여 컴포넌트에서 import 하여 사용
- `mock/` 샘플 데이터
- `hooks/` 커스텀 훅
- `pages/` 라우팅되는 페이지 컴포넌트
- `redux/` 리덕스 관련 파일
- `utils/` 공통으로 사용하는 함수

#### 🗼 초기 화면 설계

![image-20231122010227872](https://scseong.github.io/assets/images/2023-11-21-231121TIL/image-20231122010227872.png)

### 🎯 어려웠던 점

- 보안 규칙과 권한
  - 보안 규칙을 설정하지 않고 사용자 권한을 부여하는 것에서 firebase 오류들이 많이 발생했습니다. 여러 레퍼런스를 참고하여 규칙과 권한을 설정하여 해결했습니다.

- 비동기 작업
  - firebase와 통신할 때 비동기적으로 이루어져서 데이터를 가져오고 실시간 상태 관리 등 예상대로 이루어지지 않는 경우가 많았습니다. async/await를 사용하여 응답을 기다리고 상태를 Redux로 관리해 UI를 업데이트 했습니다.

- firebase
  - firebase API을 사용해서 사용자 관리와 데이터베이스를 사용하는 것이 어려웠습니다. 

- 프로젝트 구조와 컴포넌트 관리
  - 프로젝트 규모가 커지면서 컴포넌트와 스타일 관리가 어려웠는데 기능 단위로 폴더를 생성해서 연관된 컴포넌트와 스타일을 한 곳에 모아서 작성했습니다.

### 📋 KPT 

![image](https://github.com/nbcamp-a3/my-best-project/assets/82589401/f7f7e11f-6eab-4ea1-a939-7fc8796b4930)

