<template>
  <div class="modal-bg" v-if="modal === true">
    <div class="modal-inner">
      <h4> This is Modal Page </h4>
      <p> Modal Page Content </p>
      <button @click="modalOnOff">✔️</button>
    </div>
  </div>
  <div v-for="(d, i) in products" :key="i">
    <h4>{{d}}</h4>
    <p>Vue Practice</p>    
  </div>
  <div>
    <button @click="increase">❤️</button> <span>좋아요 : {{like}}</span>
    <br>
    <br>
    <button @click="modalOnOff">✔️</button> <span>모달창 : {{modal}}</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      modal: false,
      like: 0,
      products : ['hi', 'hihi', 'hihihi']  
    }
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
