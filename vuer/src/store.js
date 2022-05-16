import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){ // 데이터들의 집합
    return {
        name: 'lee',
        age: 20,
        more: {}
    }
  },
  mutations:{ // 데이터들의 변경권한을 쥠
    setMore(state, data){
        state.more = data
    },
      nameChange(state){
        state.name = 'hyun'
      },
      numAdd(state){
        state.age++
      },
  },
  actions:{ // ajax 하는곳
    getData(context){
        axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((a)=>{
            console.log(a.data);
            context.commit('setMore', a.data);
        })
    },
  },
})

export default store