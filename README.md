# Pre-onboarding-FE 
<div align=right>
  <i>by anjxxyi</i>
</div>

### Part1. 로그인 개념 및 어플리케이션 구조
1. `username`과 `password`를 입력하는 `input`과 `submit button` 생성
2. `users`(유저데이터)와 `_secret`(암호키) 생성
3. **signinSubmitHandler** : `form`에서 `username`과 `password`를 받아 **signin** 함수 호출
4. **signin** : 올바른 `username`, `password`를 입력할 경우, `{message: 'SUCCESS', token: (userInfo, _secret)}` 반환
5. **getUserInfo** : 위 **signin** 함수에서 `token`을 받아 유저 정보 반환
6. 로그인을 성공할 경우, 하단에 `user name`(유저 정보)가 출력되도록 구현