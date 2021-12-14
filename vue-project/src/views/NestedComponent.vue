<template>
    <div>
        <PageTitle :title="title" />
    </div>
</template>

<script>
    import PageTitle from '../components/PageTitle';

    export default {
        data() {
            return {
                title: '동적 페이지 타이틀',
            };
        },
        components: {
            PageTitle,
        },
    };
</script>
