// template 안에는 HTML로 이루어져있다.
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <h3>Vue </h3>
    <div>
      <p>{{products[0]}}</p>
      <h4 :style="tag_color">hi {{name}} {{ numbers }}</h4>
      <p>{{products[1]}}</p>
      <p>{{products[2]}}</p>
    </div>
  </div>
</template>

// script 안에는 JS로 이루어져있다.
<script>
export default {
  name: 'App',
  data(){
    return{
      numbers : 2022,
      name : "hyunba", // 데이터바인딩을 하는 이유? 1. HTML에 하드코딩할 경우 변경하기 어렵기 때문
                       // 2. Vue의 실시간 자동 렌더링을 사용하기위함
                       // 3. 변하지 않는 값은 데이터바인딩을 굳이 할 필요는 없다.
                       // 4. HTML 속성도 데이터바인딩이 가능하다. (대신 {{}}을 하는 것이 아닌 :콜론을 태그 앞에 붙여주면된다. vue의 약속!)
      tag_color : 'color : blue',
      products : ['1번값', '2번값', '3번값'],
    }
  },
}
</script>

// style 안에는 CSS로 이루어져있다.
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#style_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
