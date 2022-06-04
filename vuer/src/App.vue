<template>
  <div class="modal-bg" v-if="modal === true">
    <div class="modal-inner">
      <discount-banner @closeModal="modalOnOff" :data="data" :pageNum="pageNum" />
      <h4>{{data[pageNum].title}}</h4>
      <p>{{data[pageNum].content}}</p>
      <p>월세 {{data[pageNum].price}} 원</p>
      <input v-model.number="inputData">
      <p>{{inputData}}개월 선택</p>
      <p>{{data[pageNum].price * inputData}} 원</p>
      <button @click="modalOnOff">✔️</button>
    </div>
  </div>
  <div v-for="(d, i) in data" :key="i">
    <h4 @click="modal = true; pageNum = i" >{{d.title}}</h4>
    <p>{{d.content}}</p>
    <p>{{d.price}} 원</p>  
  </div>
  <div>
    <button @click="increase">❤️</button> <span>좋아요 : {{like}}</span>
    <br>
    <br>
    <button @click="modalOnOff">✔️</button> <span>모달창 : {{modal}}</span>
  </div>
</template>

<script>
import data from './assets/vue_data.js';
import DiscountBanner from './components/DiscountBanner.vue';

export default {
  name: 'App',
  data(){
    return {
      data: data,
      modal: false,
      like: 0,
      pageNum: 0,
      products : ['hi', 'hihi', 'hihihi'],
      inputData: 0,
    }
  },
  components : {
    DiscountBanner
  },
  methods : {
    increase() {
      this.like += 1;
    },
    modalOnOff() {
      this.modal = !this.modal
    },
  },
}
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.modal-bg {
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}
.modal-inner {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
