<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const data = ref(null);
const info = ref(null);
const year_info = ref(null);

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
  if (data) {
    window.location.href = data;
  }
}

function slide(data) {
  console.log(data);
  if (data == "all") {
    let element = document.getElementById("year");
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    let subtractPixels = window.innerWidth >= 1024 ? 120 : 75;

    let element = document.getElementById(data);
    let currentScrollPosition = window.scrollY || window.pageYOffset;
    let targetScrollPosition = element.getBoundingClientRect().top + currentScrollPosition - subtractPixels;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth"
    });
  }
}


function open_time(index){
  if(data.value[index].open){
    data.value[index].open=false;
  }else{
    data.value[index].open=true;
  }
}

axios
  .get("http://34.81.192.108:13000/api/v1/milestones/listyear")
  .then((res) => {
    year_info.value = res.data.result.milestonesMain;
    axios
      .get("http://34.81.192.108:13000/api/v1/milestones/list")
      .then((r) => {
        info.value = r.data.result.milestones;

        year_info.value.forEach((item) => {
          // Check if 'console' property exists, if not, create it as an empty array
          if (!item.hasOwnProperty("console")) {
            item.console = [];
          }

          info.value.forEach((items) => {
            if (item.name == items.year) {
              item.console.push(items);
            }
          });
        });

        year_info.value.forEach((data,i) => {
          data.images = JSON.parse(data.images).other[0];
          if(i<=3){
            data.open = true
          }
        });

        data.value = year_info.value;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  })
  .catch((error) => {
    console.error("Error:", error);
  });



onMounted(() => {
  
});
</script>
<template>
  <div>
    <vheader :scroll="true" />

    <main id="about" class="page">
      <div id="banner">
        <div id="banner_pic">
          <img
            loading="lazy"
            src="@/assets/images/about/banner02.jpg"
            alt="banner"
          />
        </div>
      </div>
      <div id="banner_title">
        <h2 class="an fd">重要記事</h2>
        <h3 class="an fd">
          <span><router-link class="color" to="/">大豐環保</router-link></span>
          / 關於大豐
        </h3>
      </div>
      <div id="about_introduce">
        <div id="about_introduce_content">
          <div class="pic an fu">
            <img
              loading="lazy"
              src="@/assets/images/about/pic02.jpg"
              alt="pic"
            />
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
            <li @click="slide('all')">
              <a class="active" href="javascript:void(0)">All</a>
            </li>

            <li>
              <a @click="slide('2024')" href="javascript:void(0)">2020s</a>
            </li>
            <li>
              <a @click="slide('2020')" href="javascript:void(0)">2010s</a>
            </li>
            <li>
              <a @click="slide('2010')" href="javascript:void(0)">2000s</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="timeline">
        <div class="wrapper" v-if="data">
          <div
            class="item"
            :class="{'open': !item.open}"
            v-for="(item, index) in data"
            :key="index"
            :id="item.name"
          >
            <div class="text an fu">
              <span class="node" @click="open_time(index)">
                <span v-if="item.name">{{ item.name }}</span>
              </span>
              <ul v-if="item.console">
                <li
                  v-for="(items, index) in item.console"
                  :key="index"
                  :class="{ color: items.url }"
                  @click="link(items.url)"
                >
                  <span>{{ getMonthFromTime(items.time) }}</span>
                  {{ items.title }}
                </li>
              </ul>
            </div>
            <div class="pic an fu" v-if="item.images && item.images.thumbUrl">
              <img loading="lazy" :src="item.images.thumbUrl" alt="pic" />
            </div>
          </div>
        </div>
      </div>

      <div id="more" class="an fu">
        <router-link to="/certificate">
          <span>專業認證</span>
          <img
            loading="lazy"
            src="@/assets/images/company_serve/more_arrow.svg"
            alt="arrow"
          />
        </router-link>
      </div>
    </main>

    <vfooter />
  </div>
</template>
