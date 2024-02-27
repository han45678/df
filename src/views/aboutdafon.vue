<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, onMounted } from "vue";
import $ from "jquery";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.js';

const banner_text = ref([
  {
    text: "<h3>沒有廢棄物<br>只有錯置資源</h3><p>No Waste, only misplaced resources.</p>",
  },
  {
    text: "<h3>沒有廢棄物<br>只有錯置資源</h3><p>No Waste, only misplaced resources.</p>",
  },
]);

const banner_pic = ref([
  {
    pic: "aboutdafon_banner01.jpg",
  },
  {
    pic: "aboutdafon_banner02.jpg",
  },
]);

function slick() {
  $("#banner_pic").slick({
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    speed: 1000, // 切換動畫速度（毫秒）
    // autoplay: true,
    asNavFor: "#banner_text .text_content",
  });

  $("#banner_text .text_content").slick({
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    speed: 1000, // 切換動畫速度（毫秒）
    // autoplay: true,
    asNavFor: "#banner_pic",
  });
}

onMounted(() => {
  slick();
  setTimeout(() => {
    if ($(".slick_an")) {
      $(".slick_an").addClass("slick_an_go");
    }
  },300);
});
</script>
<template>
  <div>
    <vheader :logo_color="true" />
    <main id="about" class="aboutdafon">
      <div id="banner" class="big">
        <div id="banner_text">
          <div class="text">
            <div class="text_line" />
            <div class="text_content slick_an">
              <div
                class="item"
                v-for="(item, index) in banner_text"
                :key="index"
                v-html="item.text"
              />
            </div>
            <div class="link">
              <a href="https://www.youtube.com/@DaFon2001"><img loading="lazy" src="@/assets/images/icon/play_icon.svg" alt="icon"/></a>
              <a href="https://www.facebook.com/TaiwanDafon/"><img loading="lazy" src="@/assets/images/icon/fb_icon.svg" alt="icon"/></a>
            </div>
          </div>
        </div>
        <div id="banner_pic">
          <img
            v-for="(item, index) in banner_pic"
            :key="index"
            :src="require(`@/assets/images/about/${item.pic}`)"
            alt="banner"
          />
        </div>
      </div>
      <div id="banner_title">
        <h2 class="an fd">公司文化</h2>
        <h3 class="an fd">
          <span><router-link class="color" to="/">大豐環保</router-link></span>
          / 關於大豐
        </h3>
      </div>
      <div id="introduce">
        <div id="introduce_content">
          <div class="pic an fu">
            <img loading="lazy" class="" src="@/assets/images/about/pic01.jpg" alt="pic" />
          </div>
          <div class="text an fl">
            <h3 class="">資源全循環．永續新未來</h3>
            <h4 class="">零廢棄，全循環</h4>
            <p class="">
              大豐環保自2001年成立，以回收站起家，擁有專業研發團隊，從回收端、清運到再生，成功打造一條龍資源全循環。​
            </p>
            <p class="">
              面對日益嚴峻的環境議題，我們仍舊懷抱希望，「零廢棄，全循環」的使命不只是口號，更是大豐環保的行事準則。我們會在通往永續未來的道路上，與您並肩同行。
            </p>
          </div>
          <div class="cycle an fu">
            <img loading="lazy" src="@/assets/images/about/pic02.png" alt="pic" />
          </div>
        </div>
      </div>
      <div id="core">
        <div class="wrapper">
          <div class="title">
            <h3 class="an fu">
              <img
                class="icon"
                src="@/assets/images/about/title_icon.svg"
                alt="title_icon"
              />
              核心精神
            </h3>
          </div>
          <!-- <div class="content pc an fu">
                    <img loading="lazy" class="pc_pic" src="@/assets/images/about/core.png" alt="core">
                </div> -->
          <div class="content m">
            <div class="item an fu">
              <img loading="lazy" src="@/assets/images/about/cycle_pic01.png" alt="pic" />
              <p>
                協助客戶建立最專業的資源分類知識、最具效率的回收通路系統，積極研發再利用、再製造技術，致力於<span>零廢棄資源全循環</span>。
              </p>
            </div>
            <div class="item an fu">
              <img loading="lazy" src="@/assets/images/about/cycle_pic02.png" alt="pic" />
              <p>
                成為最具品牌價值、最便利、最佳人均獲利的​<span>全球性資源循環管理公司</span>。
              </p>
            </div>
            <div class="item an fu">
              <img loading="lazy" src="@/assets/images/about/cycle_pic03.png" alt="pic" />
              <p>
                堅持打造具有​<span>正面積極</span>影響的企業，與環境永續共好。
              </p>
            </div>
            <div class="item an fu">
              <img loading="lazy" src="@/assets/images/about/cycle_pic04.png" alt="pic" />
            </div>
          </div>
        </div>
      </div>
      <div id="develop">
        <div class="title">
          <h3 class="an fu">
            <img
              class="icon"
              src="@/assets/images/about/title_icon.svg"
              alt="title_icon"
            />
            永續發展
          </h3>
        </div>
        <div class="pic an fu">
          <img loading="lazy" src="@/assets/images/about/develop_pic.jpg" alt="pic" />
        </div>
        <div class="content">
          <div class="text an fu">
            <p>
              大豐環保長期關注氣候變遷、能源枯竭等全球議題，並持續推廣環境教育、媒合異業，讓永續觀念以多元面向貼近大眾。​
            </p>
            <p>
              成為對世界產生正向循環之企業，並打造幸福職場，是大豐環保經營理念，不僅達成聯合國ESG指標，也期許發揮企業永續影響力，攜手世界迎接永續未來。​
            </p>
          </div>
        </div>
        <div id="develop_achieve">
          <div class="wrapper">
            <div class="item an fu">
              <div class="achieve_pic">
                <img
                  src="@/assets/images/about/develop_achieve_pic01.jpg"
                  alt="pic"
                />
              </div>
              <h5>環境教育</h5>
            </div>
            <div class="item an fu">
              <div class="achieve_pic">
                <img
                  src="@/assets/images/about/develop_achieve_pic02.jpg"
                  alt="pic"
                />
              </div>
              <h5>異業媒合</h5>
            </div>
            <div class="item an fu">
              <div class="achieve_pic">
                <img
                  src="@/assets/images/about/develop_achieve_pic03.jpg"
                  alt="pic"
                />
              </div>
              <h5>企業永續</h5>
            </div>
          </div>
        </div>
      </div>
      <div id="more" class="an fu">
        <router-link to="/history">
          <span>重要紀事</span>
          <img loading="lazy" src="@/assets/images/company_serve/more_arrow.svg" alt="arrow" />
        </router-link>
      </div>
    </main>
    <vfooter />
  </div>
</template>
