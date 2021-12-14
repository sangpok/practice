<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송료</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, i) in productList" :key="i">
                    <td>{{ product.product_name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.delivery_price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                productList: [],
            };
        },
        created() {
            this.getList();
        },
        methods: {
            async getList() {
                this.productList = await this.$api(
                    'https://3c94d2c4-1b38-474f-be1b-9e3502f047bc.mock.pstmn.io/list',
                    'get'
                );
            },
        },
    };
</script>

<style scoped>
    table {
        font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }

    td,
    th {
        border: 1px solid #ddd;
        text-align: left;
        padding: 8px;
    }
</style>
