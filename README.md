# Pre-onboarding-FE 
<div align=right>
  <i>by anjxxyi</i>
</div>

### Part2. JWT 개념 및 토큰을 이용한 자동로그인 구현
1. **login** : 올바른 `email`, `password`를 입력할 경우 로그인 연결 및 `Local storage`에 `token`저장
2. **getCurrentUserInfo** : `Local storage`에 저장된 `token`으로 `userInfo`(유저 정보) 조회 및 반환
3. 메인 페이지에서 `Local storage`의 값을 이용해 자동로그인