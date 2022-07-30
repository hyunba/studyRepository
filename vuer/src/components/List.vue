<template>
  <div>
    <h5>{{blog[0].title}}}</h5>
    <p>내용 1</p>
  </div>
  <div>
    <h5>제목 2</h5>
    <p>내용 2</p>
  </div>
</template>

<script>
export default {
    name:'list',
    props: {
        blog: Array,
    }
}
</script>

<style>

</style>