<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

onMounted(() => {});
</script>
<template>
  <div>
    <vheader />
    
    <main id="news">
        <div id="banner">
            <div id="banner_pic">
                <img loading="lazy" src="@/assets/images/news/banner.jpg" alt="banner">
            </div>
        </div>
        <div id="banner_title">
            <h2 class="an fd">
                最新消息
            </h2>
            <h3 class="an fd">
                <span><router-link to="/">大豐環保</router-link></span>
            </h3>
        </div>
        <div id="news_type">
            <div class="news_wrapper">
                <ul>
                    <li class="active">
                        <a href="">所有類別</a>
                    </li>
                    <li>
                        <a href="">活動訊息</a>
                    </li>
                    <li>
                        <a href="">媒體報導</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">全部年份</a>
                        <ol>
                            <li>
                                <a href="">2023</a>
                            </li>
                            <li>
                                <a href="">2022</a>
                            </li>
                            <li>
                                <a href="">2021</a>
                            </li>
                            <li>
                                <a href="">2020</a>
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
        </div>
        <div id="news_page">
            <div class="news_wrapper">
                <div id="news_page_side">
                    <h5>
                        媒體報導
                    </h5>
                    <a href="">
                        <span>上一則</span>
                        <p>大豐環保桃園春日站5/27終止營…</p>
                    </a>
                    <a href="">
                        <span>下一則</span>
                        <p>新北資收細分選廠開幕首座回收…</p>
                    </a>
                </div>
                <div id="news_page_main">
                    <h2>
                        <span>媒體報導</span>
                        大豐環保衣起淨零共創首個聚酯紡織品全循環
                    </h2>
                    <div class="date">
                        2023.04.19
                    </div>
                    <div id="edit">
                        <p>快時尚的來臨，流行元素不斷變更之下，家裡衣櫃的衣服滿倉，但服飾還在持續不斷的生產，如此下來，已對環境造成一定的侵害。大豐環保一直以來都秉持著零廢棄、全循環的理念，期望以回收再生來解決環境的問題。此次大豐環保、歐都納以及南亞將結合品牌、回收以及再生的角色，打造全台第一個
                            MIT 聚酯紡織品生態系循環圈，提倡落實前端分類回收，創造更多再生的可行性。</p>
                        <img loading="lazy" src="@/assets/images/news/pic02.jpg" alt="pic">
                        <p>透過衣起淨零的計畫從製造端落實綠色設計，同時搭配回收教育知識以及舊衣回收的通路，最後再串起後端再生處理，共同創造創新紡織品生態系循環圈。永續循環已經不再只是一個口號，而是成為你我生活的日常，由各企業共同攜手創造民眾可以一起參與的聚酯紡織品全循環經濟模式，落實環保永續循環，不浪費任何資源。一起積極的來實現「零廢棄，全循環」的美好未來。
                        </p>
                        <img loading="lazy" src="@/assets/images/news/pic03.jpg" alt="pic">
                        <img loading="lazy" src="@/assets/images/news/pic04.jpg" alt="pic">
                    </div>
                </div>
            </div>
        </div>
    </main>
    
    <vfooter />
  </div>
</template>
