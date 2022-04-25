<template>
    <div class="story-content">
        <div class="story-thumbnail-wrapper">
            <div v-if="storyRead" class="story-thumbnail-border read"></div>
            <div v-else class="story-thumbnail-border"></div>
            <div class="story-thumbnail"></div>
        </div>
        <div class="story-user">{{ this.userName }}</div>
    </div>
</template>

<script>
    export default {
        name: 'StoryComp',
        components: {},
        props: {
            userName: String,
            storyRead: Boolean,
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

<style lang="scss" scoped>
    @import '@/scss/StoryComp.scss';
</style>
