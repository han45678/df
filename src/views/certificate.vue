<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
// import lightbox from 'vue-lightbox';
import { ref, onMounted } from "vue";

const certificate = ref([
  {
    title: "ISO認證",
    text: "協助企業維持產品與服務，確保品質穩定一致",
    content: [
      {
        pic: "certificate_pic01_b.jpg",
        thumbnail: "certificate_pic01.jpg",
        text: "通過ISO 9001:2015 品質管理系統",
      },
      {
        pic: "certificate_pic02_b.jpg",
        thumbnail: "certificate_pic02.jpg",
        text: "通過ISO 14001:2015 環境管理系統",
      },
      {
        pic: "certificate_pic03_b.jpg",
        thumbnail: "certificate_pic03.jpg",
        text: "通過ISO 45001:2018 職安衛生管理系統",
      },
    ],
  },
  {
    title: "專業清運認證​",
    text: "一般廢棄物、一般事業廢棄物及有害事業廢棄物清除業務。",
    content: [
      {
        pic: "certificate_pic04_b.jpg",
        thumbnail: "certificate_pic04.jpg",
        text: "甲級廢棄物清除許可證",
      },
    ],
  },
  {
    title: "溯源認證​",
    text: "關於材料「消費後再生」之溯源認證，可有效證明再生料之塑膠廢棄物來源並受稽核單位監管。",
    content: [
      {
        pic: "certificate_pic05_b.jpg",
        thumbnail: "certificate_pic05.jpg",
        text: "全亞洲第一家獲得 德國「藍天使」EuCertPlast材料供應商認證",
      },
      {
        pic: "certificate_pic06_b.jpg",
        thumbnail: "certificate_pic06.jpg",
        text: "Global Recycled Standard (GRS) 再生料溯源認證",
      },
      {
        pic: "certificate_pic09_b.jpg",
        thumbnail: "certificate_pic07.jpg",
        text: "TUV PCR 再生料溯源認證",
      },
      {
        pic: "certificate_pic07_b.jpg",
        thumbnail: "certificate_pic08.jpg",
        text: "PIDC PRM 塑膠材料認證（HDPE）",
      },
      {
        pic: "certificate_pic08_b.jpg",
        thumbnail: "certificate_pic09.jpg",
        text: "PIDC PRM 塑膠材料認證（PP）",
      },
    ],
  },
  {
    title: "碳足跡認證",
    text: "依據ISO 14067計算產品碳排放量由第三方機構認證數值正確性，幫助企業消費者了解產品對氣候變遷造成的影響。",
    content: [
      {
        pic: "certificate_pic10_b.jpg",
        thumbnail: "certificate_pic10.jpg",
        text: "TUV碳足跡認證​<br />材料有效降低75%碳排放（HDPE）",
      },
      {
        pic: "certificate_pic11_b.jpg",
        thumbnail: "certificate_pic11.jpg",
        text: "TUV碳足跡認證​<br />材料有效降低75%碳排放（HDPE）",
      },
      {
        pic: "certificate_pic12_b.jpg",
        thumbnail: "certificate_pic12.jpg",
        text: "TUV碳足跡認證​<br />材料有效降低75%碳排放（PP）",
      },
      {
        pic: "certificate_pic13_b.jpg",
        thumbnail: "certificate_pic13.jpg",
        text: "TUV碳足跡認證​<br />材料有效降低75%碳排放（PP）",
      },
    ],
  },
  {
    title: "產品認證​",
    text: "產品應用範疇有關的各項認證，包含美國FDA再生料食品級認證、清真認證、綠色商品認證。",
    content: [
      {
        pic: "certificate_pic14_b.jpg",
        thumbnail: "certificate_pic14.jpg",
        text: "台灣首間美國FDA NOL 再生料供應商（r-HDPE）",
      },
      {
        pic: "certificate_pic15_b.jpg",
        thumbnail: "certificate_pic15.jpg",
        text: "台灣首間美國FDA NOL 再生料供應商（r-PP）",
      },
      {
        pic: "certificate_pic16_b.jpg",
        thumbnail: "certificate_pic16.jpg",
        text: "清真產品認證​​",
      },
      {
        pic: "certificate_pic17_b.jpg",
        thumbnail: "certificate_pic17.jpg",
        text: "綠色產品認證",
      },
    ],
  },
  {
    title: "安全性檢測​",
    text: "與安全性有關之毒物、重金屬、塑化劑、食品溶出等各項檢測報告。",
    content: [
      {
        pic: "certificate_pic18_b.jpg",
        thumbnail: "certificate_pic18.jpg",
        text: "REACH SVHC",
      },
      {
        pic: "certificate_pic19_b.jpg",
        thumbnail: "certificate_pic19.jpg",
        text: "RoHS​",
      },
      {
        pic: "certificate_pic20_b.jpg",
        thumbnail: "certificate_pic20.jpg",
        text: "CFR FDA 測試報告​",
      },
      {
        pic: "certificate_pic21_b.jpg",
        thumbnail: "certificate_pic21.jpg",
        text: "EU No. 10 測試報告",
      },
    ],
  },
]);

