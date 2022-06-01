<template>
    <div class="discount">
        <h4>{{data[pageNum].title}} 20% 할인중</h4>
        <button @click="$emit('closeModal', false)">✔️</button> 
        <!--emit을 쓰는 이유는 자식은 부모가 가진 데이터를 번경할 수 없기 때문에 부모한테 부탁하는 것이다.-->
    </div>
</template>

<script>
export default {
    name: 'DiscountBanner',
    props: {
        data: Object,
        pageNum: Number, 
    },
    // data(){
    //     return {

    //     }
    // },
}
</script>

<style>
.discount {
    border-radius: 10px;
    background: whitesmoke;
    padding: 10px;
    margin: 10px;
}
</style>