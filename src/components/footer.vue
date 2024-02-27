<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

function go_top() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {});
</script>
<template>
  <footer>
    <div class="footer_wrapper">
      <div class="footer_menu">
        <div class="footer_item">
          <h3>
            <router-link to="./"> 個人服務 </router-link>
          </h3>
          <router-link to="./">資源回收站</router-link>
          <router-link to="./">廢汽機車回收</router-link>
          <router-link to="./">家具家電回收</router-link>
          <router-link to="./">zero zero項保平台</router-link>
          <router-link to="./">zerozero拆車夢工廠</router-link>
        </div>
        <div class="footer_item">
          <h3>
            <router-link to="./"> 企業服務 </router-link>
          </h3>
          <router-link to="./">企業清運服務</router-link>
          <router-link to="./">再生塑服材料</router-link>
          <router-link to="./">再生循環產品</router-link>
          <router-link to="./">工程顧問服務</router-link>
        </div>
        <div class="footer_item">
          <h3>
            <router-link to="./"> 服務據點 </router-link>
          </h3>
        </div>
        <div class="footer_item">
          <h3>
            <router-link to="./"> 最新消息 </router-link>
          </h3>
          <router-link to="./">活動訊息</router-link>
          <router-link to="./">媒體報導</router-link>
        </div>
        <div class="footer_item">
          <h3>
            <router-link to="./"> ESG </router-link>
          </h3>
        </div>
        <div class="footer_item">
          <h3>
            <router-link to="./"> 關於大豐 </router-link>
          </h3>
          <router-link to="./">公司文化</router-link>
          <router-link to="./">重要紀事</router-link>
          <router-link to="./">專業認證</router-link>
          <router-link to="./">人才招募</router-link>
          <router-link to="./">品牌専區</router-link>
          <router-link to="./">聯络我們</router-link>
        </div>
      </div>
      <div class="footer_logo">
        <div id="f_logo">
          <router-link to="/">
            <img loading="lazy" src="@/assets/images/footer/f_logo.svg" alt="logo" />
          </router-link>
        </div>
        <ul>
          <li>
            <a href="https://www.facebook.com/TaiwanDafon">
              <img loading="lazy" src="@/assets/images/footer/fb_icon.svg" alt="icon" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCHCvcgA_rSi_VLRrEVgxk4g/videos">
              <img loading="lazy" src="@/assets/images/footer/yt_icon.svg" alt="icon" />
            </a>
          </li>
          <li>
            <a href="/">
              <img loading="lazy" src="@/assets/images/footer/mail_icon.svg" alt="icon" />
            </a>
          </li>
        </ul>
      </div> 
    </div>
    <div class="footer_bottom">
      <p>Copyright © 2023 大豐環保. All rights reserved.</p>
      <button id="go_top" @click="go_top">
        <img loading="lazy" src="@/assets/images/go_top.svg" alt="go_top" />
      </button>
    </div>
  </footer>
</template>
