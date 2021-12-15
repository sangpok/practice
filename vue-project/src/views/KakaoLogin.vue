<template>
    <div>
        <a id="custom-login-btn" @click="kakaoLogin()">
            <img
                src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                width="222"
            />
        </a>
    </div>
</template>

<script>
    export default {
        methods: {
            kakaoLogin() {
                window.Kakao.Auth.login({
                    scope: 'profile_nickname, profile_image, account_email',
                    success: this.getKakaoAccount,
                });
            },
            getKakaoAccount() {
                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: (res) => {
                        const kakao_account = res.kakao_account;
                        const nickname = kakao_account.profile.nickname;
                        const email = kakao_account.email;

                        console.log('nickname', nickname);
                        console.log('email', email);

                        alert('로그인 성공!');
                    },
                    fail: (error) => {
                        console.log(error);
                    },
                });
            },
            kakaoLogout() {
                window.Kakao.Auth.logout((response) => {
                    console.log(response);
                });
            },
        },
    };
</script>
