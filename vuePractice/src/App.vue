<template>
  <div id="app">
    <a>{{name}}</a>
  
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      임포트: data,
      modal_open: false,
      menu_data: ['Home', 'Shop', 'About'],
      clicked: 0,
      name: "hyunba",
      tag_color: 'color : blue',
      products: ['1번값', '2번값', '3번값'],
      message: '이 페이지는' + new Date() + '에 로드 되었습니다.',
      message_R: '안녕하세요!',
      todos: [
        { text: 1 },
        { text: 2 },
        { text: 3 },
      ]
    }
  },
  methods : {
    increase() { 
      this.clicked++;
    },
  },
  setup() {

  },
}
</script>

<style>
body {
  margin: 0
  
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; 
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
#style_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.menu {
  background: skyblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
.room-img {
  width: 100%;
  margin-top: 40px;
}

</style>
