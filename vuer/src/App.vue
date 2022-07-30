<!-- <template>
  <transition name="fade">
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
  </transition>
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
    <br>
    <br>
    <button @click="priceSort">가격순 정렬</button> <button @click="priceBack">되돌리기</button>
  </div>
</template> -->
<template>
  <List :blog="blog_content" />
</template>

<script>
import data from './assets/vue_data.js';
import blog_content_data from './assts/blog_content.js';
import DiscountBanner from './components/DiscountBanner.vue';
import List from './components/List.vue';

export default {
  name: 'App',
  data(){
    return {
      data_origin: [...data],
      data: data,
      modal: false,
      like: 0,
      pageNum: 0,
      products : ['hi', 'hihi', 'hihihi'],
      inputData: 0,
      blog_content: blog_content_data,
    }
  },
  watch : {
    // input과 같은 사용자의 데이터를 받는 값에 경고를 주고 싶을 때 watcher로 데이터를 감시한다.
    inputData(d){
      if( d > 12 ){
        alert('1년만 가능')
      }
    },
  },
  components : {
    DiscountBanner,
    List
  },
  methods : {
    increase() {
      this.like += 1;
    },
    modalOnOff() {
      this.modal = !this.modal
    },
    priceSort(){
      this.data.sort(function(a,b){
        return a.price - b.price
      })
    },
    priceBack() {
      this.data = [...this.data_origin];
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
.fade-enter-from {
  /* opacity: 0; */
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-to {
  /* opacity: 1; */
  transform: translateY(0px);
}
.fade-leave-from {
  transform: translateY(0px);
}
.fade-leave-active {
  transition: all 0.5s;
}
.fade-leave-to {
  transform: translateY(-1000px);
}
</style>
