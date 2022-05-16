<template>
  <div class="menu">
    <a v-for="(name, i) in name" :key="i">{{name}}</a>
  </div>
  <div>
    <h4>{{$store.state.name}}</h4>
    <button @click="$store.commit('nameChange')">btn</button> <!--commit으로 mutation에 있는 수정파일들을 수정한다.-->
  </div>
  <div>
    <h4>{{$store.state.age}}</h4>
    <button @click="$store.commit('numAdd')">btn</button>
    <button @click="$store.dispatch('getData')">btn</button> <!--dispatch는 actions에 있는 파일을 불러온다.-->
  </div>

  <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
      <div>
        <DiscountBanner/>
        <ModalBanner :data = 'data' :modal_num = 'modal_num'/> <!--부모에게 있는 데이터를 쓰려면 props로 보내줌-->
      </div>
      <button @click="modal = false">닫기</button>
    </div>
  </div>

  <!-- <div v-for="(data, i) in data" :key="i">
    <img @click="modal = true; modal_num = i" :src="data.image"> 속성 안 데이터 바인딩은 속성 값에 : 해준다
    <h4>{{data.title}}</h4>
    <p>{{data.price}} 원</p>
  </div> -->

  <MainCard :data = "data[i]" v-for="(a,i) in data" :key="i" />

</template>

<script>
import data from "./vue_data.js";
import DiscountBanner from "./components/DiscountBanner.vue";
import ModalBanner from "./components/ModalBanner.vue";
import MainCard from "./components/MainCard.vue";

export default {
  name: 'App',
  data(){
    return {
      modal: false,
      modal_num: 0,
      name : ["Home", "About", "Molar"],
      products: ["Daejeon", "Suwon", "Seoul"],
      data,

    }
  },
  components: {
    DiscountBanner,
    ModalBanner,
    MainCard,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin : 0;
}
div {
  box-sizing : border-box;
}
img {
  width: 80%;
  height: 80%;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.menu {
  background : darkslateblue;
  padding : 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
