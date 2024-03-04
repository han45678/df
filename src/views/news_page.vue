<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const info = ref(null);
const id = ref(null);
const prev_title = ref(null);
const next_title = ref(null);

const load = ref(false);

const type_list = ref(null);

function link() {
    id.value = location.href.split("news_page?")[1];
    axios
        .get(
            `http://34.81.192.108:13000/api/v1/news/getNewsMainList?currentPage=0&pageSize=9`
        )
        .then((r) => {
            type_list.value = r.data.result.rows;
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    axios
        .get(`http://34.81.192.108:13000/api/v1/news/${id.value}`)
        .then((r) => {
            info.value = r.data.result;
            info.value.images = JSON.parse(info.value.images);

            if (info.value.previousid) {
                axios
                    .get(
                        `http://34.81.192.108:13000/api/v1/news/${info.value.previousid}`
                    )
                    .then((prev) => {
                        prev_title.value = prev.data.result.title;
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            }

            if (info.value.nextid) {
                axios
                    .get(`http://34.81.192.108:13000/api/v1/news/${info.value.nextid}`)
                    .then((next) => {
                        next_title.value = next.data.result.title;
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            }
            load.value = true;
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

const type = ref(router.currentRoute.value.params.news);

const year = ref(null);

function to(id) {
    load.value = false;
    type.value = id;

    if (year.value) {
        router.push(`/news/${type.value}?year=${year.value}`);
    } else {
        router.push(`/news/${type.value}`);
    }

    //   getInfo();
}

function toYear(y) {
    load.value = false;
    year.value = y;
    console.log(y, year.value);
    router.push(`/news/0?year=${year.value}`);
    //   getInfo();
}
onMounted(() => {
    link();
});

watch(
    () => router.currentRoute.value.fullPath,
    (newId, oldId) => {
        console.log(newId, oldId);
        if (newId !== oldId) {
            link();
        }
    }
);
</script>

<template>
    <div>
        <vheader />

        <main id="news" v-if="load">
            <div id="banner">
                <div id="banner_pic">
                    <img loading="lazy" src="@/assets/images/news/banner.jpg" alt="banner" />
                </div>
            </div>
            <div id="banner_title">
                <h2 class="an fd">最新消息</h2>
                <h3 class="an fd">
                    <span><router-link class="color" to="/">大豐環保</router-link></span>
                    / 最新消息
                </h3>
            </div>
            <div id="news_type">
                <div class="news_wrapper an fu">
                    <ul>
                        <li :class="{ active: type == 0 }">
                            <a href="javascript:void(0)" @click="to(0)">所有類別</a>
                        </li>

                        <li v-for="(item, index) in type_list" :key="item.id" :data-index="index"
                            :class="{ active: type == item.id }">
                            <a href="javascript:void(0)" @click="to(item.id)">
                                {{ item.name }}
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">全部年份</a>
                            <ol>
                                <li>
                                    <a href="javascript:void(0)" @click="toYear('2024')">
                                        2024
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" @click="toYear('2023')">
                                        2023
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" @click="toYear('2022')">
                                        2022
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" @click="toYear('2021')">
                                        2021
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" @click="toYear('2020')">
                                        2020
                                    </a>
                                </li>
                            </ol>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="news_page">
                <div class="news_wrapper">
                    <div id="news_page_side">
                        <h5>{{ info.category }}</h5>
                        <router-link v-if="info.previousid" :to="`/news_page?${info.previousid}`">
                            <span>上一則</span>
                            <p>{{ prev_title }}</p>
                        </router-link>

                        <router-link v-if="info.nextid" :to="`/news_page?${info.nextid}`">
                            <span>下一則</span>
                            <p>{{ next_title }}</p>
                        </router-link>
                    </div>
                    <div id="news_page_main" v-if="info">
                        <h2>
                            <span>{{ info.category }}</span>
                            {{ info.title }}
                            <!-- 大豐環保衣起淨零共創首個聚酯紡織品全循環 -->
                        </h2>
                        <div class="date">
                            <!-- 2023.04.19 -->
                            {{ info.date }}
                        </div>
                        <div id="edit">
                            <div v-html="info.content"></div>
                            <!-- <p>快時尚的來臨，流行元素不斷變更之下，家裡衣櫃的衣服滿倉，但服飾還在持續不斷的生產，如此下來，已對環境造成一定的侵害。大豐環保一直以來都秉持著零廢棄、全循環的理念，期望以回收再生來解決環境的問題。此次大豐環保、歐都納以及南亞將結合品牌、回收以及再生的角色，打造全台第一個
                            MIT 聚酯紡織品生態系循環圈，提倡落實前端分類回收，創造更多再生的可行性。</p>
                        <img loading="lazy" src="@/assets/images/news/pic02.jpg" alt="pic">
                        <p>透過衣起淨零的計畫從製造端落實綠色設計，同時搭配回收教育知識以及舊衣回收的通路，最後再串起後端再生處理，共同創造創新紡織品生態系循環圈。永續循環已經不再只是一個口號，而是成為你我生活的日常，由各企業共同攜手創造民眾可以一起參與的聚酯紡織品全循環經濟模式，落實環保永續循環，不浪費任何資源。一起積極的來實現「零廢棄，全循環」的美好未來。
                        </p> -->
                            <!-- <img loading="lazy" src="@/assets/images/news/pic03.jpg" alt="pic"> -->
                            <!-- <img loading="lazy" :src="info.images.list[0].thumbUrl" alt="pic" /> -->
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <vfooter />
    </div>
</template>
