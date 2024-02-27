<script setup>
import { useRouter } from "vue-router";
import { ref, onMounted, onBeforeUnmount } from "vue";

const router = useRouter();

const props = defineProps(["logo_color", "fixed","scroll"]);

const header = ref(null);

const scroll = ref(false);

const path = ref(router.currentRoute.value.name);

function scroll_open() {
  const scrollDistance = window.scrollY || window.pageYOffset;
  const triggerDistance = 100;
  if (scrollDistance >= triggerDistance) {
    // header.value.classList.add("scroll");
    scroll.value = true;
  } else {
    // header.value.classList.remove("scroll");
    scroll.value = false;
  }
}
onMounted(() => {
  window.addEventListener("scroll", scroll_open);
});

// onBeforeUnmount(() => {
//   // 移除事件監聽器，防止記憶體洩漏
//   window.removeEventListener("scroll", scroll_open);
// });
</script>

<template>
  <header ref="header" :class="{ fixed: props.fixed, initial_scroll: props.scroll , scroll: scroll }">
    <router-link to="/" id="logo">
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
    </router-link>
    <div id="menu">
      <ul>
        <li>
          <a href="javascript:void(0)">個人服務</a>
        </li>

        <li>
          <a href="javascript:void(0)">企業服務</a>
          <div class="submenu">
            <h2>企業服務</h2>
            <div class="submenu_content">
              <div class="submenu_content_main">
                <div class="submenu_content_item">
                  <router-link
                    :class="{active:path=='enterprise'||'scrap'||'docdestroy'||'wood'}"
                    to="/enterprise"
                    >企業清運服務</router-link>

                  <div class="submenu_content_item_contet">
                    <router-link
                    :class="{active:path=='industrialwaste'}"
                      to="/industrialwaste"
                      >事業廢棄物</router-link
                    >
                    <router-link
                    :class="{active:path=='scrap'}"
                      to="/scrap"
                      >報廢服務</router-link
                    >
                    <router-link
                    :class="{active:path=='docdestroy'}"
                      to="/docdestroy"
                      >資安銷毀</router-link
                    >
                    <router-link
                    :class="{active:path=='wood'}"
                      to="./wood"
                      >廢木材清運</router-link
                    >

                    <router-link
                      to="./"
                      >廢棄物減量</router-link
                    >

                    <router-link
                      to="./"
                      >廢棄物棄置案</router-link
                    >

                    <router-link
                      to="./"
                      >生活垃圾清運</router-link
                    >
                  </div>
                </div>

                <div class="submenu_content_item">
                  <router-link
                    :class="{active:path=='pcr-materials'}"
                    to="./pcr-materials"
                    >再生塑膠材料</router-link
                  >
                </div>
                <div class="submenu_content_item">
                  <a href="javascript:void(0)">再生循環產品</a>
                </div>
                <div class="submenu_content_item">
                  <a href="javascript:void(0)">工程顧問服務</a>
                </div>
              </div>
            </div>
            <div class="ad">
              <img
                loading="lazy"
                src="@/assets/images/menu_pic2.jpg"
                alt="pic"
              />
              <h3>企業清運服務</h3>
            </div>
          </div>
        </li>

        <li>
          <router-link to="/locations"
            >服務據點</router-link
          >
        </li>

        <li>
          <router-link to="/news/0"
            >最新消息</router-link
          >
        </li>

        <li>
          <a href="javascript:void(0)">ESG</a>
        </li>

        <li>
          <a href="javascript:void(0)">關於大豐</a>

          <div class="submenu">
            <h2>關於大豐</h2>
            <div class="submenu_content">
              <div class="submenu_content_main">
                <div class="submenu_content_item no_arrow">
                  <router-link
                    to="/aboutdafon"
                    >公司文化</router-link
                  >
                </div>
                <div class="submenu_content_item no_arrow">
                  <router-link
                    to="/history"
                    >重要紀事</router-link
                  >
                </div>
                <div class="submenu_content_item no_arrow">
                  <router-link
                    to="/certificate"
                    >專業認證</router-link
                  >
                </div>
                <div class="submenu_content_item no_arrow">
                  <router-link
                    to="/certificate"
                    >人才招募</router-link
                  >
                </div>
              </div>
              <div class="submenu_content_main">
                <div class="submenu_content_item no_arrow">
                  <a href="javascript:void(0)">品牌專區</a>
                </div>
                <div class="submenu_content_item no_arrow">
                  <router-link
                    to="/contact"
                    >聯絡我們</router-link
                  >
                </div>
              </div>
            </div>
            <div class="ad">
              <img
                loading="lazy"
                src="@/assets/images/menu_pic.jpg"
                alt="pic"
              />
              <h3>美國FDA再生料食品級認證</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div id="language">
      <a href="javascript:void(0)">EN</a>
    </div>
  </header>
</template>
