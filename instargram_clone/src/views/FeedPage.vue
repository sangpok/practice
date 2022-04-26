<template>
    <section id="feed-container">
        <section id="story-field">
            <div id="story-list" :style="`transform: translateX(-${this.storyCurIdx * 80}px)`">
                <!-- <li v-for="(item, idx) in this.storyList" :key="idx">
                    <span>{{ item.profileImg }}</span>
                </li> -->
                <StoryComp v-for="(item, idx) in this.storyList" :key="idx" :item-data="item"></StoryComp>
            </div>
            <button id="prev" @click="slideTo(this.storyCurIdx - 5)" v-show="this.storyCurIdx !== 0">◀</button>
            <button id="next" @click="slideTo(this.storyCurIdx + 5)" v-show="this.storyCurIdx !== 1">▶</button>
        </section>

        <section id="feed-list">
            <FeedComp
                user-name="omen.mov"
                post-location="greenwich Park"
                :image-list="[
                    require('@/assets/0.jpg'),
                    require('@/assets/1.jpg'),
                    require('@/assets/2.jpg'),
                    require('@/assets/3.jpg'),
                    require('@/assets/4.jpg'),
                    require('@/assets/5.jpg'),
                    require('@/assets/6.jpg'),
                    require('@/assets/7.jpg'),
                    require('@/assets/8.jpg'),
                ]"
            />
        </section>
    </section>
</template>

<script>
    import FeedComp from '@/components/FeedComp.vue';
    import StoryComp from '@/components/StoryComp.vue';
    import storydata from '@/assets/data/storydata.json';

    export default {
        name: 'FeedPage',
        components: { FeedComp, StoryComp },
        data() {
            return {
                sampleData: '',
                storyCurIdx: 0,
                storyList: Object,
            };
        },
        setup() {},
        created() {},
        mounted() {
            this.getStoryList();
        },
        unmounted() {},
        methods: {
            getStoryList() {
                this.storyList = storydata;
                console.log(this.storyList[0]);
            },

            slideTo(storyIdx) {
                if (storyIdx < 0) storyIdx = 0;
                if (storyIdx > 8 - storyIdx) storyIdx = 1;
                this.storyCurIdx = storyIdx;
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import '@/scss/FeedPage';
</style>
