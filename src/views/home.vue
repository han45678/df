<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, onMounted } from "vue";
import $ from "jquery";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.js';
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

function slick() {
  $("#home_news").slick({
    dots: false,
    infinite: true,
    // fade: true,
    arrows: false,
    autoplay:true,
    speed: 1000, // 切換動畫速度（毫秒）
  });
}
const corporate = ref([
  {
    title:"再生塑膠材料",
    pic:"corporate_pic01.jpg",
    link:"./pcr-materials"
  },
  {
    title:"永續循環服務",
    pic:"corporate_pic02.jpg",
    link:""
  },
  {
    title:"企業資收統包",
    pic:"corporate_pic03.jpg",
    link:""
  },
  {
    title:"機密文件銷毀",
    pic:"corporate_pic04.jpg",
    link:"/docdestroy"
  },
  {
    title:"硬碟銷毀",
    pic:"corporate_pic05.jpg",
    link:"/docdestroy"
  },
  {
    title:"食品報廢",
    pic:"corporate_pic06.jpg",
    link:""
  },
  {
    title:"報廢作業",
    pic:"corporate_pic07.jpg",
    link:""
  },
  {
    title:"汙泥處理",
    pic:"corporate_pic08.jpg",
    link:""
  },
  {
    title:"廢木材清運",
    pic:"corporate_pic09.jpg",
    link:"./wood"
  },
  {
    title:"廢棄物清運",
    pic:"corporate_pic10.jpg",
    link:""
  },
  {
    title:"下腳料回收",
    pic:"corporate_pic11.jpg",
    link:""
  }
])

onMounted(() => {
  slick();
});
</script>
<template>
  <div>
    <vheader />
    <main id="home">
      <div id="home_banner">
        <img loading="lazy" src="@/assets/images/home/banner01.jpg" alt="banner" />
      </div>
      <div id="home_news">
        <div class="item">
          <h3>News</h3>
          <div class="text">
            <p>2023-06-14</p>
            <p>大豐環保響應MUJI無印良品「Re／FUTURE」</p>
          </div>
        </div>
        <div class="item">
          <h3>News</h3>
          <div class="text">
            <p>2023-06-14</p>
            <p>大豐環保響應MUJI無印良品「Re／FUTURE」</p>
          </div>
        </div>
      </div>
      <div id="corporate">
        <div class="wrapper">
          <div class="title">
            <h2 class="an fu">
              企業服務
              <span> CORPORATE </span>
            </h2>
          </div>
          <div class="content">
            <div class="item an fu" v-for="(item, index) in corporate" :key="index" :date-id="index">
              <div class="item_content">
                <img
                  class="pic"
                  :src="require(`@/assets/images/home/${item.pic}`)"
                  alt="pic"
                />
                <div class="text">
                  <router-link :to="item.link">
                    <h3>
                      {{ item.title }}
                      <span class="icon"></span>
                    </h3>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <vfooter />
  </div>
</template>
