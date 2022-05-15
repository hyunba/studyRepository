<template>
    <img :src="data[modal_num].image" style="width=100%">
    <h4>{{data[modal_num].title}}</h4>
    <p>{{data[modal_num].content}}</p>
    <p>{{data[modal_num].price}}원</p>
</template>

<script>

export default {
    name:'ModalBanner',
    props:{
        data: Array,
        
        modal_num: Number,
    }
}
</script>

<style>
</style>