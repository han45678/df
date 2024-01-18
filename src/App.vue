<style lang="scss">
@import "./assets/scss/main";
</style>

<script setup>
import { ref,onMounted } from 'vue';

const loading = ref(false)

onMounted(() => {
    setTimeout(()=>{
        loading.value = true;
    },1000)
});
</script>

<template>
    <div id="load" :class="{active:loading}">
        <img src="./assets/images/icon.png" alt="load">
    </div>
    <div id="transitions" class="active"></div>
    <router-view />
</template>
