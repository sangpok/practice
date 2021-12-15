<template>
    <div>
        <p>Count: {{ count }}</p>
        <button type="button" @click="increment">Increment</button>
    </div>
</template>

<script>
    export default {
        computed: {
            cartCount() {
                return this.$store.getters.cartCount;
            },
        },
        methods: {
            increment() {
                this.$store.commit('increment');
            },
        },
    };
</script>
