<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const info = ref(null);

function getMonthFromTime(time) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(time);
  const monthIndex = date.getMonth();
  return months[monthIndex];
}

function link(data) {
  if(data){
    window.location.href = data;
  }
}

axios
  .get("http://34.81.192.108:13000/api/v1/milestones/list")
  .then((r) => {
    info.value = r.data.result.milestones;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

onMounted(() => {});
</script>
<template>
  <div>
    <vheader :logo_color="true" />

    <main id="about">
      <div id="banner">
        <div id="banner_pic">
          <img loading="lazy" src="@/assets/images/about/banner02.jpg" alt="banner" />
        </div>
      </div>
      <div id="banner_title">
        <h2 class="an fd">重要記事</h2>
        <h3 class="an fd">
          <span><router-link to="/">大豐環保</router-link></span>
          /關於大豐
        </h3>
      </div>
      <div id="about_introduce">
        <div id="about_introduce_content">
          <div class="pic an fu">
            <img loading="lazy" src="@/assets/images/about/pic02.jpg" alt="pic" />
          </div>
          <div class="text an fl">
            <h3 class="main_color">持續成長，超越昨日自己​</h3>
            <h4>永續創新，無限可能</h4>
            <p>
              大豐環保持續挑戰自我，不斷榮獲多項肯定外，也擴大自身業務型態，並勇於創新、積極跨領域合作，對永續未來的想像從不設限，拓展環保產業的無限可能。​
            </p>
          </div>
        </div>
      </div>

      <div id="year">
        <div class="wrapper">
          <ul class="an fu">
            <li>
              <a class="active" href="javascript:void(0)">All</a>
            </li>
            <li>
              <a href="javascript:void(0)">2020s</a>
            </li>
            <li>
              <a href="javascript:void(0)">2010s</a>
            </li>
            <li>
              <a href="javascript:void(0)">2000s</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="timeline">
        <div class="wrapper" v-if="info">
          <div
            class="item an fu"
            v-for="(item, index) in info"
            :data-index="index"
            :key="item.id"
          >
            <div class="text">
              <span class="node">
                <span>{{ item.year }}</span>
              </span>
              <ul>
                <li :class="{ color: item.url }" @click="link(item.url)">
                  <span>{{ getMonthFromTime(item.time) }}</span>
                  {{ item.title }}
                </li>
              </ul>
            </div>
            <!-- <div class="pic">
              <img loading="lazy" src="@/assets/images/about/history_pic01.jpg" alt="pic" />
            </div> -->
          </div>
        </div>
      </div>

      <div id="more" class="an fu">
        <router-link to="/certificate">
          <span>專業認證</span>
          <img loading="lazy" src="@/assets/images/company_serve/more_arrow.svg" alt="arrow" />
        </router-link>
      </div>
    </main>

    <vfooter />
  </div>
</template>
