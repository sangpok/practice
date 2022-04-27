<template>
    <div class="story-content">
        <div class="story-thumbnail-wrapper">
            <div v-if="this.itemData.state === 'read'" class="story-thumbnail-border read"></div>
            <div v-else-if="this.itemData.state === 'new'" class="story-thumbnail-border new"></div>
            <div v-else-if="this.itemData.state === 'friend'" class="story-thumbnail-border friend"></div>
            <div class="story-thumbnail"><img :src="require(`@/assets/${this.itemData.profileImg}`)" loading="lazy" /></div>
        </div>
        <div class="story-user">{{ this.itemData.userName }}</div>
    </div>
</template>

<script>
    export default {
        name: 'StoryComp',
        components: {},
        props: {
            itemData: Object,
            // userName: String,
            // thumbnailU: String,
            // stateType: String,
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
