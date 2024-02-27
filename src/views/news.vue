<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const load = ref(false);

const router = useRouter();

const type_list = ref(null);

const type = ref(router.currentRoute.value.params.news);

const year = ref(window.location.href.split("?year=")[1]);

// window.location.href.split(' ');

// console.log("分類", type.value, "年分", year.value);

//目前第幾頁
const no = ref(0);

// 列表資料
const info = ref(null);

//每頁幾個 從1開始算
const info_page = ref(9);

//總共幾個
const info_total = ref(null);

const currentPage = ref(0);

const totalPages = computed(() =>
  Math.ceil(info_total.value / info_page.value)
);

const goToPage = (pageNumber) => {
  load.value = false;
  console.log(`Navigating to page ${pageNumber - 1}`);
  currentPage.value = pageNumber - 1;
  no.value = currentPage.value;

  getInfo();
};

function prevPageMax() {
  load.value = false;
  no.value = 0;
  getInfo();
}

function prevPage() {
  load.value = false;
  no.value--;
  getInfo();
}

function nextPage() {
  load.value = false;
  no.value++;
  getInfo();
}

function nextPageMax() {
  load.value = false;
  no.value = Math.ceil(info_total.value / info_page.value) - 1;
  getInfo();
}

function getInfo() {
  let _type_api = `http://34.81.192.108:13000/api/v1/news/getNewsMainList?currentPage=0&pageSize=9`;
  let _api = null;

  //如果type是0 就不帶參數進去
  if (type.value == 0) {
    _api = `http://34.81.192.108:13000/api/v1/news/list?currentPage=${no.value}&pageSize=${info_page.value}`;
    if (year.value) {
      _api += `&year=${year.value}`;
    }
  } else {
    _api = `http://34.81.192.108:13000/api/v1/news/list?currentPage=${no.value}&pageSize=${info_page.value}&type=${type.value}`;
    if (year.value) {
      _api += `&year=${year.value}`;
    }
  }

  // 在這裡，_api 已經包含了共同的部分，接下來只需要處理特殊條件即可

  console.log(_api);

  Promise.all([axios.get(_type_api), axios.get(_api)])
    .then((responses) => {
      const [typeResponse, infoResponse] = responses;

      type_list.value = typeResponse.data.result.rows;

      //日期排序
      info.value = infoResponse.data.result.news.sort(function (a, b) {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateB - dateA;
      });

      //後端把圖片怎麼物件弄成字串了...
      info.value.forEach((data) => {
        data.images = JSON.parse(data.images);
      });

      info_page.value = infoResponse.data.result.page;
      info_total.value = infoResponse.data.result.total;

      load.value = true;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function to(id) {
  load.value = false;
  no.value = 0;
  type.value = id;

  if (year.value) {
    router.push(`/news/${type.value}?year=${year.value}`);
  } else {
    router.push(`/news/${type.value}`);
  }

  getInfo();
}

function toYear(y) {
  load.value = false;
  no.value = 0;
  year.value = y;
  console.log(y, year.value);
  router.push(`/news/${type.value}?year=${year.value}`);
  getInfo();
}

getInfo();
</script>
<template>
  <div>
    <vheader :logo_color="true" />

    <main id="news" v-if="load">
      <div id="banner">
        <div id="banner_pic">
          <img
            loading="lazy"
            src="@/assets/images/news/banner.jpg"
            alt="banner"
          />
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

            <li
              v-for="(item, index) in type_list"
              :key="item.id"
              :data-index="index"
              :class="{ active: type == item.id }"
            >
              <a href="javascript:void(0)" @click="to(item.id)">
                {{ item.name }}
              </a>
            </li>

            <li>
              <a href="javascript:void(0)">全部年份</a>
              <ol>
                <li :class="{active:year=='2023'}">
                  <a href="javascript:void(0)" @click="toYear('2023')">
                    2023
                  </a>
                </li>
                <li :class="{active:year=='2022'}">
                  <a href="javascript:void(0)" @click="toYear('2022')">
                    2022
                  </a>
                </li>
                <li :class="{active:year=='2021'}">
                  <a href="javascript:void(0)" @click="toYear('2021')">
                    2021
                  </a>
                </li>
                <li :class="{active:year=='2020'}">
                  <a  href="javascript:void(0)" @click="toYear('2020')">
                    2020
                  </a>
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
      <div id="news_content">
        <div class="news_wrapper">
          <div class="title">
            <h3 class="an fu" v-show="type == 0">所有類別</h3>
            <h3
              v-for="(item, index) in type_list"
              class="an fu"
              :key="item.id"
              :data-index="index"
              v-show="type == item.id"
            >
              {{ item.name }}
            </h3>
          </div>
          <div class="content">
            <div
              class="item"
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
                <p v-html="item.description" />
              </div>
              <div class="pic">
                <img
                  v-if="item.images.list.length>0"
                  loading="lazy"
                  :src="item.images.list[0].thumbUrl"
                  alt="pic"
                />
              </div>
              <router-link :to="`/news_page?${item.id}`">閱讀更多</router-link>
            </div>
          </div>
        </div>
      </div>
      <div id="page_no" class="an fu">
        <ul>
          <!-- 第一頁 -->
          <li :class="{ hide: no == 0 }">
            <a @click="prevPageMax" href="javascript:void(0)"
              ><img
                loading="lazy"
                src="@/assets/images/icon/page_no_prev__moret.svg"
                alt="icon"
            /></a>
          </li>
          <!-- 上一頁 -->
          <li :class="{ hide: no == 0 }">
            <a @click="prevPage" href="javascript:void(0)">
              <img
                loading="lazy"
                src="@/assets/images/icon/page_no_prev.svg"
                alt="icon"
            /></a>
          </li>

          <!-- ▼所有頁碼▼ -->
          <li v-for="pageNumber in totalPages" :key="pageNumber">
            <a
              :class="{ active: pageNumber - 1 === no }"
              @click="goToPage(pageNumber)"
              href="javascript:void(0)"
              >{{ pageNumber }}</a
            >
          </li>
          <!-- ▲所有頁碼▲ -->

          <!-- 下一頁 -->
          <li :class="{ hide: no == totalPages - 1 }">
            <a @click="nextPage" href="javascript:void(0)">
              <img
                loading="lazy"
                src="@/assets/images/icon/page_no_next.svg"
                alt="icon"
              />
            </a>
          </li>

          <!-- 最後一頁 -->
          <li :class="{ hide: no == totalPages - 1 }">
            <a @click="nextPageMax" href="javascript:void(0)">
              <img
                loading="lazy"
                src="@/assets/images/icon/page_no_next_moret.svg"
                alt="icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </main>

    <vfooter />
  </div>
</template>
