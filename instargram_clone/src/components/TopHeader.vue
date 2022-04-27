<template>
    <header>
        <section id="logo">
            <router-link to="/main">Instagram</router-link>
        </section>

        <section id="search-field">
            <div class="search-box">
                <span class="material-icons md-24">search</span>
                <input type="text" v-model="searchText" placeholder="검색" />
            </div>
        </section>

        <section id="navbtn-field">
            <button @click="navbtnClick(0)">
                <router-link to="/main"><span :class="outlinedStyle(0)">home</span></router-link>
            </button>
            <button @click="navbtnClick(1)">
                <router-link to="/dm"><span :class="outlinedStyle(1)">chat</span></router-link>
            </button>
            <button @click="navbtnsClick(2)"><span :class="outlinedStyle(2)">add_box</span></button>
            <button @click="navbtnClick(3)">
                <router-link to="/explore"><span :class="outlinedStyle(3)">explore</span></router-link>
            </button>
            <button @click="navbtnClick(4)"><span :class="outlinedStyle(4)">favorite_border</span></button>
            <button @click="navbtnClick(5)"><span :class="outlinedStyle(5)">account_circle</span></button>
        </section>
    </header>
</template>

<script>
    export default {
        name: 'TopHeader',
        components: {},
        data() {
            return {
                searchText: '',
                activebtn: 0,
            };
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        methods: {
            outlinedStyle(btnIndex) {
                return this.activebtn === btnIndex ? 'material-icons md-28' : 'material-icons-outlined md-28';
            },

            navbtnClick(btnIndex) {
                if (btnIndex !== this.activebtn) this.activebtn = btnIndex;

                switch (btnIndex) {
                    case 0:
                        console.log('home');
                        break;
                    case 1:
                        console.log('dm');
                        // this.$router.push('/dm');
                        break;
                    case 2:
                        console.log('newpost');
                        break;
                    case 3:
                        console.log('explore');
                        break;
                    case 4:
                        console.log('heart');
                        this.$emit('notification-click');
                        break;
                    case 5:
                        console.log('myprofile');
                        break;
                }
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import '@/scss/TopHeader';
</style>
