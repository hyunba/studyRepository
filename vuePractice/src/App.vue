// template 안에는 HTML로 이루어져있다.
// 5강 5:27
<template>
  <div id="app">

    <div class="black-bg" v-if="modal_open == true">
      <div class="white-bg">
        <h4>상세 페이지</h4>
        <p>
          상세 페이지 내용
        </p>
        <button @click="modal_open = false">close</button>
      </div>
    </div>

    <div class="menu">
      <a v-for="(a,i) in menu_data" :key="i">{{a}}</a>    
    </div>
    <h4>{{임포트[0].title}}</h4>

    <img @click="modal_open = true" src="./assets/logo.png">
    <router-view/>
    <h3>Vue </h3>

    <div>
      <img src="./assets/room0.jpg" class="room-img"> 
    </div>
    <div v-for="(a,i) in products" :key="i">
      <p>{{products[i]}}</p>
    </div>
    <div>
      <button @click="increase">클릭</button>
      <span>{{clicked}}</span> 
    </div>
<!--
   v-on == @
-->
<br>
    <!-- <div>
      <p>{{products[0]}}</p>
      <button @click="clicked[0] += 10">
        버튼
      </button>
      <span>
        클릭 수 : {{clicked[0]}}
      </span>
    </div>
    <div>
      <p>{{products[1]}}</p>
      <button @click="clicked[1]++">
        버튼
      </button>
      <span>
        클릭 수 : {{clicked[1]}}
      </span>
    </div>
    <div>
      <p>{{products[2]}}</p>
      <button @click="clicked[2]++">
        버튼
      </button>
      <span>
        클릭 수 : {{clicked[2]}}
      </span>
    </div> -->
  </div>
</template>

// script 안에는 JS로 이루어져있다.
// function(함수)을 쓰는 이유는 긴 코드를 짧게 한 단어로 축약하고 싶어서 사용한다.
<script>
import data from './assets/data_info';

export default {
  name: 'App',
  data(){
    return {
      임포트: data,
      modal_open: false,
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
      this.clicked++; // 내부의 있는 data()에 있는 변수를 사용하고 싶을 시 함수의 앞에는 this를 붙여줘야한다. this란 내 오브젝트를 뜻함
    },

  },
}
</script>

// style 안에는 CSS로 이루어져있다.
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
