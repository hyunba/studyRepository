<template>
    <img :src="data.image"> <!--속성 안 데이터 바인딩은 속성 값에 : 해준다-->
    <h4 @click="$emit('openModal')">{{data.title}}</h4> <!--부모에게 메세지를 보내는거 emit-->
    <p>{{data.price}} 원</p>
</template>

<script>
export default {
    name : "MainCard",
    props: {
        data: Object,
        modal: Boolean,
    },

}
</script>

<style>
</style>