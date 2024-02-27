<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
const props = defineProps(["logo_color", "fixed"]);
const router = useRouter();

const path = ref(router.currentRoute.value.name);

const menu_open = ref(false);
const submenu_open = ref(false);
const grandchild_open = ref(false);

const submenu2 = ref(false);
const grandchild_menu2_1 = ref(false);
const submenu3 = ref(false);

function menu_off_btn() {
  menu_open.value = false;
  grandchild_open.value = false;

  submenu_open.value = false;

  submenu2.value = false;
  submenu3.value = false;

  grandchild_menu2_1.value = false;
}

onMounted(() => {});
</script>

<template>
  <header ref="header" id="m" :class="{ fixed: props.fixed }">
    <router-link to="/" id="m_logo">
      <h1>大豐環保科技股份有限公司</h1>
      <img src="@/assets/images/logo.png" alt="大豐環保科技股份有限公司" />
    </router-link>
    <div id="m_menu" :class="{ active: menu_open }">
      <button id="menu_off_btn" @click="menu_off_btn()">
        <img src="@/assets/images/icon/off_menu_btn.svg" alt="off_menu_btn" />
      </button>

      <ul :class="{ submenu_open: submenu_open }">
        <li class="parent_menu">
          <a href="javascript:void(0)">個人服務</a>
        </li>
        <li
          class="parent_menu"
          @click="
            submenu2 = true;
            submenu_open = true;
          "
        >
          <a href="javascript:void(0)">企業服務</a>
        </li>
        <li>
          <router-link
            :class="{ current: path == 'locations' }"
            to="/locations"
          >
            服務據點
          </router-link>
        </li>
        <li>
          <router-link :class="{ current: path == 'news' }" to="/news/0">
            最新消息
          </router-link>
        </li>
        <li>
          <a href="javascript:void(0)">ESG</a>
        </li>
        <li
          class="parent_menu"
          @click="
            submenu3 = true;
            submenu_open = true;
          "
        >
          <a href="javascript:void(0)">關於大豐</a>
        </li>
        <li class="link">
          <a href="https://www.youtube.com/@DaFon2001">
            <img
              loading="lazy"
              src="@/assets/images/icon/fb_w_icon.svg"
              alt="icon"
            />
          </a>
          <a href="https://www.facebook.com/TaiwanDafon/">
            <img
              loading="lazy"
              src="@/assets/images/icon/yt_w_icon.svg"
              alt="icon"
            />
          </a>
        </li>
      </ul>

      <div
        class="submenu"
        :class="{ active: submenu2, grandchild_open: grandchild_open }"
      >
        <h2
          @click="
            submenu2 = false;
            submenu_open = false;
          "
        >
          企業服務
        </h2>
        <div class="item">
          <router-link
            :class="{
              current:
                path === 'enterprise' ||
                path === 'industrialwaste' ||
                path === 'scrap' ||
                path === 'docdestroy' ||
                path === 'wood',
            }"
            to="/aboutdafon"
            >企業清運服務</router-link
          >
          <button
            @click="
              grandchild_menu2_1 = true;
              grandchild_open = true;
            "
          >
            +
          </button>
        </div>
        <div class="item">
          <router-link to="./pcr-materials">再生塑膠材料</router-link>
        </div>
        <div class="item"><a href="javascript:void(0)">再生循環產品</a></div>
        <div class="item"><a href="javascript:void(0)">工程顧問服務</a></div>
      </div>

      <div class="grandchild_menu" :class="{ active: grandchild_menu2_1 }">
        <h2
          @click="
            grandchild_menu2_1 = false;
            grandchild_open = false;
          "
        >
          企業清運服務
        </h2>
        <div class="item">
          <router-link
            :class="{ current: path == 'industrialwaste' }"
            to="/industrialwaste"
            >事業廢棄物</router-link
          >
        </div>
        <div class="item">
          <router-link :class="{ current: path == 'scrap' }" to="/scrap"
            >報廢服務</router-link
          >
        </div>
        <div class="item">
          <router-link
            :class="{ current: path == 'docdestroy' }"
            to="/docdestroy"
            >資安銷毀</router-link
          >
        </div>
        <div class="item">
          <router-link :class="{ current: path == 'wood' }" to="./wood"
            >廢木材清運</router-link
          >
        </div>

        <div class="item">
          <router-link to="./"
            >廢棄物減量</router-link
          >
        </div>
        <div class="item">
          <router-link to="./"
            >廢棄物棄置案</router-link
          >
        </div>
        <div class="item">
          <router-link to="./"
            >生活垃圾清運</router-link
          >
        </div>
      </div>

      <div
        class="submenu"
        :class="{ active: submenu3, grandchild_open: grandchild_open }"
      >
        <h2
          @click="
            submenu3 = false;
            submenu_open = false;
          "
        >
          關於大豐
        </h2>
        <div class="item">
          <router-link
            :class="{ current: path == 'aboutdafon' }"
            to="/aboutdafon"
            >公司文化</router-link
          >
        </div>
        <div class="item">
          <router-link :class="{ current: path == 'history' }" to="/history"
            >重要紀事</router-link
          >
        </div>
        <div class="item">
          <router-link
            :class="{ current: path == 'certificate' }"
            to="/certificate"
            >專業認證</router-link
          >
        </div>
        <div class="item"><a href="javascript:void(0)">人才招募</a></div>
        <div class="item"><a href="javascript:void(0)">品牌專區</a></div>
        <div class="item">
          <router-link :class="{ current: path == 'contact' }" to="/contact"
            >聯絡我們</router-link
          >
        </div>
      </div>
    </div>
    <div id="btn">
      <div id="language">
        <a href="javascript:void(0)">EN</a>
      </div>
      <button id="menu_btn" @click="menu_open = !menu_open">
        <span class="icon"></span>
      </button>
    </div>
  </header>
</template>
