<template>
    <router-view />
</template>

<script>
    export default {
        methods: {
            ff(event) {
                console.log(event);
            },
        },
    };
</script>

<style lang="scss">
    @import '@/scss/variables';
    @import '@/scss/common';
    @import '@/scss/onboarding';
</style>
