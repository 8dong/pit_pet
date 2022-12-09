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

1. SSG 방식의 pre-rendering을 사용하며, 초기 매장 정보를 MongoDB에 요청을 보내 응답받아 props로 Home 페이지 컴포넌트에게 전달하여 렌더링합니다.

2. 각 매장 클릭시 해당 매장 페이지로 이동하게 됩니다.

### 스타일 북(/style_book)

1. 스타일 리스트를 react-intersection-observer를 사용하여 Infinity Scroll을 구현하였습니다.

2. Skeleton UI를 적용하여 UX 측면을 개선하였습니다.

3. 각 스타일 클릭시 해당 스타일의 매장 정보 페이지로 이동하게 됩니다.

### 나의 메뉴(/my_info)

1. 로그인한 상태에서만 접속가능하며, next-auth를 통해 소셜 로그인 기능을 구현하였습니다(naver의 경우 개발 단계라 인증이 불가능한 상태이며 goggle과 kakao는 정상적으로 인증이 가능합니다).

### 매장 디테일(/[shopId])

1. 특정 매장에 대한 정보를 표시합니다.

2. 로그인된 경우 리뷰를 작성할 수 있으며, 리뷰의 경우 양끝 공백을 제외한 5글자 이상 작성해야 합니다.

3. 작성된 리뷰를 등록시 MongoDB에 요청을 보내 저장합니다.
