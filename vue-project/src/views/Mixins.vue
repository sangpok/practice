<script>
    import ApiMixin from '../api.js';

    export default {
        mixins: [ApiMixin],
        data() {
            return {
                productList: [],
            };
        },
        async mounted() {
            this.productList = await this.$callAPI(
                'https://3c94d2c4-1b38-474f-be1b-9e3502f047bc.mock.pstmn.io/list',
                'get'
            );

            console.log(this.productList);
        },
    };
</script>
