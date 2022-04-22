<template>
    <TopHeader></TopHeader>
    <router-view></router-view>
</template>

<script>
    import TopHeader from '@/components/TopHeader';

    export default {
        name: 'MainView',
        components: {
            // eslint-disable-next-line
            TopHeader,
        },
        data() {
            return {
                sampleData: '',
            };
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        methods: {},
    };
</script>
