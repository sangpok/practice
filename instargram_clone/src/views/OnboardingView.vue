<template>
    <main id="login-page">
        <section class="splash-image">
            <div class="image-box"></div>
        </section>
        <section class="field-wrap">
            <section class="login-field">
                <p id="logo">Instagram</p>
                <input type="email" name="useremail" id="email" placeholder="전화번호, 사용자 이름 또는 이메일" @input="checkLogin" v-model="useremail" />
                <input type="password" name="userpw" id="password" placeholder="비밀번호" @input="checkLogin" v-model="userpw" />
                <button id="login-btn" :class="isActive ? 'active' : ''" @click="login">로그인</button>
                <div class="delimiter-field">
                    <div class="line"></div>
                    <span class="description">또는</span>
                    <div class="line"></div>
                </div>
                <router-link to="/" id="facebook-login">
                    <span class="material-icons md-18">account_circle</span>
                    <span class="description">Facebook으로 로그인</span>
                </router-link>
                <router-link to="/" id="pwsearch-field">
                    <span>비밀번호를 잊으셨나요?</span>
                </router-link>
            </section>

            <section class="signin-field">계정이 없으신가요? <router-link to="/">가입하기</router-link></section>
            <section class="download-field">
                <span>앱을 다운로드하세요.</span>
                <div class="button-field">
                    <button class="app-download" id="applestore-down">다운로드</button>
                    <button class="app-download" id="playstore-down">다운로드</button>
                </div>
            </section>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'OnboardingView',
        data() {
            return {
                useremail: '',
                userpw: '',
                isActive: false,
            };
        },
        components: {},
        methods: {
            checkLogin() {
                let emailLen = this.useremail.length;
                let pwLen = this.userpw.length;
                this.isActive = Boolean(emailLen >= 1 && pwLen >= 5);
            },

            login() {
                if (this.isActive) this.$router.push('/main');
            },
        },
    };
</script>
;
