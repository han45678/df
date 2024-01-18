<script setup>
import header_pc from "@/components/header_pc.vue";
import header_m from "@/components/header_m.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps(["logo_color", "fixed"]);
const isMobile = ref(false);

const checkWindowSize = () => {
  isMobile.value = window.innerWidth <= 1024;
};

onMounted(() => {
  // 初始化時檢查一次
  checkWindowSize();

  // 監聽視窗大小變化，並執行檢查
  window.addEventListener("resize", checkWindowSize);
});

onBeforeUnmount(() => {
  // 移除事件監聽器，防止記憶體洩漏
  window.removeEventListener("resize", checkWindowSize);
});
</script>

<template>
  <div id="header">
    <header_pc v-if="!isMobile" :logo_color="props.logo_color" :fixed="props.fixed" />
    <header_m v-if="isMobile" />
    <div v-if="isMobile" style=" width: 100%;height: 60px;" />
  </div>
</template>
