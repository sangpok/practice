<template>
    <section id="feed-container">
        <section id="story-field">
            <div id="story-list">
                <StoryComp user-name="내 스토리" story-read="true"></StoryComp>
                <StoryComp user-name="omen.mov" story-read="false"></StoryComp>
                <StoryComp user-name="omen.mov" story-read="true"></StoryComp>
                <StoryComp user-name="omen.mov" story-read="true"></StoryComp>
                <StoryComp user-name="omen.mov" story-read="true"></StoryComp>
                <StoryComp user-name="omen.mov" story-read="true"></StoryComp>
                <StoryComp user-name="omen.mov" story-read="true"></StoryComp>
                <StoryComp user-name="omen.mov" story-read="true"></StoryComp>
            </div>
            <button>▶</button>
        </section>

        <section id="feed-list">
            <FeedComp
                user-name="omen.mov"
                post-location="greenwich Park"
                :image-list="[
                    'https://blog.kakaocdn.net/dn/7Sj48/btqCkRkZP2m/IkfZjakcIhsrNdmVOkusS0/img.png',
                    'https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202112/53638c3a-08f1-41c9-9a15-f17b8b2355ad.jpg',
                    'https://blog.kakaocdn.net/dn/7Sj48/btqCkRkZP2m/IkfZjakcIhsrNdmVOkusS0/img.png',
                    'https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202112/53638c3a-08f1-41c9-9a15-f17b8b2355ad.jpg',
                ]"
            />
        </section>
    </section>
</template>

<script>
    import FeedComp from '@/components/FeedComp.vue';
    import StoryComp from '@/components/StoryComp.vue';

    export default {
        name: 'FeedPage',
        components: { FeedComp, StoryComp },
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

<style lang="scss" scoped>
    @import '@/scss/FeedPage';
</style>