const lightbox = ref(false);
const lightbox_pic = ref(null);

function open_pic(data) {
    lightbox.value = true;
    lightbox_pic.value = data;
}

const scrollToElement = (data) => {
  let element = document.querySelector(`#${data}`);
  element.scrollIntoView({ behavior: "smooth" });
};

function closeBtn(){
  lightbox.value=false;
  lightbox_pic.value = '';
}

onMounted(() => {
  // lightbox_()
});
</script>
<template>
  <div>
    <vheader :logo_color="true" :fixed="true" :scroll="true" />

    <main id="about" class="page">
      <div id="banner">
        <div id="banner_pic">
          <img loading="lazy" src="@/assets/images/about/banner03.jpg" alt="banner" />
        </div>
      </div>
      <div id="banner_title">
        <h2 class="an fd">專業認證</h2>
        <h3 class="an fd">
          <span><router-link class="color" to="/">首頁</router-link></span>
          / 關於大豐
        </h3>
      </div>
      <div id="about_introduce">
        <div id="about_introduce_content">
          <div class="pic an fu">
            <img loading="lazy" src="@/assets/images/about/pic03.jpg" alt="pic" />
          </div>
          <div class="text">
            <h3 class="main_color an fl">堅持．成就品質</h3>
            <p class="an fl">
              品質提升仰賴嚴格把關，大豐環保持續精進系統、優化流程，遵循法規並符合國際認證，提供最專業、用心、高規格的服務，是客戶最安心的夥伴。​
            </p>
            <img
              src="@/assets/images/about/about_introduce_pic01.jpg"
              alt="pic"
            />
          </div>
        </div>
      </div>

      <div id="certificate_type">
        <div class="wrapper">
          <div id="certificate_type_content" class="an fu">
            <div class="item" @click="scrollToElement('cl0')">
              <h3>
                ISO認證
                <span> ISO Certification </span>
              </h3>
              <div class="pic">
                <img
                  src="@/assets/images/about/certificate_type_poc1.jpg"
                  alt="pic"
                />
              </div>
            </div>
            <div class="item" @click="scrollToElement('cl1')">
              <h3>
                專業清運認證​
                <span> Clearance Certification </span>
              </h3>
              <div class="pic">
                <img
                  src="@/assets/images/about/certificate_type_poc2.jpg"
                  alt="pic"
                />
              </div>
            </div>
            <div class="item" @click="scrollToElement('cl2')">
              <h3>
                溯源認證​
                <span> Traceability Certification </span>
              </h3>
              <div class="pic">
                <img
                  src="@/assets/images/about/certificate_type_poc3.jpg"
                  alt="pic"
                />
              </div>
            </div>
            <div class="item" @click="scrollToElement('cl3')">
              <h3>
                碳足跡認證
                <span> Carbon Footprint </span>
              </h3>
              <div class="pic">
                <img
                  src="@/assets/images/about/certificate_type_poc4.jpg"
                  alt="pic"
                />
              </div>
            </div>
            <div class="item" @click="scrollToElement('cl4')">
              <h3>
                產品認證​
                <span> Product Certification </span>
              </h3>
              <div class="pic">
                <img
                  src="@/assets/images/about/certificate_type_poc5.jpg"
                  alt="pic"
                />
              </div>
            </div>
            <div class="item" @click="scrollToElement('cl5')">
              <h3>
                安全性檢測​
                <span> Safety Test </span>
              </h3>
              <div class="pic">
                <img
                  src="@/assets/images/about/certificate_type_poc6.jpg"
                  alt="pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="certificate">
        <div class="wrapper">
          <div
            class="certificate_list"
            v-for="(item, index) in certificate"
            :key="index.title"
            :id="'cl' + index"
          >
            <div class="certificate_title">
              <h3 v-html="item.title" />
              <h4 v-html="item.text" />
            </div>
            <div class="certificate_content an fu">
              <div class="item" v-for="(items, i) in item.content" :key="i">
                <a href="javascript:void(0)" @click="open_pic(require(`@/assets/images/about/${items.pic}`))">
                  <img
                    class="example-image"
                    :src="require(`@/assets/images/about/${items.thumbnail}`)"
                    alt="thumbnail"
                  />
                </a>

                <h5 v-html="items.text" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="more">
        <router-link to="/contact">
          <span>聯絡我們</span>
          <img loading="lazy" src="@/assets/images/company_serve/more_arrow.svg" alt="arrow" />
        </router-link>
      </div>
    </main>

    <!-- 燈箱 -->
    <div id="lightbox" :class="{active:lightbox}">
      <div id="lightbox_wrapper">
        <button id="closeBtn" @click="closeBtn()" />
        <img loading="lazy" :src="lightbox_pic" alt="pic" />
      </div>
    </div>

    <vfooter />
  </div>
</template>
