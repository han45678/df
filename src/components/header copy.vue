<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const props = defineProps(['logo_color','fixed']);

const header = ref(null);

const menuBtn = () => {
  document.querySelector("#menu ul").classList.add("active");
  document.querySelector("#menu_off_btn").classList.add("active");
};

const menuOffBtn = () => {
  document.querySelector("#menu ul").classList.remove("active");
  document.querySelector("#menu_off_btn").classList.remove("active");
  document
    .querySelectorAll("#header_wrapper #menu ul li.lower_menu")
    .forEach((item) => {
      item.classList.remove("active");
    });
  document
    .querySelector("#header_wrapper #menu ul")
    .classList.remove("open_submenu");
};

const submenuClick = (item) => {
  item.classList.add("active");
  document
    .querySelector("#header_wrapper #menu ul")
    .classList.add("open_submenu");
};

const submenuContentClick = (event) => {
  event.stopPropagation(); // Prevent event propagation
  document
    .querySelector("#header_wrapper #menu ul")
    .classList.remove("open_submenu");
};

onMounted(() => {
  document
    .querySelectorAll("#header_wrapper #menu ul li.lower_menu")
    .forEach((item) => {
      item.addEventListener("click", () => submenuClick(item));
    });

  document
    .querySelectorAll(
      ".lower_menu .lower_menu_content .lower_menu_content_item h2"
    )
    .forEach((item) => {
      item.addEventListener("click", (event) => submenuContentClick(event));
    });

  window.addEventListener("scroll", function () {
    const scrollDistance = window.scrollY || window.pageYOffset;

    const triggerDistance = 100;

    if (scrollDistance >= triggerDistance) {
      header.value.classList.add("scroll");
    } else {
      header.value.classList.remove("scroll");
    }
  });
});
</script>

<template>
  <header ref="header" :class="{fixed:props.fixed}">
    <div id="header_wrapper">
      <a id="logo" href="./">
        <h1>大豐環保科技股份有限公司</h1>
        <img
          v-if="!props.logo_color"
          class="no_scroll"
          src="@/assets/images/logo_w.png"
          alt="大豐環保科技股份有限公司"
        />
        <img
          v-else
          class="no_scroll"
          src="@/assets/images/logo.png"
          alt="大豐環保科技股份有限公司"
        />

        <img
          class="scroll"
          src="@/assets/images/logo.png"
          alt="大豐環保科技股份有限公司"
        />
      </a>
      <div id="menu">
        <button id="menu_off_btn" @click="menuOffBtn">
          <img loading="lazy" src="@/assets/images/icon/off_menu_btn.svg" alt="off_menu_btn" />
        </button>
        <ul>
          <li>
            <a href="javascript:void(0)">個人服務</a>
          </li>

          <li class="lower_menu" @click="submenuClick($event.currentTarget)">
            <a href="javascript:void(0)">企業服務</a>
            <div class="lower_menu_content">
              <div class="lower_menu_content_item">
                <h2 class="menu_name">企業服務</h2>
                <div class="menu_secondary">
                  <router-link to="/enterprise">企業清運服務</router-link>
                  <router-link to="/industrialwaste">事業廢棄物</router-link>
                  <router-link to="/scrap">報廢服務</router-link>
                  <router-link to="/docdestroy">資安銷毀</router-link>
                  <router-link to="./wood">廢木材清運</router-link>
                  <router-link to="/pcr-materials">再生塑膠材料</router-link>
                </div>
              </div>
              <div class="menu_pic">
                <img loading="lazy" src="@/assets/images/menu_pic.jpg" alt="pic" />
                <h3>企業清運服務</h3>
              </div>
            </div>
          </li>
          <li>
            <router-link to="/locations">服務據點</router-link>
          </li>
          <li>
            <router-link to="/news">最新消息</router-link>
          </li>
          <li>
            <a href="">ESG</a>
          </li>
          <li class="lower_menu" @click="submenuClick($event.currentTarget)">
            <a href="javascript:void(0)">關於大豐</a>
            <div class="lower_menu_content">
              <div class="lower_menu_content_item">
                <h2 class="menu_name">個人化服務</h2>
                <div class="menu_secondary">
                  <router-link to="/aboutdafon">公司文化</router-link>
                  <router-link to="/history">重要紀事</router-link>
                  <router-link to="/certificate">專業認證</router-link>
                  <a href="">人才招募</a>
                  <a href="">品牌專區</a>
                  <router-link to="/contact">聯絡我們</router-link>
                </div>
              </div>
              <div class="menu_pic">
                <img loading="lazy" src="@/assets/images/menu_pic.jpg" alt="pic" />
                <h3>美國FDA再生料食品級認證</h3>
              </div>
            </div>
          </li>
          <li>
            <a href="">
                <img loading="lazy" src="@/assets/images/icon/fb_w_icon.svg" alt="icon"/>
            </a>
            <a href="">
                <img loading="lazy" src="@/assets/images/icon/yt_w_icon.svg" alt="icon"/>
            </a>
          </li>
        </ul>
        <div id="language"><a href="">EN</a></div>
        <button id="menu_btn" @click="menuBtn">
          <span class="icon"></span>
        </button>
      </div>
    </div>
  </header>
</template>
