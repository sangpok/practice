<template>
    <section id="feed-container">
        <section id="story-field">
            <div id="story-list">
                <div class="story-content">
                    <div class="story-thumbnail-wrapper">
                        <div class="story-thumbnail-border"></div>
                        <div class="story-thumbnail"></div>
                    </div>
                    <div class="story-user">omen.mov</div>
                </div>
                <div class="story-content">
                    <div class="story-thumbnail-wrapper">
                        <div class="story-thumbnail-border"></div>
                        <div class="story-thumbnail"></div>
                    </div>
                    <div class="story-user">omen.mov</div>
                </div>
                <div class="story-content">
                    <div class="story-thumbnail-wrapper">
                        <div class="story-thumbnail-border"></div>
                        <div class="story-thumbnail"></div>
                    </div>
                    <div class="story-user">omen.mov</div>
                </div>
                <div class="story-content">
                    <div class="story-thumbnail-wrapper">
                        <div class="story-thumbnail-border"></div>
                        <div class="story-thumbnail"></div>
                    </div>
                    <div class="story-user">omen.mov</div>
                </div>
                <div class="story-content">
                    <div class="story-thumbnail-wrapper">
                        <div class="story-thumbnail-border"></div>
                        <div class="story-thumbnail"></div>
                    </div>
                    <div class="story-user">omen.mov</div>
                </div>
                <div class="story-content">
                    <div class="story-thumbnail-wrapper">
                        <div class="story-thumbnail-border"></div>
                        <div class="story-thumbnail"></div>
                    </div>
                    <div class="story-user">omen.mov</div>
                </div>
                <div class="story-content">
                    <div class="story-thumbnail-wrapper">
                        <div class="story-thumbnail-border"></div>
                        <div class="story-thumbnail"></div>
                    </div>
                    <div class="story-user">omen.mov</div>
                </div>
                <div class="story-content">
                    <div class="story-thumbnail-wrapper">
                        <div class="story-thumbnail-border"></div>
                        <div class="story-thumbnail"></div>
                    </div>
                    <div class="story-user">omen.mov</div>
                </div>
            </div>
            <button>▶</button>
        </section>

        <section id="feed-list">
            <div class="feed-item">
                <div class="feed-header">
                    <div class="user-thumbnail">
                        <img
                            src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTdfNDcg/MDAxNTcxMjQwMzM5ODk0.RJncMKyf94amjwZdZmF0Lc0yR62gKWF1UPNkj3UQqBQg.QKJeYH2cz8YMWagAgG0QZGGSATiWbZTrQ1vzmEsnJ-gg.JPEG.pikachusl/itsuyoung_29094963_535815533480315_923688431320563712_n.jpg?type=w800"
                            alt=""
                            srcset=""
                        />
                    </div>
                    <div class="user-info">
                        <span class="user-name">omen.mov</span>
                        <span class="feed-location">greenwich Park</span>
                    </div>
                    <div class="more-detail">
                        <span class="material-icons-outlined"> more_horiz </span>
                    </div>
                </div>
                <div class="feed-body">
                    <div class="image-list">
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202112/53638c3a-08f1-41c9-9a15-f17b8b2355ad.jpg"
                            alt=""
                            srcset=""
                        />
                        <img
                            src="https://s3.ap-northeast-2.amazonaws.com/event-localnaeil/FileData/Article/202112/53638c3a-08f1-41c9-9a15-f17b8b2355ad.jpg"
                            alt=""
                            srcset=""
                        />
                    </div>

                    <button>▶</button>
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
                        <span v-html="aaaaa"></span>
                    </div>
                    <div class="feed-comment"></div>
                    <div class="feed-date"></div>
                </div>
                <div class="feed-comment-writing-field">
                    <button><span class="material-icons-outlined md-28"> favorite_border </span></button>
                    <input type="text" name="" id="" placeholder="댓글 달기..." />
                    <button><span>게시</span></button>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
    export default {
        name: 'FeedPage',
        components: {},
        data() {
            return {
                sampleData: '',
                aaaaa: `<strong>food.tomorrow</strong> 📍#뚝섬 성수온실

성수에서 데이트 맛집으론 여기가 딱 ✨

뚝섬역 인근에서 찾은 신상 맛집. 생긴지 1년도 안된 것 같은데 이미 입소문 난 곳이다. 퓨전한식 맛집인데 성게알파스타, 깻잎페스토파스타부터 육회, 감자전까지. 한식 베이스라서 남녀노소 호불호 없이 먹을 수 있는 곳이다. 양식 먹고싶은 사람이든 한식 먹고싶은 사람이든 모두 오면된다.

보통 바질페스토만 먹는데 깻잎페스토파스타 이거 완전 요물이다. 바질페스토의 풍미는 살리면서 바질향을 안 좋아하는 사람들까지 모두 흡수할 맛이다. 밑반찬도 퓨전한식답게 오이지, 할라피뇨가 나온다. 깻잎페스토파스타랑 오이지랑 너무 잘어울려서 오이지까지 흡입했다. 한식과 양식의 적절한 조화란 이런거지.

육회비빔밥에 노른자 톡 터트려서 쓱싹 비벼먹으면 꼬소함에 환호성 나온다. 북엇국도 같이 나와서 비빔밥 먹으면서 한입씩 떠먹으면 어느샌가 그릇 바닥이 보이는 마법. 육회비빔밥도 너무 맛있었지만 이곳이 퓨전한식 맛집이니 개인적으론 육회비빔밥보다는 파스타류를 좀 더 추천한다.

이곳을 추천할 수밖에 없는게 맛도 분위기도 좋은데 가성비도 좋다. 유일한 단점이 있다면 내부가 작다는 점 정도. 수용가능 인원이 적은데 인기가 많아서 미리미리 예약하는건 필수. 데이트 맛집으로도 강추한다. 전체적으로 너무 만족스러웠던 곳이라 재방문해서 다른 메뉴도 전부 먹어보고싶다.

⭐️ 4.5 / 5
#낼먹_뚝섬 #낼먹_성수 #낼먹_서울숲
: 깻잎페스토파스타 12,900원
: 육회비빔밥 11,000원
: B.T 15:30 - 17:00`.replace(/\n/gi, '<br />'),
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
