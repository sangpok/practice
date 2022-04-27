<template>
    <div id="root" @click="clickHandler">
        <TopHeader @notification-click="notificationClick"></TopHeader>
        <NotificationCenter v-show="notificationShow"></NotificationCenter>
        <router-view></router-view>
    </div>
</template>

<script>
    import TopHeader from '@/components/TopHeader';
    import NotificationCenter from '@/components/NotificationCenter';

    export default {
        name: 'MainView',
        components: {
            TopHeader,
            NotificationCenter,
        },
        data() {
            return {
                sampleData: '',
                notificationShow: false,
            };
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        methods: {
            notificationClick() {
                console.log('HI');
                this.notificationShow = !this.notificationShow;
            },

            clickHandler(event) {
                let parentEle = event.target.parentNode.tagName;
                console.log('hih');
                if (this.notificationShow && parentEle.toLowerCase() !== 'button') {
                    if (event.target.className !== 'content') this.notificationShow = false;
                }
            },
        },
    };
</script>

<style lang="scss" scoped>
    #root {
        position: relative;
    }
</style>
