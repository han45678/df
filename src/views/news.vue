<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const type = ref(null);

//目前第幾頁
const no = ref(0);

// 列表資料
const info = ref(null);

//每頁幾個 從0開始算
const info_page = ref(8);

//總共幾個
const info_total = ref(null);

const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(info_total.value / info_page.value));

const goToPage = (pageNumber) => {
  console.log(`Navigating to page ${pageNumber}`);
  currentPage.value = pageNumber;
};

const prevPage = () => {
  if (currentPage.value > 1) {
    goToPage(currentPage.value - 1);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    goToPage(currentPage.value + 1);
  }
};

Promise.all([
  axios.get(
    "http://34.81.192.108:13000/api/v1/news/getNewsMainList?currentPage=0&pageSize=8"
  ),
  axios.get(
    `http://34.81.192.108:13000/api/v1/news/list?currentPage=${no.value}&pageSize=${info_page.value}`
  ),
])
  .then((responses) => {
    const [typeResponse, infoResponse] = responses;

    type.value = typeResponse.data.result.rows;

    info.value = infoResponse.data.result.news;
    info_page.value = infoResponse.data.result.page;
    info_total.value = infoResponse.data.result.total;

    console.log(type.value);
    console.log(infoResponse.data.result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

</script>
<template>
  <div>
    <vheader :logo_color="true" />

    <main id="news">
      <div id="banner">
        <div id="banner_pic">
          <img loading="lazy" src="@/assets/images/news/banner.jpg" alt="banner" />
        </div>
      </div>
      <div id="banner_title">
        <h2 class="an fd">最新消息</h2>
        <h3 class="an fd">
          <span><router-link to="/">大豐環保</router-link></span>
        </h3>
      </div>
      <div id="news_type">
        <div class="news_wrapper an fu">
          <ul>
            <li class="active">
              <a href="javascript:void(0)">所有類別</a>
            </li>

            <li
              v-for="(item, index) in type"
              :key="item.id"
              :data-index="index"
            >
              <a href="javascript:void(0)">{{ item.title }}</a>
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
      <div id="news_content">
        <div class="news_wrapper">
          <div class="title">
            <h3 class="an fu">所有類別</h3>
          </div>
          <div class="content">
            <div
              class="item an fu"
              v-for="(item, index) in info"
              :key="item.id"
              :data-index="index"
            >
              <div class="text">
                <h5 v-html="item.category" />
                <h4 v-html="item.title" />
                <div class="date">
                  {{ item.date }}
                </div>
                <p v-html="item.content" />
              </div>
              <div class="pic">
                <img loading="lazy" src="@/assets/images/news/pic01.jpg" alt="pic" />
              </div>
              <router-link :to="`/news_page?${item.id}`">閱讀更多</router-link>
            </div>
          </div>
        </div>
      </div>
      <div id="page_no" class="an fu">
    <ul>
      <li>
        <a @click="prevPage"><img loading="lazy" src="@/assets/images/icon/page_no_prev__moret.svg" alt="icon"/></a>
      </li>
      <li>
        <a @click="prevPage"><img loading="lazy" src="@/assets/images/icon/page_no_prev.svg" alt="icon"/></a>
      </li>
      <li v-for="pageNumber in totalPages" :key="pageNumber">
        <a :class="{ active: pageNumber === currentPage }" @click="goToPage(pageNumber)">{{ pageNumber }}</a>
      </li>
      <li>
        <a @click="nextPage"><img loading="lazy" src="@/assets/images/icon/page_no_next.svg" alt="icon"/></a>
      </li>
      <li>
        <a @click="nextPage"><img loading="lazy" src="@/assets/images/icon/page_no_next_moret.svg" alt="icon"/></a>
      </li>
    </ul>
  </div>
    </main>

    <vfooter />
  </div>
</template>
