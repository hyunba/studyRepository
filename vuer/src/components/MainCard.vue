<template>
    <img :src="data.image"> <!--속성 안 데이터 바인딩은 속성 값에 : 해준다-->
    <h4>{{data.title}}</h4>
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