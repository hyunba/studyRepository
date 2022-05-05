// template 안에는 HTML로 이루어져있다.
<template>
  <div id="app">

    <div class="menu">
      <a v-for="(a,i) in menu_data" :key="i">{{a}}</a>    
    </div>

    <img src="./assets/logo.png">
    <router-view/>
    <h3>Vue </h3>

    <div v-for="(a,i) in products" :key="i"><p>{{products[i]}}</p></div>
<!--
   v-on == @
-->
<br>
    <div>
      <button @click="increase">
        버튼
      </button>
      <span>
        클릭 수 : {{clicked}}
      </span>
    </div>
    <!-- <div>
      <p>{{products[0]}}</p>
    </div>
    <div>
      <p>{{products[1]}}</p>
    </div>
    <div>
      <p>{{products[2]}}</p>
    </div> -->
  </div>
</template>

// script 안에는 JS로 이루어져있다.
// function(함수)을 쓰는 이유는 긴 코드를 짧게 한 단어로 축약하고 싶어서 사용한다.
<script>
export default {
  name: 'App',
  data(){
    return {
      menu_data: ['Home', 'Shop', 'About'],
      clicked: 0,
      name: "hyunba", // 데이터바인딩을 하는 이유? 1. HTML에 하드코딩할 경우 변경하기 어렵기 때문
                       // 2. Vue의 실시간 자동 렌더링을 사용하기위함
                       // 3. 변하지 않는 값은 데이터바인딩을 굳이 할 필요는 없다.
                       // 4. HTML 속성도 데이터바인딩이 가능하다. (대신 {{}}을 하는 것이 아닌 :콜론을 태그 앞에 붙여주면된다. vue의 약속!)
      tag_color: 'color : blue',
      products: ['1번값', '2번값', '3번값'],
    }
  },
  methods : {
    increase() { 
      this.clicked += 1; // 내부의 있는 data()에 있는 변수를 사용하고 싶을 시 함수의 앞에는 this를 붙여줘야한다. this란 내 오브젝트를 뜻함
    },

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

</style>
