<template>
    <div class="feed-item">
        <div class="feed-header">
            <div class="user-thumbnail">
                <img
                    src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTdfNDcg/MDAxNTcxMjQwMzM5ODk0.RJncMKyf94amjwZdZmF0Lc0yR62gKWF1UPNkj3UQqBQg.QKJeYH2cz8YMWagAgG0QZGGSATiWbZTrQ1vzmEsnJ-gg.JPEG.pikachusl/itsuyoung_29094963_535815533480315_923688431320563712_n.jpg?type=w800"
                />
            </div>
            <div class="user-info">
                <span class="user-name">{{ this.userName }}</span>
                <span class="feed-location" v-if="this.postLocation !== undefined">{{ this.postLocation }}</span>
            </div>
            <div class="more-detail">
                <span class="material-icons-outlined"> more_horiz </span>
            </div>
        </div>
        <div class="feed-body">
            <div class="image-field">
                <div class="image-list" :style="`transform: translateX(-${this.imgcur * 600}px)`">
                    <img v-for="image in this.imageList" :key="image" :src="image" loading="lazy" />
                </div>
            </div>

            <button id="prev-btn" v-show="imgcur !== 0" @click="slideTo(imgcur - 1)">◀</button>
            <button id="next-btn" v-show="imgcur !== this.imageList.length - 1" @click="slideTo(imgcur + 1)">▶</button>

            <div class="image-list-navi" v-if="this.imageList.length != 1">
                <div :class="idx === this.imgcur ? 'page-circle cur' : 'page-circle'" v-for="(image, idx) in this.imageList" :key="idx" />
            </div>
        </div>
        <div class="feed-footer">
            <div class="feed-btn-field">
                <button><span class="material-icons-outlined md-28"> favorite_border </span></button>
                <button><span class="material-icons-outlined md-28"> comment </span></button>
                <button><span class="material-icons-outlined md-28"> send </span></button>
                <button><span class="material-icons-outlined md-28"> turned_in_not </span></button>
            </div>

            <div class="feed-heart-field">
                <img
                    src="https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202112/53638c3a-08f1-41c9-9a15-f17b8b2355ad.jpg"
                    alt=""
                    srcset=""
                />
                <span><strong>mix__xx2</strong>님 외 <strong>여러 명</strong>이 좋아합니다.</span>
            </div>
            <div class="feed-writting">
                <!-- <span v-html="aaaaa"></span> -->
            </div>
            <div class="feed-comment">
                <button>댓글 19개 모두 보기</button>
                <div class="comment-field">
                    <span class="comment-user">food.tomorrow</span>
                    <span class="comment-content">옴뇸뇸</span>
                    <span class="comment-heart"><span class="material-icons-outlined md-18"> favorite_border </span></span>
                </div>
            </div>
            <div class="feed-date">1시간 전</div>
        </div>
        <div class="feed-comment-writing-field">
            <button id="comment-emoji"><span class="material-icons-outlined md-28"> emoji_emotions </span></button>
            <input type="text" name="" id="" placeholder="댓글 달기..." v-model="sampleData" />
            <button id="comment-send" :class="sampleData ? 'active' : ''">게시</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FeedComp',
        components: {},
        props: {
            userName: String,
            postLocation: String,
            imageList: Array,
        },
        data() {
            return {
                sampleData: '',
                imgcur: 0,
            };
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        computed: {},
        methods: {
            slideTo(imageIdx) {
                if (imageIdx < 0 || imageIdx >= this.imageList.length) return;
                this.imgcur = imageIdx;
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import '@/scss/FeedComp.scss';
</style>
