# PIT PET

## 프로젝트 실행

1. <code>npm i</code>

2. <code>npm run dev</code>

3. <a href="http://localhost:3000/" target="_blank">http://localhost:3000/</a> 접속

## 기술 스택

  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" alt="styled-components">
  <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  
## 구현 명세

### 컴포넌트

atnd 라이브러리를 사용하였으며, styled-components를 통해 CSS 스타일을 수정하였습니다.

### 매장 리스트(/)

1. SSG 방식의 pre-rendering을 사용하여 매장 리스트를 MongoDB에 요청을 보내 응답받아 props로 Home 컴포넌트에게 전달하여 렌더링합니다.

2. 각 매장 클릭시 해당 매장 페이지로 이동하게 됩니다.

### 스타일 북(/style_book)

1. SSG 방식의 pre-rendering을 사용하여 스타일 리스트를 MongoDB에 요청을 보내 응답받아 props로 StylePage 컴포넌트에게 전달하여 렌더링합니다.

2. 스타일 리스트를 react-intersection-observer를 사용하여 Infinity Scroll을 구현하였습니다. Skeleton UI 도달시 MongoDB에 요청을 보내 추가적으로 로드되도록 작성하였습니다.

3. Skeleton UI를 적용하여 UX 측면을 개선하였습니다.

4. 각 스타일 클릭시 해당 스타일의 매장 정보 페이지로 이동하게 됩니다.

### 나의 메뉴(/my_info)

1. 로그인한 상태에서만 접속가능하며, 로그인된 상태라면 나의 정보가 표시됩니다.

### 매장 정보 페이지(/[shopId])

1. SSR 방식의 pre-rendering을 사용하여 매장 정보를 MongoDB에 요청을 보내 응답받아 props로 ShopPage 컴포넌트에게 전달하여 렌더링합니다.

2. 로그인된 경우 리뷰를 작성할 수 있으며, 리뷰의 경우 양끝 공백을 제외한 5글자 이상 작성해야 합니다.

3. 작성된 리뷰를 등록시 MongoDB에 요청을 보내 저장합니다.

### Next-auth
next-auth 라이브러리를 사용하여 Naver, Kakao, Google 소셜 로그인을 구하였습니다. JWT 방식의 인증 방식을 사용하며 인증된 상태에서만 리뷰 작성 기능이 가능하도록 구현하였습니다,

Naver 인증의 경우 개발 단계라 등록된 계정만이 인증 가능하며, 이외 Kakao와 Google의 경우 정상적으로 인증이 동작합니다.
