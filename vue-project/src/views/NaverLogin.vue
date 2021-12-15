<template>
    <div>
        <div id="naverIdLogin"></div>
        <button type="button" @click="logout">로그아웃</button>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                naverLogin: null,
            };
        },
        mounted() {
            this.naverLogin = new window.naver.LoginWithNaverId({
                clientId: 'OWTBne3kjdN4u_HRtzIw',
                callbackUrl: 'http://localhost:8080/naverlogin',
                isPopup: true,
                loginButton: {
                    color: 'green',
                    type: 3,
                    height: 60,
                },
            });

            this.naverLogin.init();

            this.naverLogin.getLoginStatus((status) => {
                if (status) {
                    console.log(status);
                    console.log(this.naverLogin.user);

                    let email = this.naverLogin.user.getEmail();

                    if (email == undefined || email == null) {
                        alert(
                            '이메일은 필수 정보입니다. 정보 제공을 동의해주세요.'
                        );
                        this.naverLogin.reprompt();
                        return;
                    }
                } else {
                    console.log('callback 처리에 실패하였습니다.');
                }
            });
        },
        methods: {
            logout() {
                const accessToken = this.naverLogin.accessToken.accessToken;
                const url = `/oauth2.0/token?grant_type=delete&client_id=OWTBne3kjdN4u_HRtzIw&client_secret=CWFJ3dlgca&access_token=${accessToken}&service_provider=NAVER`;

                axios.get(url).then((res) => console.log(res.data));
            },
        },
    };
</script>
