<template>

  <div class="black-bg" v-if="isModalOpen == true">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지 내용</p>
      <button @click="isModalOpen=false">닫기</button>
    </div>
  </div>


  <div class="menu">
    <a v-bind:href="url[i]" v-for="(menuName, i) in menus" :key="i">{{menuName}}</a>
  </div>



  <div v-for="(product, i) in onerooms" :key="i">
    <img :src="product.image" alt="" class="room-img">
    <h4>{{product.title}}</h4>
    <p>{{product.price}}</p>
  </div>
  <!-- <div v-for="(product, i) in products.max" :key="i">
    <img src="./assets/room0.jpg" alt="" class="room-img">
    <h4 @click="isModalOpen=true">{{products.name[i]}}</h4>
    <p>{{products.price[i]}}</p>
    <button @click="increase(i)">허위매물신고</button><span>신고수: {{products.reportCount[i]}}</span>
  </div> -->
</template>

<script>

import oneroomData from './assets/oneroom.js';

export default {
  name: 'App',
  data() {
    return {
      isModalOpen: false,
      
      onerooms: oneroomData,
      url: ["d", "s2", "f3"],
      menus: ["Home", "Shop", "About"],
      products: {
        name: ["역삼동원룸", "천호동원룸", "마포구원룸"],
        price: [50, 70, 60],
        reportCount: [0, 0, 0],
        max: 3
      }
    }
  },
  methods: {
    increase(productIndex) {
      this.products.reportCount[productIndex]++;
    },

    setBool(variable, value) {
      this.variable = value;
      console.log(this.variable);
    }
  },
  components: {
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.black-bg {
  position: fixed;
  padding: 20px;
  background: rgba(0, 0, 0, .5);
  width: 100vw;
  height: 100vh;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
    color: white;
    padding: 10px;
}

.room-img {
  margin-top: 40px;
  width: 100%;
}
</style>
