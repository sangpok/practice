<template>
    <div id="notification-field">
        <div class="content">This is the Notification Center</div>
        <div class="rectangle"></div>
    </div>
</template>

<script>
    export default {
        name: 'NotificationCenter',
        components: {},
        data() {
            return {
                sampleData: '',
            };
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        methods: {
            ss() {
                console.log(`lost`);
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import '@/scss/NotificationCenter.scss';
</style>
