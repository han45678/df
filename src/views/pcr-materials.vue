<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, onMounted } from "vue";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";

const lightbox = ref(false);
const lightbox_pic = ref(null);

function open_pic1(data) {
  lightbox.value = true;
  lightbox_pic.value = data;
}

function open_pic2(data) {
  lightbox.value = true;
  lightbox_pic.value = data;
}

const laboratory = ref(0);

const laboratory_info = ref([
  {
    title: "萬能試驗機",
    text: "依據ASTM D638與ASTM D790進行材料之拉伸與抗折測試，可獲得拉伸強度、延伸率、抗折強度、彎曲模數等機械強度資訊，用來評估材料之應用範圍。",
    pic: "p1.jpg",
  },
  {
    title: "衝擊試驗機",
    text: "依據ASTM D638與ASTM D790進行材料之拉伸與抗折測試，可獲得拉伸強度、延伸率、抗折強度、彎曲模數等機械強度資訊，用來評估材料之應用範圍。",
    pic: "p2.jpg",
  },
  {
    title: "水分分析儀",
    text: "依據ASTM D638與ASTM D790進行材料之拉伸與抗折測試，可獲得拉伸強度、延伸率、抗折強度、彎曲模數等機械強度資訊，用來評估材料之應用範圍。",
    pic: "p3.jpg",
  },
  {
    title: "比重天平",
    text: "依據ASTM D638與ASTM D790進行材料之拉伸與抗折測試，可獲得拉伸強度、延伸率、抗折強度、彎曲模數等機械強度資訊，用來評估材料之應用範圍。",
    pic: "p4.jpg",
  },
  {
    title: "熔融指數儀",
    text: "依據ASTM D638與ASTM D790進行材料之拉伸與抗折測試，可獲得拉伸強度、延伸率、抗折強度、彎曲模數等機械強度資訊，用來評估材料之應用範圍。",
    pic: "p5.jpg",
  },
  {
    title: "XRF",
    text: "可進行材料之重金屬種類與含量分析，參考RoHS規範針對各批次再生粒成品進行重金屬的管控。",
    pic: "p6.jpg",
  },
  {
    title: "色差儀",
    text: "可進行材料之L, a, b與色差值量測，除了用來監控回收材料各批次之顏色穩定性，更可作為後端客戶染色時配色的參考依據。",
    pic: "p7.jpg",
  },
  {
    title: "2.5D影像量測儀",
    text: "2.5D顯微投影量測設備，除了可觀察不良成品中雜質的外觀與型態，亦可作為細微尺寸量測的工具。",
    pic: "p8.jpg",
  },
]);

const laboratory_switch = () => {
  if (laboratory.value == laboratory_info.value.length - 1) {
    laboratory.value = 0;
  } else {
    laboratory.value++;
  }
};

const hdpe_info = ref([
  {
    code: "N601",
    name: "淺灰色 Light Grey",
    pic: "hdpe_pic01.png",
    big_pic: "N601.jpg",
  },
  {
    code: "N601H",
    name: "淺灰色 Light Grey",
    pic: "hdpe_pic02.png",
    big_pic: "N601H.jpg",
  },
  {
    code: "N610",
    name: "乳白微黃色 Milky White",
    pic: "hdpe_pic03.png",
    big_pic: "N610.jpg",
  },
  {
    code: "N610H",
    name: "乳白微黃色 Milky White",
    pic: "hdpe_pic04.png",
    big_pic: "N610H.jpg",
  },
  {
    code: "N612H",
    name: "乳白微黃色 Milky White",
    pic: "hdpe_pic05.png",
    big_pic: "N612H.jpg",
  },
  {
    code: "N610HF",
    name: "乳白微黃色 Milky White",
    pic: "hdpe_pic06.png",
    big_pic: "N610HF.jpg",
    isFoodGrade: true,
  },
  {
    pic: "hdpe_big_pic01.jpg",
    big_pic: "hdpe_big_pic01.jpg",
    isBig: true,
  },
]);

const hdpe_info2 = ref([
  {
    code: "P601",
    name: "淡草綠色 Light Green",
    pic: "hdpe_pic07.png",
    big_pic: "P601.jpg",
  },
  {
    code: "P601H",
    name: "淡草綠色 Light Green",
    pic: "hdpe_pic08.png",
    big_pic: "P601H.jpg",
  },
  {
    code: "P611",
    name: "乳白微綠色 WHITE W/ LIGHT GREEN",
    pic: "hdpe_pic09.png",
    big_pic: "P611.jpg",
  },
  {
    code: "P611H",
    name: "乳白微綠色 WHITE W/ LIGHT GREEN",
    pic: "hdpe_pic10.png",
    big_pic: "P611H.jpg",
  },
  {
    pic: "hdpe_big_pic02.jpg",
    big_pic: "P614H.jpg",
    isBig: true,
  },
  {
    code: "P614H",
    name: "乳白微綠色 WHITE W/ LIGHT GREEN",
    pic: "hdpe_pic11.png",
    big_pic: "P611HF.jpg",
  },
  {
    code: "P611HF",
    name: "乳白微綠色 WHITE W/ LIGHT GREEN",
    pic: "hdpe_pic12.png",
    big_pic: "http://placehold.jp/800x800.png",
    isFoodGrade: true,
  },
]);

function slick() {
  $("#cooperate .brand_list").slick({
    autoplay: true,
    autoplaySpeed: 0, // 設定輪播間隔時間（毫秒）
    dots: false, // 顯示小圓點導航
    infinite: true, // 循環輪播
    speed: 5000, // 切換動畫速度（毫秒）
    slidesToShow: 6, // 一次顯示的輪播項目數量
    slidesToScroll: 1, // 一次切換的輪播項目數量
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // arrows: false,
          speed: 600,
          slidesToShow: 2,
        },
      },
    ],
  });

  $("#banner_pic").slick({
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    speed: 1000, // 切換動畫速度（毫秒）
    autoplay: true,
    asNavFor: "#banner_text .text_content",
  });

  $("#banner_pic").on("beforeChange", () => {
    $("#banner_text .text_line").removeClass("line_an_go");
    setTimeout(() => {
      $("#banner_text .text_line").addClass("line_an_go");
    }, 100);
  });

  $("#banner_text .text_content").slick({
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    speed: 1000, // 切換動畫速度（毫秒）
    autoplay: true,
    asNavFor: "#banner_pic",
  });
}

onMounted(() => {
  slick();
  setTimeout(() => {
    if ($(".slick_an")) {
      $(".slick_an").addClass("slick_an_go");
    }
  }, 300);
});
</script>
<template>
  <div>
    <vheader :logo_color="true" />

    <main id="company_serve" class="pcr">
      <div id="banner" class="big">
        <div id="banner_text">
          <div class="text">
            <div class="text_line" />
            <div class="text_content slick_an">
              <div class="item">
                <h3>實現客戶<br />永續發展目標</h3>
                <p>
                  Supporting customers to meet their product sustainability
                  objectives
                </p>
              </div>
              <div class="item">
                <h3>實現客戶<br />永續發展目標</h3>
                <p>
                  Supporting customers to meet their product sustainability
                  objectives
                </p>
              </div>
              <div class="item">
                <h3>實現客戶<br />永續發展目標</h3>
                <p>
                  Supporting customers to meet their product sustainability
                  objectives
                </p>
              </div>
            </div>
            <div class="link">
              <a href="https://www.youtube.com/@DaFon2001"
                ><img
                  loading="lazy"
                  src="@/assets/images/icon/play_icon.svg"
                  alt="icon"
              /></a>
              <a href="https://www.facebook.com/TaiwanDafon/"
                ><img
                  loading="lazy"
                  src="@/assets/images/icon/fb_icon.svg"
                  alt="icon"
              /></a>
            </div>
          </div>
        </div>
        <div id="banner_pic">
          <img
            src="@/assets/images/company_serve/pcr/banner01.jpg"
            alt="banner"
          />
          <img
            src="@/assets/images/company_serve/pcr/banner02.jpg"
            alt="banner"
          />
          <img
            src="@/assets/images/company_serve/pcr/banner03.jpg"
            alt="banner"
          />
        </div>
      </div>
      <div id="banner_title">
        <h2 class="an fd">再生塑料</h2>
        <h3 class="an fd">
          <span>
            <router-link class="color" to="/">大豐環保</router-link>
          </span>
          / 企業服務
        </h3>
      </div>
      <div id="introduce">
        <div id="introduce_content">
          <div class="pic an fu">
            <img
              class=""
              src="@/assets/images/company_serve/pcr/pic01.jpg"
              alt="pic"
            />
          </div>
          <div class="text">
            <h3>PCR再生料品牌</h3>
            <p>
              大豐環保於2005年成立第一座塑膠容器再生處理廠，多年來在再生處理技術上不斷的升級，結合配方技術與加工經驗，如今已成為國內溯源認證最完備、品質最穩定、附加價值最高的PCR再生料品牌。
            </p>
            <p>
              除此之外企業亦十分重視全球暖化、淨零碳排等環保議題，除了持續優化製程減少能資源的消耗外，更將處理過程中產生的雜料餘料再製成物流載具，藉此實現零廢棄、全循環的目標。
            </p>
            <p class="an fr">
              <a href="javascript:void(0)">
                <img
                  src="@/assets/images/company_serve/pcr/introduce_link_icon.svg"
                  alt="pic"
                />
                <span>溯源認證最完備 + 品質最穩定 + 附加價值最高</span>
              </a>
            </p>
          </div>
          <div class="cycle an fu">
            <img
              loading="lazy"
              src="@/assets/images/company_serve/pcr/pic02.png"
              alt="pic"
            />
          </div>
        </div>
      </div>

      <div id="advantage_item" class="pcr">
        <div id="advantage_content">
          <div class="item an fu">
            <div class="no">01</div>
            <div class="icon">
              <div
                class="lazy_img_pic lazy_img"
                :data-src="require(`@/assets/images/icon/enterprise_12.svg`)"
              />
              <!-- <img
                  class="lazy_img"
                  :data-src="require(`@/assets/images/icon/enterprise_12.svg`)"
                  :src="require(`@/assets/images/icon/enterprise_12.svg`)"
                  alt="icon"
                /> -->
            </div>
            <div class="text">
              <h4>完整溯源認證</h4>
              <p class="color_main">
                藍天使材料供應商EuCertplast認證(國內唯一)
                <span>GRS再生料溯源認證</span>
                <span>TUV PCR再生料溯源認證</span>
                <span>PIDC PRM再生料溯源認證</span>
              </p>
            </div>
          </div>
          <div class="item an fu">
            <div class="no">02</div>
            <div class="icon">
              <div
                class="lazy_img_pic lazy_img"
                :data-src="require(`@/assets/images/icon/enterprise_9.svg`)"
              />
              <!-- <img
                  class="lazy_img"
                  :data-src="require(`@/assets/images/icon/enterprise_9.svg`)"
                  :src="require(`@/assets/images/icon/enterprise_9.svg`)"
                  alt="icon"
                /> -->
            </div>
            <div class="text">
              <h4>低碳排</h4>
              <p>
                <span>通過TUV-ISO 14067​碳足跡認證</span>
                <span>相較新料可減少65~75%之碳排放</span>
                <span>持續優化製程，以每兩年減少5%碳排放為目標</span>
              </p>
            </div>
          </div>
          <div class="item an fu">
            <div class="no">03</div>
            <div class="icon">
              <div
                class="lazy_img_pic lazy_img"
                :data-src="require(`@/assets/images/icon/enterprise_10.svg`)"
              />
              <!-- <img
                  class="lazy_img"
                  :data-src="require(`@/assets/images/icon/enterprise_10.svg`)"
                  :src="require(`@/assets/images/icon/enterprise_10.svg`)"
                  alt="icon"
                /> -->
            </div>
            <div class="text">
              <h4 class="color_main">高品質</h4>
              <p>
                <span>物性穩定</span>
                <span>顏色均勻</span>
                <span>低異味</span>
                <span>低雜質</span>
              </p>
            </div>
          </div>
          <div class="item an fu">
            <div class="no">04</div>
            <div class="icon">
              <div
                class="lazy_img_pic lazy_img"
                :data-src="require(`@/assets/images/icon/enterprise_11.svg`)"
              />
              <!-- <img
                  class="lazy_img"
                  :data-src="require(`@/assets/images/icon/enterprise_11.svg`)"
                  :src="require(`@/assets/images/icon/enterprise_11.svg`)"
                  alt="icon"
                /> -->
            </div>
            <div class="text">
              <h4>安全無虞</h4>
              <p>
                r-HDPE/r-PP 取得FDA NOL(國內首家)
                <span>符合FDA食品容器檢測法規</span>
                <span>符合REACH SVHC檢測法規</span>
                <span>符合RoHs檢測法規</span>
                <span>符合PAHs檢測法規</span>
                <span>符合VOCs檢測法規</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="territory">
        <h3>TERRITORY</h3>
        <div class="map">
          <img
            loading="lazy"
            class="m"
            src="@/assets/images/company_serve/pcr/map_m.jpg"
            alt="map"
          />
          <img
            loading="lazy"
            class="pc"
            src="@/assets/images/company_serve/pcr/map.jpg"
            alt="map"
          />
        </div>
        <!-- <div class="vidoe">
          <div class="vidoe_content">
            <iframe
              src="https://www.youtube.com/embed/RLm-THlAjac?si=FTdUzMqSx80Lf5G9"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div> -->
      </div>

      <div id="pcr_process_text">
        <div class="wrapper">
          <div class="text">
            <h3>專業再生處理流程</h3>
            <p>
              消費者購買的塑膠容器產品，在使用完畢後會依循回收系統被收集、分選，再經由專業的再生處理流程，廢塑膠容器即可被再製成再生塑膠粒，並製作為各類的環保商品回到消費者的手中，100%展現塑膠再生POST
              CONSUMER RECYCLED的循環經濟。
            </p>
          </div>
          <!-- <div class="pic">
            <img
              src="@/assets/images/company_serve/pcr/pcr_process.svg"
              alt="pic"
            />
          </div> -->
          <div class="vidoe">
            <div class="vidoe_content">
              <iframe
                src="https://www.youtube.com/embed/RLm-THlAjac?si=FTdUzMqSx80Lf5G9"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div id="pcr_process_pc">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xml:space="preserve"
          viewBox="0, 0, 1920, 1052"
          preserveAspectRatio="xMinYMin meet"
          style="width: 100%; height: 100%"
        >
          <defs>
            <path
              id="center-infinite-line"
              fill="none"
              d="M980.998 542.366 c62.981 88.994 146.729 192.023 269.039 192.023 122.308 0 225.224 -99.151 225.224 -221.46 0 -122.309 -102.916 -221.46 -225.224 -221.46 -122.31 0 -206.705 106.268 -288.208 224.198 -60.438 87.452 -123.269 166.44 -202.276 200.704 l -15.562 6.086 c -22.098 7.71 -45.46 11.932 -70.366 11.932 -88.98 0 -166.972 -52.476 -202.87 -128.17 l -6.213 -14.413 c -9.534 -24.503 -14.774 -51.092 -14.774 -78.877 0 -56.997 22.052 -108.965 57.982 -148.213 l 10.107 -10.355 c 40.498 -38.916 95.622 -62.893 155.768 -62.893 61.977 0 111.24 25.05 154.38 62.32 l 10.593 9.503 c 37.561 34.92 70.696 78.691 104.064 122.255"
            ></path>
            <path
              id="path-arrow"
              fill="#004974"
              d="m -5.2033844,-8.4256446 -0.7548523,17.208 L 10.041763,1.5367933 0.07954414,0.02747121 Z"
            ></path>
            <mask id="full-mask-1">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="0"
                  data-dasharray-index="4"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
            <mask id="full-mask-2">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="1"
                  data-dasharray-index="8"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
            <mask id="full-mask-3">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="2"
                  data-dasharray-index="12"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
            <mask id="full-mask-4">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="3"
                  data-dasharray-index="16"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
            <mask id="full-mask-5">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="4"
                  data-dasharray-index="20"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
            <mask id="full-mask-6">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="5"
                  data-dasharray-index="24"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
            <mask id="full-mask-7">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="6"
                  data-dasharray-index="28"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
            <mask id="full-mask-8">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="7"
                  data-dasharray-index="32"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
            <mask id="full-mask-9">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="8"
                  data-dasharray-index="36"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
            <mask id="full-mask-10">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="9"
                  data-dasharray-index="40"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
            <mask id="full-mask-11">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="10"
                  data-dasharray-index="44"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
            <mask id="full-mask-12">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="11"
                  data-dasharray-index="48"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
            <mask id="full-mask-13">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="12"
                  data-dasharray-index="51"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
            <mask id="full-mask-14">
              <rect x="0" y="0" width="1920" height="1052" fill="#FFF">
                <animate
                  data-mask-index="13"
                  data-dasharray-index="55"
                  attributeName="fill"
                  data-values="#FFF;#555;#BBB;#FFF"
                  values="#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#555;#BBB;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF;#FFF"
                  dur="30s"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </rect>
            </mask>
          </defs>
          <g id="circles-and-bg">
            <g id="bg">
              <rect
                x="0"
                y="0"
                width="960"
                height="1052"
                fill="RGB(78,180,125)"
                opacity="0.05"
              ></rect>
              <rect
                x="960"
                y="0"
                width="960"
                height="1052"
                fill="rgb(0,73,116)"
                opacity="0.1"
              ></rect>
              <text
                fill="white"
                font-family="Roboto, sans-serif"
                font-size="64"
                x="960"
                y="1052"
                font-weight="300"
              >
                <tspan dx="-6">POST CONSUMER RECYCLED</tspan>
              </text>
            </g>
            <g id="inner-circle-left">
              <circle cx="671.5" cy="512.5" r="191.5" fill="white"></circle>
              <text y="512.5" x="542.635">
                <tspan
                  font-size="34"
                  font-weight="500"
                  font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                >
                  消費後再生
                </tspan>
                <tspan
                  dy="34"
                  font-family="Roboto, sans-serif"
                  font-weight="400"
                  font-size="18"
                  dx="-210.945"
                >
                  POST-CONSUMER RECYCLED
                </tspan>
              </text>
            </g>
            <g id="inner-circle-right">
              <circle cx="1252.5" cy="511.5" r="191.5" fill="#004974"></circle>
              <text y="512.5" x="1145.795" fill="white">
                <tspan
                  font-size="34"
                  font-weight="500"
                  font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                >
                  再生程序
                </tspan>
                <tspan
                  dy="34"
                  font-family="Roboto, sans-serif"
                  font-size="18"
                  font-weight="400"
                  dx="-173.39"
                >
                  REGENERATION PROCESS
                </tspan>
              </text>
            </g>
          </g>
          <g id="arrows">
            <g>
              <use
                href="#center-infinite-line"
                stroke="white"
                stroke-width="4"
                transform="translate(1.5, 1.5)"
              ></use>
              <use
                href="#center-infinite-line"
                stroke="rgba(0, 73, 116, .1)"
                stroke-width="3"
              ></use>
            </g>
            <g id="sub-lines">
              <use
                stroke="#004974"
                fill="none"
                stroke-width="3"
                href="#center-infinite-line"
                stroke-dasharray="0 2501.8201451 0 0 "
              >
                <animate
                  dur="30s"
                  repeatCount="indefinite"
                  attributeName="stroke-dasharray"
                  values="0 2439.938393075 61.881752025 344.9711146656249;
0 2378.05664105 123.76350405 344.9711146656249;
0 2316.174889025 185.645256075 344.9711146656249;
0 2254.293137 247.5270081 344.9711146656249;
0 2197.06183965 304.75830455 344.9711146656249;
0 2139.8305431 361.9896011 344.9711146656249;
0 2082.59924655 419.22089765 344.9711146656249;
0 2025.36795 476.4521942 344.9711146656249;
0 1951.779784825 550.0403594750001 344.9711146656249;
0 1878.1916195499998 623.62852475 344.9711146656249;
0 1804.6034542749999 697.2166900249999 344.9711146656249;
0 1731.015289 770.8048553 344.9711146656249;
0 1682.2208781 819.5992661 344.9711146656249;
0 1633.4264673999999 868.3936768 344.9711146656249;
0 1584.6320567 917.1880875 344.9711146656249;
0 1535.837646 965.9824982 344.9711146656249;
0 1434.545959 1067.274185 344.9711146656249;
0 1333.2542720000001 1168.565872 344.9711146656249;
0 1231.962585 1269.857559 344.9711146656249;
0 1130.670898 1371.149246 344.9711146656249;
0 1086.23577115 1415.58437325 344.9711146656249;
0 1041.8006439 1460.0195004999998 344.9711146656249;
0 997.36551665 1504.4546277499999 344.9711146656249;
0 952.9303894 1548.889755 344.9711146656249;
0 916.46892165 1585.35122275 344.9711146656249;
0 880.0074539 1621.8126905 344.9711146656249;
0 843.54598615 1658.2741582499998 344.9711146656249;
0 807.0845184 1694.735626 344.9711146656249;
0 778.9798412 1722.8403034 344.9711146656249;
0 750.875164 1750.9449806 344.9711146656249;
0 722.7704868 1779.0496578 344.9711146656249;
0 694.6658096 1807.154335 344.9711146656249;
0 661.891937225 1839.928207875 344.9711146656249;
0 629.11806485 1872.70208025 344.9711146656249;
0 596.344192475 1905.475952625 344.9711146656249;
0 563.5703201 1938.249825 344.9711146656249;
0 533.953710525 1967.8664342749998 344.9711146656249;
0 504.33710095000004 1997.4830438499998 344.9711146656249;
0 474.720491375 2027.0996534249998 344.9711146656249;
0 445.1038818 2056.716263 344.9711146656249;
0 399.46575925 2102.35438535 344.9711146656249;
0 353.82763669999997 2147.9925079 344.9711146656249;
0 308.18951415 2193.63063045 344.9711146656249;
0 262.5513916 2239.268753 344.9711146656249;
0 196.9135437 2304.9066013 344.9711146656249;
0 131.2756958 2370.5444492 344.9711146656249;
0 65.6378479 2436.1822971 344.9711146656249;
0 0 2501.820145 344.9711146656249;
0  0 2501.820145 311.8913849489582 ;
0  0 2501.820145 278.81165523229157 ;
0  0 2501.820145 245.73192551562488 ;
0  0 2501.820145 245.2851913989582 ;
0  0 2501.820145 145.59926813229154 ;
0  0 2501.820145 45.91334486562488 ;
0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 ;0  0 2501.820145 0 "
                  fill="freeze"
                ></animate>
              </use>
              <use
                href="#path-arrow"
                transform="translate(473.22985, 414.58735) rotate(0)"
                opacity="0"
                data-index="0"
                data-length-data='{"len":247.5270081,"prelength":2254.293137,"full":247.5270081,"x":473.22985,"y":414.58735,"rotate":0}'
              >
                <animate
                  attributeName="opacity"
                  dur="30s"
                  values="0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                  data-index="0"
                ></animate>
              </use>
              <use
                href="#path-arrow"
                transform="translate(485.66727, 632.75775) rotate(-60)"
                opacity="0"
                data-index="1"
                data-length-data='{"len":228.9251862,"prelength":2025.36795,"full":476.4521942,"x":485.66727,"y":632.75775,"rotate":-60}'
              >
                <animate
                  attributeName="opacity"
                  dur="30s"
                  values="0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                  data-index="1"
                ></animate>
              </use>
              <use
                href="#path-arrow"
                transform="translate(743.991, 722.457) rotate(-150)"
                opacity="0"
                data-index="2"
                data-length-data='{"len":294.3526611,"prelength":1731.015289,"full":770.8048553,"x":743.991,"y":722.457,"rotate":-150}'
              >
                <animate
                  attributeName="opacity"
                  dur="30s"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                  data-index="2"
                ></animate>
              </use>
              <use
                href="#path-arrow"
                transform="translate(895.8481, 604.0924) rotate(-180)"
                opacity="0"
                data-index="3"
                data-length-data='{"
                len":195.1776428,"prelength":1535.837646,"full":965.9824982,"x":895.8481,"y":604.0924,"rotate":-180'
              >
                <animate
                  attributeName="opacity"
                  dur="30s"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                  data-index="3"
                ></animate>
              </use>
              <use
                href="#path-arrow"
                transform="translate(1166.9114, 309.01301) rotate(210)"
                opacity="0"
                data-index="4"
                data-length-data='{"
                len":405.166748,"prelength":1130.670898,"full":1371.149246,"x":1166.9114,"y":309.01301,"rotate":210'
              >
                <animate
                  attributeName="opacity"
                  dur="30s"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                  data-index="4"
                ></animate>
              </use>
              <use
                href="#path-arrow"
                transform="translate(1339.6538, 310.07488) rotate(-100)"
                opacity="0"
                data-index="5"
                data-length-data='{"
                len":177.740509,"prelength":952.9303894,"full":1548.889755,"x":1339.6538,"y":310.07488,"rotate":-100'
              >
                <animate
                  attributeName="opacity"
                  dur="30s"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                  data-index="5"
                ></animate>
              </use>
              <use
                href="#path-arrow"
                transform="translate(1446.6199, 405.53125) rotate(-60)"
                opacity="0"
                data-index="6"
                data-length-data='{"
                len":145.845871,"prelength":807.0845184,"full":1694.735626,"x":1446.6199,"y":405.53125,"rotate":-60'
              >
                <animate
                  attributeName="opacity"
                  dur="30s"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                  data-index="6"
                ></animate>
              </use>
              <use
                href="#path-arrow"
                transform="translate(1475.261, 512.929) rotate(-35)"
                opacity="0"
                data-index="7"
                data-length-data='{"
                len":112.4187088,"prelength":694.6658096,"full":1807.154335,"x":1475.261,"y":512.929,"rotate":-35'
              >
                <animate
                  attributeName="opacity"
                  dur="30s"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                  data-index="7"
                ></animate>
              </use>
              <use
                href="#path-arrow"
                transform="translate(1436.6764, 636.12996) rotate(0)"
                opacity="0"
                data-index="8"
                data-length-data='{"
                len":131.0954895,"prelength":563.5703201,"full":1938.249825,"x":1436.6764,"y":636.12996,"rotate":0'
              >
                <animate
                  attributeName="opacity"
                  dur="30s"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                  data-index="8"
                ></animate>
              </use>
              <use
                href="#path-arrow"
                transform="translate(1347.5707, 712.17061) rotate(30)"
                opacity="0"
                data-index="9"
                data-length-data='{"
                len":118.4664383,"prelength":445.1038818,"full":2056.716263,"x":1347.5707,"y":712.17061,"rotate":30'
              >
                <animate
                  attributeName="opacity"
                  dur="30s"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                  data-index="9"
                ></animate>
              </use>
              <use
                href="#path-arrow"
                transform="translate(1170.326, 718.98209) rotate(80)"
                opacity="0"
                data-index="10"
                data-length-data='{"
                len":182.5524902,"prelength":262.5513916,"full":2239.268753,"x":1170.326,"y":718.98209,"rotate":80'
              >
                <animate
                  attributeName="opacity"
                  dur="30s"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                  data-index="10"
                ></animate>
              </use>
              <use
                href="#path-arrow"
                transform="translate(880.96266, 407.83648) rotate(100)"
                opacity="0"
                data-index="12"
                data-length-data='{"
                len":99.23918915,"prelength":2747.877914,"x":880.96266,"y":407.83648,"rotate":100'
              >
                <animate
                  attributeName="opacity"
                  dur="30s"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                  data-index="12"
                ></animate>
              </use>
              <use
                href="#path-arrow"
                transform="translate(673.625, 291.468) rotate(55)"
                opacity="0"
                data-index="13"
                data-length-data='{" len":299.0577698,"prelength":2501.820145,"x":673.625,"y":291.468,"rotate":55'
              >
                <animate
                  attributeName="opacity"
                  dur="30s"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  begin="0s"
                  repeatCount="indefinite"
                  fill="freeze"
                  data-index="13"
                ></animate>
              </use>
            </g>
          </g>
          <g mask="url(#full-mask-1)">
            <svg y="160" x="436">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                viewBox="0 0 93 93"
                width="98"
                height="98"
              >
                <g transform="translate(-32.699 -5.85)">
                  <g
                    fill="none"
                    stroke="black"
                    stroke-width="2.85"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <line x1="61.26" y1="65.5" x2="61.26" y2="89.37"></line>
                    <path
                      d="M52.62,49.25
 c0,12.02,0.13,24.04-0.08,36.06c-0.07,3.94,3.35,4.94,5.16,5.14c3.03,0.34,12.19,0,12.19,0V45.69c4.05,0,7.61,0,11.17,0
 c6.56-0.01,8.47-1.72,9.74-9.14c-11.26,0-22.46-0.45-33.6,0.17c-6.51,0.36-10.81,5.6-11.61,12.53c-0.42,3.88-0.42,7.79,0.01,11.66
 c0.37,3.46,2.14,6.32,6,7.12"
                    ></path>
                  </g>
                  <path
                    fill="white"
                    stroke="black"
                    stroke-width="2.85"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M69.48,23.41
 c0.1,4.54-3.5,8.3-8.04,8.39c-4.54,0.1-8.3-3.5-8.39-8.04c0-0.12,0-0.24,0-0.35c-0.1-4.54,3.5-8.3,8.04-8.39
 c4.54-0.1,8.3,3.5,8.39,8.04C69.49,23.18,69.49,23.3,69.48,23.41z"
                  ></path>
                  <path
                    fill="none"
                    stroke="#099660"
                    stroke-width="1.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M104.59,55.44
 c-0.14-1.25-1.15-2.24-2.41-2.34"
                  ></path>
                  <path
                    fill="none"
                    stroke="#099660"
                    stroke-width="1.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M102.63,71.22
 c0.7-0.36,1.44-0.62,2.21-0.76c1.39-0.11,2.51-1.17,2.7-2.55c0.45-2.04,1.51-3.36,3.78-3.45c0.55,0.01,1.06-0.27,1.34-0.74"
                  ></path>
                  <path
                    fill="none"
                    stroke="#099660"
                    stroke-width="1.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M113.22,77.27l-0.88-0.02
 c-0.21-1.58-0.86-2.04-2.51-1.92c-2.22,0.25-4.43-0.58-5.93-2.24c-1.52-1.64-3.07-3.26-4.64-4.85c-0.56-0.47-0.89-1.15-0.91-1.88"
                  ></path>
                  <path
                    fill="none"
                    stroke="#099660"
                    stroke-width="1.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M95.95,63.85
 c2.73-2.6,5.49-5.17,8.15-7.84c0.31-0.37,0.83-0.48,1.26-0.27c0.99,0.24,1.61,1.23,1.37,2.22c-0.1,0.41-0.33,0.77-0.65,1.03
 l-6.75,6.43c-1.3,1.24-2.34,1.05-3.15-0.6c-0.14-0.29-0.22-0.59-0.34-0.89"
                  ></path>
                  <path
                    fill="none"
                    stroke="#099660"
                    stroke-width="1.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M93.77,61.08
 c2.64-2.52,5.06-4.77,7.7-7.29c0.86-0.83,0.89-1.38,0.05-2.28c-1.3-1.39-2.63-2.76-3.94-4.14c-0.37-0.54-1.12-0.68-1.66-0.31
 c-0.11,0.07-0.2,0.16-0.28,0.27c-2.51,2.41-5.03,4.81-7.55,7.21c-0.54,0.37-0.68,1.11-0.31,1.66c0.07,0.11,0.16,0.2,0.27,0.28
 c1.32,1.37,2.64,2.74,3.94,4.15c0.26,0.29,0.6,0.49,0.97,0.6c0.35,0.1,0.61,0.19,0.68,0.57c0.22,1.07,1.07,1.9,2.15,2.07"
                  ></path>
                  <path
                    fill="none"
                    stroke="#099660"
                    stroke-width="1.9"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M106.99,58.14
 c0.73,0.04,1.4,0.41,1.83,1.01c1.23,1.57,2.57,3.04,4.02,4.4c2.08,1.69,3.01,4.41,2.41,7.01c-0.19,1.12,0.55,1.81,1.96,2.07
 c0.06,0.48-0.14,0.96-0.52,1.26c-1.19,1-2.34,2.07-3.42,3.19c0.36,0.66,0.85,1.25,1.44,1.72c0.35,0.46,1,0.54,1.45,0.19
 c0.08-0.06,0.15-0.14,0.22-0.22c0.65-0.7,1.38-1.32,2.06-1.98c0.8-0.78,0.82-1.13,0.04-1.92c-0.41-0.41-0.7-0.96-1.28-1.18"
                  ></path>
                  <circle
                    opacity="0.2"
                    fill="#4EB47D"
                    cx="90.64"
                    cy="46.4"
                    r="17.1"
                  ></circle>
                </g>
              </svg>
            </svg>
            <text
              font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
              font-size="18"
              fill="#099660"
              y="280"
              x="418"
            >
              <tspan>消費後</tspan>
              <tspan dy="21" dx="-81">廢塑膠瓶容器</tspan>
            </text>
          </g>
          <svg y="462" x="295" mask="url(#full-mask-2)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              viewBox="0 0 93 93"
              width="115"
              height="115"
            >
              <path
                fill="none"
                stroke="black"
                stroke-width="2.43"
                stroke-miterlimit="10"
                d="M51.27,76.88H10.3V43.48l40.97-10.81
 V76.88z"
              ></path>
              <rect
                x="9.57"
                y="22.83"
                fill="none"
                width="82.31"
                height="68.24"
              ></rect>
              <path
                fill="white"
                d="M41.77,76.88h40.97V34.65L41.77,23.78
 V76.88z"
              ></path>
              <path
                fill="none"
                stroke="black"
                stroke-width="2.43"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                d="M41.77,76.88h40.97V34.65L41.77,23.78
 V76.88z"
              ></path>
              <rect
                x="9.57"
                y="22.83"
                fill="none"
                width="82.31"
                height="68.24"
              ></rect>
              <rect x="16.53" y="50.02" width="8.1" height="8.1"></rect>
              <rect x="16.53" y="61.57" width="8.1" height="8.1"></rect>
              <rect x="27.6" y="61.57" width="8.1" height="8.1"></rect>
              <rect x="27.6" y="50.02" width="8.1" height="8.1"></rect>
              <path
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                d="M62.01,44.38c-7.49,0-13.57,6.07-13.57,13.57s6.07,13.57,13.57,13.57c7.49,0,13.57-6.07,13.57-13.57
 C75.58,50.46,69.5,44.39,62.01,44.38"
              ></path>
              <rect
                x="9.57"
                y="22.83"
                fill="none"
                width="82.31"
                height="68.24"
              ></rect>
              <g>
                <path
                  fill="#099660"
                  stroke-width="0"
                  d="M54.52,53.88h3.42c0.77,0,1.36,0.06,1.77,0.18c0.54,0.16,1.01,0.44,1.4,0.85s0.68,0.91,0.89,1.5
 s0.3,1.32,0.3,2.19c0,0.76-0.09,1.42-0.28,1.97c-0.23,0.68-0.56,1.22-0.99,1.64c-0.32,0.32-0.76,0.56-1.32,0.74
 c-0.41,0.13-0.97,0.2-1.66,0.2h-3.52V53.88z M56.4,55.44v6.14h1.4c0.52,0,0.9-0.03,1.13-0.09c0.3-0.08,0.56-0.2,0.76-0.39
 c0.2-0.18,0.36-0.48,0.49-0.9c0.13-0.42,0.19-0.98,0.19-1.7c0-0.72-0.06-1.27-0.19-1.65c-0.13-0.38-0.3-0.68-0.53-0.9
 c-0.23-0.21-0.52-0.36-0.87-0.44c-0.26-0.06-0.77-0.09-1.54-0.09H56.4z"
                ></path>
                <path
                  fill="#099660"
                  stroke-width="0"
                  d="M63.9,63.15v-9.28h6.36v1.57h-4.49v2.2h3.87v1.57h-3.87v3.94H63.9z"
                ></path>
              </g>
              <circle
                opacity="0.2"
                fill="#4EB47D"
                cx="42.02"
                cy="27.94"
                r="14.58"
              ></circle>
            </svg>
            <text
              font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
              font-size="18"
              fill="#099660"
              y="125"
              x="12.5"
            >
              資源回收站
            </text></svg
          ><svg x="421" y="739" mask="url(#full-mask-3)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 93 93"
              xml:space="preserve"
              x="44"
              width="103"
              height="88"
            >
              <rect x="13.67" y="32.74" width="17.24" height="17.24"></rect>
              <rect x="34.2" y="32.74" width="17.24" height="17.24"></rect>
              <path
                fill="#099660"
                d="M70.56,31.85l2.57,13.16l-13.16,2.57
 L57.4,34.42L70.56,31.85z M72.08,29.61l-16.92,3.3l3.3,16.92l16.92-3.3L72.08,29.61z"
              ></path>
              <rect x="13.67" y="54.76" width="17.24" height="17.24"></rect>
              <rect x="34.2" y="54.76" width="17.24" height="17.24"></rect>
              <path
                fill="#099660"
                d="M70.05,70.08h-13.4v-13.4h13.4V70.08z
 M71.96,54.76H54.73V72h17.24L71.96,54.76z"
              ></path>
              <rect
                x="6.91"
                y="78.89"
                fill="white"
                stroke="black"
                stroke-width="2.43"
                stroke-miterlimit="10"
                width="72.58"
                height="4.32"
              ></rect>
              <g
                fill="none"
                stroke="black"
                stroke-width="1.539"
                stroke-miterlimit="10"
              >
                <line x1="29.83" y1="79.13" x2="29.83" y2="82.97"></line>
                <line x1="56.31" y1="79.13" x2="56.31" y2="82.97"></line>
              </g>
              <g>
                <path d="M10.64,11.79h1.47l2.61,10.79h-1.5L10.64,11.79z"></path>
                <path
                  d="M19.82,22.41V11.97h3.38c1.28,0,2.12,0.05,2.51,0.16c0.6,0.16,1.1,0.5,1.5,1.02c0.4,0.52,0.61,1.2,0.61,2.03
 c0,0.64-0.12,1.18-0.35,1.62s-0.53,0.78-0.89,1.03c-0.36,0.25-0.72,0.41-1.09,0.49c-0.5,0.1-1.23,0.15-2.19,0.15h-1.37v3.94H19.82z
 M21.93,13.73v2.96h1.15c0.83,0,1.39-0.05,1.67-0.16c0.28-0.11,0.5-0.28,0.66-0.51c0.16-0.23,0.24-0.5,0.24-0.81
 c0-0.38-0.11-0.69-0.33-0.94c-0.22-0.25-0.51-0.4-0.85-0.46c-0.25-0.05-0.76-0.07-1.52-0.07H21.93z"
                ></path>
              </g>
              <path
                d="M29.54,22.41V11.97h7.74v1.77h-5.63v2.31h5.24v1.76h-5.24v2.84h5.83v1.76H29.54z"
              ></path>
              <path
                d="M43.32,22.41V11.97h3.38c1.28,0,2.12,0.05,2.51,0.16c0.6,0.16,1.1,0.5,1.5,1.02c0.4,0.52,0.61,1.2,0.61,2.03
 c0,0.64-0.12,1.18-0.35,1.62s-0.53,0.78-0.89,1.03c-0.36,0.25-0.72,0.41-1.09,0.49c-0.5,0.1-1.23,0.15-2.19,0.15h-1.37v3.94H43.32z
 M45.43,13.73v2.96h1.15c0.83,0,1.39-0.05,1.67-0.16c0.28-0.11,0.5-0.28,0.66-0.51c0.16-0.23,0.24-0.5,0.24-0.81
 c0-0.38-0.11-0.69-0.33-0.94c-0.22-0.25-0.51-0.4-0.85-0.46c-0.25-0.05-0.76-0.07-1.52-0.07H45.43z"
              ></path>
              <path
                d="M53.04,22.41V11.97h3.38c1.28,0,2.12,0.05,2.51,0.16c0.6,0.16,1.1,0.5,1.5,1.02c0.4,0.52,0.61,1.2,0.61,2.03
 c0,0.64-0.12,1.18-0.35,1.62s-0.53,0.78-0.89,1.03c-0.36,0.25-0.72,0.41-1.09,0.49c-0.5,0.1-1.23,0.15-2.19,0.15h-1.37v3.94H53.04z
 M55.15,13.73v2.96h1.15c0.83,0,1.39-0.05,1.67-0.16c0.28-0.11,0.5-0.28,0.66-0.51c0.16-0.23,0.24-0.5,0.24-0.81
 c0-0.38-0.11-0.69-0.33-0.94c-0.22-0.25-0.51-0.4-0.85-0.46c-0.25-0.05-0.76-0.07-1.52-0.07H55.15z"
              ></path>
              <path d="M65.47,22.58l2.58-10.79h1.5l-2.61,10.79H65.47z"></path>
              <circle
                opacity="0.2"
                fill="#4EB47D"
                cx="75.93"
                cy="53.54"
                r="14.58"
              ></circle>
            </svg>
            <text
              font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
              font-size="18"
              fill="#099660"
              y="115"
            >
              <tspan>分選廠</tspan>
              <tspan dy="21" dx="-117">(材質分選、瓶磚打包)</tspan>
            </text></svg
          ><svg x="791" y="737" mask="url(#full-mask-4)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              viewBox="0 0 93 93"
              x="0"
              width="105"
              height="110"
            >
              <path
                fill="white"
                d="M82.85,39.65
 c-4.79-6.54-17.55-11.04-32.8-11.04s-28.01,4.51-32.8,11.04c2.21-11.62,16.08-20.61,32.8-20.61S80.64,28.02,82.85,39.65"
              ></path>
              <path
                stroke="black"
                stroke-width="0.9"
                d="M50.05,19.01
 c14.66,0,27.07,7.02,30.97,16.59c-6.12-5.29-17.62-8.75-30.97-8.75s-24.85,3.46-30.97,8.75C22.99,26.02,35.39,19.01,50.05,19.01
 M50.05,17.29c-18.76,0-33.97,11.07-33.97,24.73c0,0.51,0.03,1.01,0.07,1.51c1.07-8.34,15.84-14.96,33.9-14.96
 s32.83,6.61,33.9,14.96c0.04-0.5,0.07-1,0.07-1.51C84.02,28.36,68.81,17.29,50.05,17.29"
              ></path>
              <path
                fill="white"
                d="M78.92,42.36
 c-0.16,1.88-0.6,3.72-1.31,5.47c0.88-1.34,1.36-2.9,1.38-4.5C78.99,43.01,78.97,42.68,78.92,42.36"
              ></path>
              <path
                stroke="black"
                stroke-width="0.9"
                d="M50.05,28.49
 c15.86,0,29.58,5.37,31.92,12.5l0.33,1v29.84h-64.5V41.99l0.33-1C20.47,33.87,34.19,28.49,50.05,28.49 M50.05,26.76
 c-16.96,0-31.01,5.93-33.56,13.69h-0.41v33.11h67.94V40.45h-0.41C81.07,32.69,67.01,26.76,50.05,26.76"
              ></path>
              <rect x="24.64" y="58.95" width="12.9" height="13.82"></rect>
              <rect
                x="63.47"
                y="59.86"
                fill="white"
                width="11.09"
                height="12.01"
              ></rect>
              <rect
                x="46.37"
                y="59.86"
                fill="white"
                width="11.09"
                height="12.01"
              ></rect>
              <path
                d="M73.65,71.64h-9.28V60.87h9.28V71.64z M75.46,58.95
 h-12.9v14.61h12.9V58.95z"
              ></path>
              <path
                d="M55.65,71.64h-9.28V60.87h9.28V71.64z M57.46,58.95
 h-12.9v14.61h12.9V58.95z"
              ></path>
              <path
                fill="#099660"
                d="M61.15,44.92
 c0,6.13-4.96,11.1-11.09,11.1c-6.13,0-11.1-4.96-11.1-11.09s4.96-11.1,11.09-11.1c0,0,0,0,0,0C56.18,33.83,61.15,38.8,61.15,44.92"
              ></path>
              <path
                fill="white"
                d="M42.71,40.82h3.13
 c0.54-0.02,1.08,0.03,1.61,0.16c0.49,0.13,0.93,0.4,1.28,0.76c0.36,0.38,0.64,0.83,0.81,1.33c0.2,0.63,0.29,1.28,0.28,1.94
 c0.01,0.59-0.08,1.18-0.26,1.75c-0.18,0.55-0.49,1.05-0.91,1.45c-0.35,0.31-0.76,0.53-1.2,0.65c-0.49,0.13-1,0.19-1.51,0.17h-3.22
 V40.82z M44.42,42.21v5.43h1.28c0.35,0.01,0.69-0.01,1.03-0.08c0.25-0.06,0.49-0.17,0.69-0.34c0.22-0.22,0.37-0.49,0.45-0.79
 c0.13-0.49,0.19-1,0.17-1.5c0.02-0.49-0.04-0.99-0.17-1.46c-0.09-0.3-0.26-0.57-0.49-0.79c-0.22-0.2-0.5-0.33-0.79-0.39
 c-0.47-0.07-0.94-0.09-1.4-0.08L44.42,42.21z"
              ></path>
              <path
                fill="white"
                d="M51.46,49.01v-8.19h5.93v1.38h-4.18
v1.94h3.61v1.38h-3.61v3.48L51.46,49.01z"
              ></path>
              <circle
                opacity="0.2"
                fill="#4EB47D"
                cx="21.71"
                cy="65.27"
                r="16.2"
              ></circle>
            </svg>
            <text
              font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
              font-size="18"
              fill="#099660"
              x="8"
              y="123"
            >
              再生處理廠
            </text></svg
          ><svg x="1018" y="721" mask="url(#full-mask-13)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              viewBox="0 0 93 93"
              x="0"
              width="104"
              height="104"
            >
              <g transform="translate(996.542 3641.038)">
                <rect
                  x="-938.35"
                  y="-3616.93"
                  fill="white"
                  width="15.54"
                  height="15.54"
                ></rect>
                <rect
                  x="-937.23"
                  y="-3615.8"
                  fill="none"
                  stroke="#282828"
                  stroke-width="2.25"
                  width="13.29"
                  height="13.29"
                ></rect>
              </g>
              <rect
                x="40.92"
                y="24.11"
                fill="#004974"
                width="15.54"
                height="15.54"
              ></rect>
              <rect x="58.19" y="41.37" width="15.54" height="15.54"></rect>
              <rect x="40.92" y="41.37" width="15.54" height="15.54"></rect>
              <g transform="translate(50.235 -262.885)">
                <path
                  d="M26.9,323.82c-0.28-0.41-0.77-0.63-1.26-0.59c-4.2,0.01-8.4,0.01-12.6,0.01c-0.19,0-0.45-0.1-0.54,0.12
 c-0.09,0.22,0.16,0.34,0.29,0.47c1.03,1.06,1.74,2.38,2.05,3.82c0.02,0.36,0.34,0.64,0.7,0.61c0.02,0,0.05,0,0.07-0.01
 c3.36-0.01,6.71-0.01,10.07,0c0.47,0,0.92-0.21,1.21-0.58L26.9,323.82z"
                ></path>
                <path
                  d="M-13.1,322.4c-0.01,0.69,0.21,0.86,0.87,0.85c4.47-0.03,8.93-0.02,13.4-0.01c0.21,0,0.51-0.12,0.6,0.12
 c0.09,0.24-0.2,0.36-0.35,0.51c-1,0.99-1.69,2.25-1.99,3.63c-0.13,0.6-0.41,0.77-1,0.76c-4.73-0.02-9.47-0.01-14.2-0.01
 c-0.98,0-0.98,0-1.22-0.97c-1.13-4.21-5.46-6.71-9.68-5.58c-0.83,0.22-1.61,0.58-2.32,1.05c-1.69,1.12-2.88,2.84-3.32,4.82
 c-0.07,0.32-0.11,0.68-0.58,0.67c-2.51-0.01-5.02,0.01-7.53-0.02c-0.53,0.03-0.98-0.38-1.01-0.91c0-0.04,0-0.08,0-0.12
 c-0.02-0.98-0.03-1.96,0-2.93c-0.04-0.54,0.37-1,0.9-1.03c0.05,0,0.11,0,0.16,0c0.49-0.04,0.98-0.04,1.47,0
 c0.67,0.07,0.81-0.21,0.81-0.84c-0.02-4.09,0-8.18-0.02-12.27c-0.04-1.41,0.33-2.8,1.06-4c1.93-3.09,4.05-6.06,6.08-9.09
 c1.51-2.38,4.18-3.78,7-3.68c2.78,0,5.56,0,8.33,0c1.79,0,2.55,0.77,2.55,2.56c0,4.38,0,8.76,0,13.13
 C-13.09,313.5-13.07,317.95-13.1,322.4 M-18.93,307.36c0.93,0,1.24-0.31,1.24-1.24c0.01-2.04,0.01-4.08,0-6.13
 c0-0.82-0.29-1.17-1.1-1.19c-2.31-0.03-4.62-0.02-6.93-0.01c-0.45-0.01-0.88,0.22-1.13,0.6c-1.49,2.14-2.99,4.25-4.48,6.38
 c-0.27,0.28-0.34,0.7-0.18,1.05c0.21,0.38,0.63,0.59,1.06,0.54c1.93-0.01,3.86,0,5.8,0C-22.74,307.37-20.83,307.38-18.93,307.36"
                ></path>
                <path
                  d="M-18.49,329.36c0.01,3.39-2.73,6.14-6.11,6.15c-3.39,0.01-6.14-2.73-6.15-6.11s2.73-6.14,6.11-6.15
 c0.02,0,0.03,0,0.05,0C-21.21,323.26-18.49,325.99-18.49,329.36 M-24.57,326.39c-1.63,0-2.96,1.32-2.96,2.96
 c0,1.63,1.32,2.96,2.96,2.96c1.63-0.04,2.92-1.4,2.88-3.03C-21.73,327.7-23,326.43-24.57,326.39"
                ></path>
                <path
                  d="M7.17,335.46c-3.37,0.11-6.2-2.54-6.3-5.91c-0.11-3.37,2.54-6.2,5.91-6.3c0.11,0,0.22,0,0.32,0
 c3.37,0.07,6.05,2.86,5.98,6.23C13.01,332.73,10.41,335.35,7.17,335.46 M4.15,329.35c0.03,1.64,1.36,2.95,3,2.95
 c1.63-0.06,2.91-1.42,2.85-3.05c-0.05-1.58-1.35-2.84-2.93-2.86C5.47,326.44,4.18,327.74,4.15,329.35"
                ></path>
                <rect
                  x="-41.44"
                  y="278.39"
                  fill="none"
                  width="69.51"
                  height="57.07"
                ></rect>
              </g>
              <circle
                opacity="0.2"
                fill="#3094A5"
                cx="73"
                cy="55.57"
                r="16.2"
              ></circle>
            </svg>
            <text
              font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
              font-size="18"
              fill="#004974"
              x="12"
              y="107"
            >
              包裝出貨
            </text></svg
          ><svg x="1230" y="792" mask="url(#full-mask-11)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              viewBox="0 0 93 93"
              x="0"
              width="94"
              height="94"
            >
              <g transform="translate(-0.34 13.721)">
                <path
                  fill="white"
                  d="M62.76,19.78
 c-0.05,0-0.09-0.04-0.09-0.09c0-0.05,0.04-0.09,0.09-0.09l0,0c1.3,0,2.35-1.05,2.35-2.35c0-0.05,0.04-0.09,0.09-0.09
 c0.05,0,0.09,0.04,0.09,0.09C65.28,18.65,64.15,19.78,62.76,19.78"
                ></path>
                <path
                  d="M47.62,7c0,2.76-2.24,5-5,5s-5-2.24-5-5s2.24-5,5-5
 S47.62,4.24,47.62,7"
                ></path>
                <path
                  d="M19.6,26.97c0,2.76-2.24,5-5,5s-5-2.24-5-5
 s2.24-5,5-5S19.6,24.21,19.6,26.97"
                ></path>
                <path
                  fill="#004974"
                  d="M42.11,25.83c0,2.76-2.24,5-5,5
 s-5-2.24-5-5s2.24-5,5-5S42.11,23.06,42.11,25.83"
                ></path>
                <path
                  d="M55.2,40c0,2.76-2.24,5-5,5s-5-2.24-5-5s2.24-5,5-5
 S55.2,37.24,55.2,40"
                ></path>
                <path
                  fill="#004974"
                  d="M77.52,42.74c0,2.76-2.24,5-5,5
 s-5-2.24-5-5s2.24-5,5-5S77.52,39.97,77.52,42.74"
                ></path>
                <path
                  d="M49.13,59.5c0,2.76-2.24,5-5,5s-5-2.24-5-5
 c0-2.76,2.24-5,5-5S49.13,56.74,49.13,59.5"
                ></path>
                <path
                  fill="#004974"
                  d="M30.44,44.99c0,2.76-2.24,5-5,5
 s-5-2.24-5-5s2.24-5,5-5S30.44,42.23,30.44,44.99"
                ></path>
                <path
                  d="M70.35,22.04c0,2.76-2.24,5-5,5c-2.76,0-5-2.24-5-5
 s2.24-5,5-5C68.11,17.04,70.35,19.28,70.35,22.04"
                ></path>
              </g>
              <circle
                opacity="0.2"
                fill="#3094A5"
                cx="67.88"
                cy="54.59"
                r="18"
              ></circle>
            </svg>
            <text
              font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
              font-size="18"
              fill="#004974"
              x="4"
              y="107"
            >
              冷卻造粒
            </text></svg
          ><svg x="1436" y="717" mask="url(#full-mask-10)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              viewBox="0 0 93 93"
              x="0"
              width="98"
              height="99"
            >
              <path
                fill="none"
                stroke="black"
                stroke-width="2.85"
                stroke-miterlimit="10"
                d="M75.1,78.52V23.31H12.73v55.21"
              ></path>
              <circle
                opacity="0.2"
                fill="#3094A5"
                cx="72.05"
                cy="29.42"
                r="17.1"
              ></circle>
              <path
                fill="white"
                d="M26.98,42.97h34.2v32.99h-34.2V42.97z"
              ></path>
              <path
                stroke="black"
                stroke-width="0.475"
                d="M61.04,75.67H26.79V36.71h34.25V75.67z M63.37,34.35H24.46v43.67h38.91L63.37,34.35z"
              ></path>
              <path
                fill="#004974"
                d="M43.48,46.83l-6.44,5.92l8.04,7.75L43.48,46.83z"
              ></path>
              <path
                fill="#004974"
                d="M52.11,68.23l-7.03-3.54l13.75-3.2L52.11,68.23z"
              ></path>
              <path
                fill="#004974"
                d="M40.47,61.24l-7.45,8.43l8.04,2.89L40.47,61.24z"
              ></path>
              <path
                stroke="black"
                stroke-width="2.375"
                d="M64.59,40.64H23.24V35.5h41.35V40.64z M66.92,33.17H20.91v9.81h46.01V33.17z"
              ></path>
              <rect
                x="22.07"
                y="34.33"
                fill="white"
                width="43.68"
                height="7.48"
              ></rect>
            </svg>
            <text
              font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
              font-size="18"
              fill="#004974"
              x="8"
              y="115"
            >
              熔融過濾
            </text></svg
          ><svg x="1534" y="557" mask="url(#full-mask-9)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              viewBox="0 0 93 93"
              x="0"
              width="97"
              height="94"
            >
              <g transform="translate(1454.429 3680.182)">
                <circle
                  fill="white"
                  cx="-1402.52"
                  cy="-3631.88"
                  r="31.93"
                ></circle>
                <circle
                  fill="none"
                  stroke="black"
                  stroke-width="3"
                  cx="-1402.52"
                  cy="-3631.88"
                  r="30.43"
                ></circle>
              </g>
              <g
                fill="none"
                stroke="#004974"
                stroke-width="2.8013"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="4.0018"
              >
                <path
                  d="M42.47,63.21
 c7.27-6.9,7.42-10.76,0.76-18.51c-3.41-3.96-4.36-9.46,1.11-14.36"
                ></path>
                <path
                  d="M58.59,66.24
 c7.27-6.9,7.42-10.76,0.76-18.51c-3.41-3.96-4.36-9.46,1.11-14.36"
                ></path>
              </g>
              <line
                fill="none"
                stroke="black"
                stroke-width="2.8"
                stroke-linecap="round"
                x1="16.35"
                y1="42.02"
                x2="86.02"
                y2="62.34"
              ></line>
              <circle
                opacity="0.2"
                fill="#3094A5"
                cx="21.55"
                cy="42.19"
                r="18"
              ></circle>
            </svg>
            <text
              font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
              font-size="18"
              fill="#004974"
              x="19"
              y="111"
            >
              去味色選
            </text></svg
          ><svg x="1545" y="342" mask="url(#full-mask-8)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              viewBox="0 0 93 93"
              x="0"
              width="94"
              height="100"
            >
              <path
                d="M36.9,24.56l-3.96-3.71v15.39h-3.61V20.76l-3.66,4.52
 l-0.53-0.62l-2.54-2.23c2.9-2.85,5.74-5.65,8.51-8.38l8.6,8.61L36.9,24.56"
              ></path>
              <path
                d="M64.81,24.56l-3.96-3.71v15.39h-3.6V20.76l-3.66,4.52
 l-0.53-0.62l-2.54-2.23c2.9-2.85,5.74-5.65,8.52-8.38l8.6,8.61L64.81,24.56"
              ></path>
              <g transform="translate(1493.941 3538.189)">
                <path
                  fill="none"
                  stroke="#004974"
                  stroke-width="2.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M-1422.31-3479.8
 c-2.95-0.56-5.13,1.53-7.21,3.52c-6.01,5.75-8.77,3.7-12.87-0.04c-4.76-4.33-7.24-5.07-12.88-0.05c-5.62/,5-8,5.02-13.56-0.05
 c-2.05-1.86-3.91-3.46-6.49-3.38"
                ></path>
                <path
                  fill="none"
                  stroke="#004974"
                  stroke-width="2.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M-1423.8-3492.26
 c-2.93,0.15-4.85,2.83-7.14,4.52c-3.85,2.84-7.41,2.77-10.76-0.53c-5.49-5.42-8.52-5.4-14.32-0.01c-4.46,4.15-9.42,3.11-12.3-0.52
 c-1.48-1.88-3.63-3.12-6-3.46"
                ></path>
                <path
                  fill="none"
                  stroke="#004974"
                  stroke-width="2.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M-1422.31-3466.85
 c-2.69-0.44-4.82,0.72-6.86,2.95c-4.25,4.64-8.09,4.68-12.82,0.54c-5.74-5.02-8.75-4.92-14.46,0.5c-2.92,2.77-7.15,3.79-11.24,0
 c-2.28-2.12-4.48-4.46-7.63-3.99"
                ></path>
              </g>
              <circle
                opacity="0.2"
                fill="#3094A5"
                cx="59.67"
                cy="53.67"
                r="18"
              ></circle>
            </svg>
            <text
              font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
              font-size="18"
              fill="#004974"
              x="7"
              y="110"
            >
              比重浮選
            </text></svg
          ><svg x="1406" y="172" mask="url(#full-mask-7)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              viewBox="0 0 93 93"
              x="0"
              width="94"
              height="100"
            >
              <path
                fill="#282828"
                d="M23.51,13.09l-8.45,7.76l10.54,10.15L23.51,13.09z"
              ></path>
              <path d="M49.51,80.58l-7.9-3.97L57.05,73L49.51,80.58z"></path>
              <path d="M46.63,31.79l-16.17,8.82l10.77,8.93L46.63,31.79z"></path>
              <path d="M14.38,41.11l-8.67,9.12l9.36,3.13L14.38,41.11z"></path>
              <path
                d="M67.82,29.95l-5.48,0.52l-5.87-9.39l7.56-1.83L67.82,29.95z"
              ></path>
              <g transform="translate(1428.219 3320.613)">
                <path
                  fill="#004974"
                  stroke="#004974"
                  stroke-width="0.5"
                  d="M-1404.12-3260.36c-0.19,0-0.37,0.11-0.47,0.27l-5.09,8l-0.03,0.05
 c-1.05,2.07-1.03,4.52,0.05,6.57c1.34,3.07,4.91,4.46,7.98,3.12c1.4-0.61,2.51-1.73,3.12-3.12c1.07-2.06,1.09-4.5,0.04-6.57
 l-0.03-0.05l-5.09-8C-1403.75-3260.25-1403.93-3260.36-1404.12-3260.36 M-1404.13-3243.13c-1.95-0.06-3.71-1.21-4.54-2.98
 c-0.87-1.63-0.89-3.59-0.06-5.24l4.6-7.24l4.6,7.23c0.83,1.65,0.81,3.61-0.06,5.24
 C-1400.42-3244.35-1402.17-3243.2-1404.13-3243.13"
                ></path>
                <path
                  fill="#004974"
                  stroke="#004974"
                  stroke-width="0.5"
                  d="M-1400.98-3249.59c-0.36,0-0.65,0.29-0.65,0.65c0,0,0,0,0,0c0,1.55-1.26,2.81-2.81,2.81
 c-0.36,0.01-0.64,0.32-0.63,0.68c0.01,0.34,0.29,0.62,0.63,0.63c2.28,0,4.12-1.85,4.12-4.12
 C-1400.32-3249.29-1400.61-3249.59-1400.98-3249.59C-1400.98-3249.59-1400.98-3249.59-1400.98-3249.59"
                ></path>
              </g>
              <g transform="translate(1476.57 3302.716)">
                <path
                  fill="#004974"
                  stroke="#004974"
                  stroke-width="0.5"
                  d="M-1404.12-3260.36c-0.19,0-0.37,0.11-0.47,0.27l-5.09,8l-0.03,0.05
 c-1.05,2.07-1.03,4.52,0.05,6.57c1.34,3.07,4.91,4.46,7.98,3.12c1.4-0.61,2.51-1.73,3.12-3.12c1.07-2.06,1.09-4.5,0.04-6.57
 l-0.03-0.05l-5.09-8C-1403.75-3260.25-1403.93-3260.36-1404.12-3260.36 M-1404.13-3243.13c-1.95-0.06-3.71-1.21-4.54-2.98
 c-0.87-1.63-0.89-3.59-0.06-5.24l4.6-7.24l4.6,7.23c0.83,1.65,0.81,3.61-0.06,5.24
 C-1400.42-3244.35-1402.17-3243.2-1404.13-3243.13"
                ></path>
                <path
                  fill="#004974"
                  stroke="#004974"
                  stroke-width="0.5"
                  d="M-1400.98-3249.59c-0.36,0-0.65,0.29-0.65,0.65c0,0,0,0,0,0c0,1.55-1.26,2.81-2.81,2.81
 c-0.36,0.01-0.64,0.32-0.63,0.68c0.01,0.34,0.29,0.62,0.63,0.63c2.28,0,4.12-1.85,4.12-4.12
 C-1400.32-3249.29-1400.61-3249.59-1400.98-3249.59C-1400.98-3249.59-1400.98-3249.59-1400.98-3249.59"
                ></path>
              </g>
              <path
                fill="white"
                d="M46.94,48.88l-13.82,8.12l17.25,10.62L46.94,48.88z"
              ></path>
              <circle
                opacity="0.2"
                fill="#3094A5"
                cx="72.45"
                cy="51.62"
                r="18"
              ></circle>
            </svg>
            <text
              font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
              font-size="18"
              fill="#004974"
              x="4"
              y="114"
            >
              粉碎清洗
            </text></svg
          ><svg x="1212" y="116" mask="url(#full-mask-6)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              viewBox="0 0 93 93"
              x="7"
              width="98"
              height="100"
            >
              <line
                fill="none"
                stroke="black"
                stroke-width="2.66"
                stroke-linecap="round"
                stroke-linejoin="round"
                x1="30.97"
                y1="59.87"
                x2="30.97"
                y2="83.74"
              ></line>
              <path
                fill="none"
                stroke="black"
                stroke-width="2.85"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M39.19,17.79c0.1,4.54-3.5,8.3-8.04,8.39c-4.54,0.1-8.3-3.5-8.39-8.04c0-0.06,0-0.11,0-0.17
 c0-0.06,0-0.12,0-0.18c-0.1-4.54,3.5-8.3,8.04-8.39s8.3,3.5,8.39,8.04c0,0.06,0,0.11,0,0.17C39.19,17.66,39.19,17.73,39.19,17.79z"
              ></path>
              <rect
                x="54.38"
                y="43.67"
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -18.5262 59.8656)"
                fill="#004974"
                width="17.25"
                height="17.25"
              ></rect>
              <path
                fill="none"
                stroke="black"
                stroke-width="2.85"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M22.26,40.12c0,12.02-0.38,35.87,0,39.56c-0.07,3.94,3.35,4.93,5.16,5.14
 c3.03,0.34,12.19,0,12.19,0V40.06h11.17c6.55-0.01,8.46-1.72,9.74-9.14c-11.26,0-24.39,0.41-33.6,0.17
 C22.83,31.33,22.26,32.52,22.26,40.12z"
              ></path>
              <circle
                opacity="0.2"
                fill="#3094A5"
                cx="50.23"
                cy="38.77"
                r="17.1"
              ></circle>
              <rect
                x="64.8"
                y="65.99"
                transform="matrix(0.9781 -0.208 0.208 0.9781 -13.8134 16.7803)"
                fill="white"
                width="16.15"
                height="16.15"
              ></rect>
              <path
                stroke="black"
                stroke-width="0.475"
                d="M64.86,68.97l13.3-2.73l2.73,13.3l-13.3,2.73L64.86,68.97z M62.16,67.2l3.66,17.77l17.77-3.66
 l-3.66-17.77L62.16,67.2z"
              ></path>
            </svg>
            <text
              font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
              font-size="18"
              fill="#004974"
              y="126"
              x="13"
            >
              人工篩選
            </text></svg
          ><svg x="1001" y="218" mask="url(#full-mask-5)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              viewBox="0 0 93 93"
              x="0"
              width="100"
              height="100"
            >
              <g transform="translate(146.65 142.533)">
                <path
                  stroke="black"
                  stroke-width="0.75"
                  d="M-109.77-113.23c0.18,0,0.35,0.12,0.4,0.29l6.91,20.21l0.4,1.16h4.87
 c0.4,0,0.73,0.33,0.73,0.73v17.72c0,0.4-0.33,0.73-0.73,0.73h-40.67c-0.4,0-0.72-0.33-0.73-0.73v-17.72c0-0.4,0.32-0.73,0.73-0.73
 h13.89v-21.26c0-0.23,0.18-0.41,0.41-0.41H-109.77z M-109.77-114.95h-13.79c-1.18,0-2.13,0.95-2.13,2.13v19.54h-12.16
 c-1.35,0-2.45,1.1-2.45,2.45v17.72c0,1.35,1.1,2.45,2.45,2.45h40.67c1.35,0,2.45-1.1,2.45-2.45c0,0,0,0,0,0v-17.72
 c0-1.35-1.1-2.45-2.45-2.45c0,0,0,0,0,0h-3.64l-1.57-4.59l-5.35-15.62C-108.03-114.37-108.85-114.95-109.77-114.95"
                ></path>
                <path
                  fill="none"
                  stroke="black"
                  stroke-width="2.52"
                  stroke-miterlimit="10"
                  d="M-89.72-114.95v43.24h24.93"
                ></path>
                <rect
                  x="-83.46"
                  y="-93.8"
                  fill="#004974"
                  width="17.81"
                  height="17.81"
                ></rect>
                <path
                  d="M-128.97-65.36c-2.93,0-5.31-2.38-5.31-5.31c0-2.93,2.38-5.31,5.31-5.31s5.31,2.38,5.31,5.31
 C-123.67-67.74-126.04-65.36-128.97-65.36"
                ></path>
                <path
                  fill="white"
                  d="M-128.97-75.4c2.61,0,4.73,2.12,4.72,4.73c0,2.61-2.12,4.73-4.73,4.72
 c-2.61,0-4.72-2.12-4.73-4.72C-133.7-73.28-131.58-75.39-128.97-75.4 M-128.97-76.57c-3.26,0-5.9,2.64-5.9,5.9
 c0,3.26,2.64,5.9,5.9,5.9s5.9-2.64,5.9-5.9c0,0,0,0,0,0C-123.08-73.93-125.72-76.57-128.97-76.57"
                ></path>
                <path
                  d="M-106.05-65.36c-2.93,0-5.31-2.38-5.31-5.31c0-2.93,2.38-5.31,5.31-5.31s5.31,2.38,5.31,5.31
 C-100.75-67.74-103.12-65.36-106.05-65.36"
                ></path>
                <path
                  fill="white"
                  d="M-106.05-75.4c2.61,0,4.73,2.12,4.72,4.73s-2.12,4.73-4.73,4.72c-2.61,0-4.72-2.12-4.72-4.72
 C-110.78-73.28-108.66-75.39-106.05-75.4 M-106.05-76.57c-3.26,0-5.9,2.64-5.9,5.9c0,3.26,2.64,5.9,5.9,5.9
 c3.26,0,5.9-2.64,5.9-5.9c0,0,0,0,0,0C-100.16-73.93-102.8-76.57-106.05-76.57"
                ></path>
                <path
                  fill="none"
                  stroke="black"
                  stroke-width="2.52"
                  stroke-miterlimit="10"
                  d="M-100.74-92.6h-14.2c-0.38,0-0.68-0.3-0.68-0.68c0,0,0,0,0,0v-10.88
 c0-0.38,0.31-0.68,0.68-0.68c0,0,0,0,0,0h9.98"
                ></path>
                <rect
                  x="-83.91"
                  y="-114.43"
                  transform="matrix(0.9563 -0.2924 0.2924 0.9563 27.7742 -26.8099)"
                  fill="white"
                  width="16.2"
                  height="16.2"
                ></rect>
                <path
                  stroke="black"
                  stroke-width="0.9"
                  d="M-70.85-115.42l3.9,13.37l-13.37,3.89l-3.9-13.37L-70.85-115.42z M-69.89-117.16l-16.08,4.68
 l4.68,16.08l16.08-4.68L-69.89-117.16z"
                ></path>
              </g>
              <path
                opacity="0.2"
                fill="#3094A5"
                d="M72.6,18.96c8.95,0,16.2,7.25,16.2,16.2s-7.25,16.2-16.2,16.2s-16.2-7.25-16.2-16.2
 S63.66,18.96,72.6,18.96z"
              ></path>
            </svg>
            <text
              font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
              font-size="18"
              fill="#004974"
              x="6"
              y="108"
            >
              瓶磚入廠
            </text></svg
          ><svg x="766" y="174" mask="url(#full-mask-14)">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xml:space="preserve"
              viewBox="0 0 93 93"
              x="13"
              width="76"
              height="80"
            >
              <path
                fill="white"
                stroke="black"
                stroke-width="3"
                stroke-miterlimit="10"
                d="M32.07,22.04
 c-0.14-7.17,5.55-13.1,12.71-13.25c7.17,0.15,12.86,6.08,12.71,13.25"
              ></path>
              <path
                fill="#099660"
                d="M59.95,31.28
 c0,1.44-1.17,2.61-2.61,2.62c-1.44,0-2.61-1.17-2.62-2.61c0-1.44,1.17-2.61,2.61-2.62c0,0,0,0,0.01,0
 C58.78,28.67,59.95,29.83,59.95,31.28"
              ></path>
              <path
                fill="#099660"
                d="M36.17,31.28
 c0,1.44-1.17,2.61-2.61,2.62c-1.44,0-2.61-1.17-2.62-2.61c0-1.44,1.17-2.61,2.61-2.62c0,0,0,0,0,0C35,28.67,36.17,29.83,36.17,31.28
 "
              ></path>
              <g>
                <path
                  fill="#1A1818"
                  stroke="black"
                  stroke-width="0.3001"
                  stroke-miterlimit="4.001"
                  d="M48.15,62.23
 c-2.93,1.17-6.24,0.94-8.99-0.61c-0.62-0.34-1.37-0.73-0.87-1.6c0.46-0.78,1.11-0.35,1.71-0.06c4.27,2.31,9.61,0.8,12.02-3.41
 c0.59-1,0.8-1.68-0.62-2.27c-2.59-1.07-3.65-3.35-3.12-6.43c0.36-2.07,0.89-4.1,1.34-6.16c0.13-0.6,0.38-1.15,1.1-0.8
 c2.98,1.47,5.92,3.08,7.45,6.22c1.37,2.52,0.45,5.67-2.07,7.04c-0.04,0.02-0.08,0.04-0.12,0.07c-0.78,0.43-1.38,1.12-1.71,1.94
 C53.19,58.97,50.97,61.18,48.15,62.23 M55.22,52.4c1.59-1.27,1.98-2.47,1.4-4.05c-0.84-2.26-2.8-3.43-4.69-4.66
 c-0.45-0.29-0.65,0-0.74,0.38c-0.45,1.89-1.19,3.72-1.09,5.72c0.07,1.18,0.78,2.22,1.85,2.72c0.69,0.39,1.17,0.21,1.19-0.66
 c0.01-0.8-0.1-1.6-0.33-2.36c-0.18-0.62-0.51-1.37,0.41-1.62c0.92-0.26,1.26,0.49,1.42,1.18C54.88,50.1,55.01,51.18,55.22,52.4"
                ></path>
                <path
                  fill="none"
                  d="M48.15,62.23
 c-2.93,1.17-6.24,0.94-8.99-0.61c-0.62-0.34-1.37-0.73-0.87-1.6c0.46-0.78,1.11-0.35,1.71-0.06c4.27,2.31,9.61,0.8,12.02-3.41
 c0.59-1,0.8-1.68-0.62-2.27c-2.59-1.07-3.65-3.35-3.12-6.43c0.36-2.07,0.89-4.1,1.34-6.16c0.13-0.6,0.38-1.15,1.1-0.8
 c2.98,1.47,5.92,3.08,7.45,6.22c1.37,2.52,0.45,5.67-2.07,7.04c-0.04,0.02-0.08,0.04-0.12,0.07c-0.78,0.43-1.38,1.12-1.71,1.94
 C53.2,58.97,50.97,61.18,48.15,62.23z M55.22,52.4c1.59-1.27,1.98-2.47,1.4-4.05c-0.84-2.26-2.8-3.43-4.69-4.66
 c-0.45-0.29-0.65,0-0.74,0.38c-0.45,1.89-1.19,3.72-1.09,5.72c0.07,1.18,0.78,2.22,1.85,2.72c0.69,0.39,1.17,0.21,1.19-0.66
 c0.01-0.8-0.1-1.6-0.33-2.36c-0.18-0.62-0.51-1.37,0.41-1.62c0.92-0.26,1.26,0.49,1.42,1.18C54.88,50.1,55.01,51.18,55.22,52.4z"
                ></path>
                <path
                  fill="#1A1818"
                  stroke="black"
                  stroke-width="0.5001"
                  stroke-miterlimit="4.001"
                  d="M36.16,55.03
 c0.64-1.35,1.13-2.43,1.66-3.49c0.33-0.65,0.78-1.32,1.62-0.9c0.84,0.42,0.4,1.13,0.13,1.7c-0.82,1.72-1.68,3.42-2.5,5.14
 c-0.27,0.82-1.15,1.27-1.97,1c-0.09-0.03-0.17-0.06-0.25-0.11c-1.86-0.75-3.71-1.51-5.56-2.28c-0.53-0.23-1.05-0.56-0.8-1.24
 c0.27-0.72,0.92-0.73,1.52-0.5c1.03,0.38,2.04,0.85,3.05,1.26c0.27,0.11,0.58,0.3,0.84,0.06c0.26-0.24,0.04-0.56-0.03-0.84
 c-1.1-3.97,0.21-8.22,3.35-10.88c2.19-1.99,5.13-2.93,8.07-2.56c0.76,0.06,1.87-0.01,1.78,1.12c-0.09,1.17-1.15,0.85-1.91,0.79
 c-4.84-0.52-9.19,2.98-9.71,7.82c-0.07,0.64-0.07,1.28,0,1.91C35.52,53.74,35.76,54.44,36.16,55.03"
                ></path>
                <path
                  fill="none"
                  d="M36.16,55.03
 c0.64-1.35,1.13-2.43,1.66-3.49c0.33-0.65,0.78-1.32,1.62-0.9c0.84,0.42,0.4,1.13,0.13,1.7c-0.82,1.72-1.68,3.42-2.5,5.14
 c-0.27,0.82-1.15,1.27-1.97,1c-0.09-0.03-0.17-0.06-0.25-0.11c-1.86-0.75-3.71-1.51-5.56-2.28c-0.53-0.23-1.05-0.56-0.8-1.24
 c0.27-0.72,0.92-0.73,1.52-0.5c1.03,0.38,2.04,0.85,3.05,1.26c0.27,0.11,0.58,0.3,0.84,0.06c0.26-0.24,0.04-0.56-0.03-0.84
 c-1.1-3.97,0.21-8.22,3.35-10.88c2.19-1.99,5.13-2.93,8.07-2.56c0.76,0.06,1.87-0.01,1.78,1.12c-0.09,1.17-1.15,0.85-1.91,0.79
 c-4.84-0.52-9.19,2.98-9.71,7.82c-0.07,0.64-0.07,1.28,0,1.91C35.52,53.74,35.76,54.44,36.16,55.03z"
                ></path>
              </g>
              <path
                stroke="black"
                d="M70.79,22.89l0.68,46.86
 c0,1.36-1.1,2.46-2.46,2.46H20.56c-1.35,0-2.45-1.08-2.47-2.43l0.68-46.89L70.79,22.89z M72.86,20.79H16.69l-0.71,48.96
 c0,2.52,2.05,4.57,4.57,4.56H69c2.52,0,4.57-2.04,4.57-4.56L72.86,20.79z"
              ></path>
              <circle
                opacity="0.2"
                fill="#4EB47D"
                cx="69.5"
                cy="70.9"
                r="18"
              ></circle>
            </svg>
            <text
              font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
              font-size="18"
              fill="#099660"
              y="102"
            >
              各類綠色商品
            </text>
          </svg>
        </svg>
      </div>
      <div id="pcr_process_m">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 414 829"
          width="100vw"
        >
          <def>
            <path
              id="mobile-center-infinite-line"
              d="M 194.265 423 c -34.90343 24.70179 -74.02946 55.6501 -90.36478 96.95259 C 98.938995 532.49662 96.08 545.99574 96.08 560.565 c 0 14.94448 2.895107 29.32271 8.15507 42.55192 8.69298 21.86347 23.84511 40.5886 43.06288 53.54478 17.81486 12.01036 39.12343 19.0633 62.01905 19.0633 26.69761 0 51.23744 -9.59013 70.59629 -25.4478 15.87267 -13.002 28.26234 -30.21746 35.50263 -49.81497 4.61427 -12.48961 7.13708 -25.9467 7.13708 -39.89723 0 -14.8944 -3.08195 -28.68914 -8.59241 -41.62613 C 296.33325 477.55484 253.85531 444.948 207.917 413.199 190.8421 401.39862 174.39826 389.41977 159.61777 376.87013 135.69091 356.55461 116.12295 334.74331 105.293 309.772 l -3.112 -7.957 C 98.735881 291.94185 96.65344 281.5763 96.182471 270.62163 96.114407 269.03849 96.08 267.44304 96.08 265.835 c 0 -41.86276 22.7166 -78.9692 56.49601 -98.9278 2.9325 -1.73267 5.94837 -3.33611 9.03999 -4.8022 l 7.37 -3.178 c 12.85692 -5.00295 26.53399 -7.56473 40.33 -7.554 19.54532 0 37.93385 5.07157 53.97984 13.95388 7.88017 4.36209 15.19537 9.64324 21.80516 15.69412 l 5.294 5.168 c 18.83443 19.59921 30.82446 45.89859 32.05345 74.73307 0.0695 1.6298 0.10455 3.26769 0.10455 4.91293 0 31.69 -12.808 56.88 -31.865 78.938 l -4.859 5.416 c -5.33028 5.7336 -11.06392 11.26542 -17.07767 16.65891 -14.13066 12.67323 -29.80782 24.58264 -45.43233 36.55109"
              fill="none"
            ></path>
          </def>
          <rect
            width="414"
            height="414"
            fill="rgb(78, 180, 125)"
            opacity="0.1"
          ></rect>
          <rect
            y="414"
            width="414"
            height="414"
            fill="rgb(0, 73, 116)"
            opacity="0.1"
          ></rect>
          <g>
            <path
              d="M209.636 170 a 97.917 97.917 0 1 1 -0.1 0z"
              fill="white"
            ></path>
            <text fill="#282828" font-weight="500">
              <tspan
                font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif5"
                font-size="24"
                y="249.91700000000003"
                x="149.636"
              >
                消費後再生
              </tspan>
              <tspan
                font-family="Roboto, sans-serif"
                y="277.91700000000003"
                x="139.636"
                font-size="12"
              >
                POST-CONSUMER RECYCLED
              </tspan>
            </text>
          </g>
          <g>
            <path
              d="M209.636 460 a 97.917 97.917 0 1 1 -0.1 0z"
              fill="rgb(0, 73, 116)"
            ></path>
            <text fill="white" font-weight="500">
              <tspan
                font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                font-size="24"
                y="539.917"
                x="161.636"
              >
                再生程序
              </tspan>
              <tspan
                font-family="Roboto, sans-serif"
                y="575.917"
                x="139.636"
                font-size="12"
              >
                REGENERATION PROCESS
              </tspan>
            </text>
          </g>
          <g>
            <use
              href="#mobile-center-infinite-line"
              stroke="white"
              transform="translate(-2 -1)"
              stroke-width="2"
            ></use>
            <use
              href="#mobile-center-infinite-line"
              stroke="#004974"
              stroke-width="1.5"
            >
              <animate
                dur="30s"
                values="0 1274.1429443359375 0 181.470458984375;
0 1244.7820129394531 29.360931396484375 210.83139038085938;
0 1215.4210815429688 58.72186279296875 240.19232177734375;
0 1186.0601501464844 88.08279418945312 269.5532531738281;
0 1156.69921875 117.4437255859375 298.9141845703125;
0 1127.7266235351562 146.41632080078125 327.88677978515625;
0 1098.7540283203125 175.388916015625 356.859375;
0 1069.7814331054688 204.36151123046875 385.83197021484375;
0 1040.808837890625 233.3341064453125 414.8045654296875;
0 1009.8173370361328 264.3256072998047 445.7960662841797;
0 978.8258361816406 295.3171081542969 476.7875671386719;
0 947.8343353271484 326.30860900878906 507.77906799316406;
0 916.8428344726562 357.30010986328125 538.7705688476562;
0 884.9645538330078 389.1783905029297 570.6488494873047;
0 853.0862731933594 421.0566711425781 602.5271301269531;
0 821.2079925537109 452.93495178222656 634.4054107666016;
0 789.3297119140625 484.813232421875 666.28369140625;
0 736.2911682128906 537.8517761230469 719.3222351074219;
0 683.2526245117188 590.8903198242188 772.3607788085938;
0 630.2140808105469 643.9288635253906 825.3993225097656;
0 577.175537109375 696.9674072265625 878.4378662109375;
0 556.2902221679688 717.8527221679688 899.3231811523438;
0 535.4049072265625 738.738037109375 920.20849609375;
0 514.5195922851562 759.6233520507812 941.0938110351562;
0 493.63427734375 780.5086669921875 961.9791259765625;
0 478.1611557006836 795.9817886352539 977.4522476196289;
0 462.6880340576172 811.4549102783203 992.9253692626953;
0 447.2149124145508 826.9280319213867 1008.3984909057617;
0 431.7417907714844 842.4011535644531 1023.8716125488281;
0 412.60514068603516 861.5378036499023 1043.0082626342773;
0 393.46849060058594 880.6744537353516 1062.1449127197266;
0 374.3318405151367 899.8111038208008 1081.2815628051758;
0 355.1951904296875 918.94775390625 1100.418212890625;
0 338.7326202392578 935.4103240966797 1116.8807830810547;
0 322.2700500488281 951.8728942871094 1133.3433532714844;
0 305.80747985839844 968.3354644775391 1149.805923461914;
0 289.34490966796875 984.7980346679688 1166.2684936523438;
0 271.9082794189453 1002.2346649169922 1183.7051239013672;
0 254.47164916992188 1019.6712951660156 1201.1417541503906;
0 237.03501892089844 1037.107925415039 1218.578384399414;
0 219.598388671875 1054.5445556640625 1236.0150146484375;
0 198.2997817993164 1075.843162536621 1257.313621520996;
0 177.0011749267578 1097.1417694091797 1278.6122283935547;
0 155.70256805419922 1118.4403762817383 1299.9108352661133;
0 134.40396118164062 1139.7389831542969 1321.2094421386719;
0 67.20198059082031 1206.9409637451172 1388.4114227294922;
0 0 1274.1429443359375 181.470458984375;
0 0 1274.1429443359375 123.144775390625;
0 0 1274.1429443359375 98.5158203125;
0 0 1274.1429443359375 73.886865234375;
0 0 1274.1429443359375 49.25791015625;
0 0 1274.1429443359375 24.628955078125;
0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0;0 0 1274.1429443359375 0"
                repeatCount="indefinite"
                attributeName="stroke-dasharray"
                fill="freeze"
              ></animate>
            </use>
            <g data-for="arrows" fill="#004974" fill-rule="evenodd">
              <path
                d="M267.883 162.4 l -8.78.69 4.675 7.668.145 -5.15 3.96 -3.208Z"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  data-value="0;0;.7;1"
                  data-dur="0.35s"
                  dur="30s"
                  begin="0.034999999999999996s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </path>
              <path
                d="M153.49 160.933 l -4.067 7.81 8.98.1 -4.29 -2.851 -0.622 -5.06Z"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  data-value="0;0;.7;1"
                  data-dur="0.35s"
                  dur="30s"
                  begin="0.034999999999999996s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </path>
              <path
                d="M91.136 266.982 l 5.237 7.08 4.027 -8.027 -4.445 2.606 -4.82 -1.659Z"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  data-value="0;0;.7;1"
                  data-dur="0.35s"
                  dur="30s"
                  begin="0.034999999999999996s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </path>
              <path
                d="M153.323 377.564 l 8.686 1.456 -2.68 -8.572 -1.386 4.962 -4.62 2.154Z"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  data-value="0;0;.7;1"
                  data-dur="0.35s"
                  dur="30s"
                  begin="0.034999999999999996s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </path>
              <path
                d="M307.854 515.722 l 6.986 5.363 1.657 -8.827 -3.553 3.73 -5.09 -.266Z"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  data-value="0;0;.7;1"
                  data-dur="0.35s"
                  dur="30s"
                  begin="0.034999999999999996s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </path>
              <path
                d="M312.98 594.665 l 1.602 8.66 7.138 -5.45 -5.137.394 -3.604 -3.604Z"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  data-value="0;0;.7;1"
                  data-dur="0.35s"
                  dur="30s"
                  begin="0.034999999999999996s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </path>
              <path
                d="M279.754 644.241 l -2.796 8.352 8.885 -1.306 -4.683 -2.146 -1.406 -4.9Z"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  data-value="0;0;.7;1"
                  data-dur="0.35s"
                  dur="30s"
                  begin="0.034999999999999996s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </path>
              <path
                d="M213.047 671.067 l -7.345 4.86 7.806 4.44 -2.37 -4.574 1.909 -4.726Z"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  data-value="0;0;.7;1"
                  data-dur="0.35s"
                  dur="30s"
                  begin="0.034999999999999996s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </path>
              <path
                d="M153.567 655.198 l -8.807.075 4.128 7.976.504 -5.127 4.175 -2.924Z"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  data-value="0;0;.7;1"
                  data-dur="0.35s"
                  dur="30s"
                  begin="0.034999999999999996s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </path>
              <path
                d="M110.805 606.604 l -7.168 -5.115 -1.35 8.878 3.422 -3.851 5.096.088Z"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  data-value="0;0;.7;1"
                  data-dur="0.35s"
                  dur="30s"
                  begin="0.034999999999999996s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </path>
              <path
                d="M106.967 526.805 l -2.5 -8.445 -6.529 6.166 5.068 -0.929 3.961 3.208Z"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  data-value="0;0;.7;1"
                  data-dur="0.35s"
                  dur="30s"
                  begin="0.034999999999999996s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </path>
              <path
                d="M268.158 373.264 l 2.942 -8.301 -8.907 1.15 4.646 2.228 1.32 4.923Z"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  data-value="0;0;.7;1"
                  data-dur="0.35s"
                  dur="30s"
                  begin="0.034999999999999996s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </path>
              <path
                d="M327.242 263.927 l -4.987 -7.26 -4.304 7.883 4.533 -2.45 4.758 1.827Z"
                opacity="0"
              >
                <animate
                  attributeName="opacity"
                  values="0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0.6;0.7;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                  data-value="0;0;.7;1"
                  data-dur="0.35s"
                  dur="30s"
                  begin="0.034999999999999996s"
                  repeatCount="indefinite"
                  fill="freeze"
                ></animate>
              </path>
            </g>
          </g>
          <g data-for="svgs" x="0" y="0">
            <g>
              <svg
                x="325"
                y="134.5"
                width="80"
                height="103.65217391304347"
                viewBox="0 0 115 149"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 115 149"
                  style="enable-background: new 0 0 115 149"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        fill="#099660"
                        d="M20.53,112.37c-0.75-0.53-2.31-1.43-3.44-2.03l0.75-1.01c1.11,0.54,2.67,1.37,3.46,1.9L20.53,112.37z
 M17.71,119.94c1-1.43,2.48-3.89,3.55-6.01l1.01,0.92c-1,1.97-2.29,4.3-3.4,6.03L17.71,119.94z M18.91,104.24
 c1.11,0.62,2.63,1.5,3.42,2.05l-0.85,1.11c-0.75-0.56-2.25-1.52-3.38-2.2L18.91,104.24z M33.17,119.38c0,0.79-0.17,1.2-0.73,1.43
 c-0.56,0.23-1.5,0.23-2.93,0.23c-0.04-0.38-0.24-0.94-0.43-1.33c1.07,0.06,2.05,0.06,2.33,0.04c0.3-0.02,0.39-0.09,0.39-0.38
 v-3.51c-2.24,0.58-4.56,1.15-6.33,1.56L25,116.2c1.73-0.36,4.3-0.92,6.8-1.52v-4.09h-7.04v3.89c0,2.07-0.19,4.85-1.3,6.74
 c-0.23-0.24-0.77-0.68-1.07-0.83c0.96-1.71,1.05-4.06,1.05-5.92v-5.17h4.23v-5.33h1.37v5.33h4.13V119.38z M24.83,108.65
 c-0.28-0.96-1.09-2.44-1.88-3.51l1.16-0.54c0.83,1.05,1.67,2.48,1.97,3.44L24.83,108.65z M25.86,111.82
 c1.67,0.32,3.76,1,4.86,1.56l-0.54,1.01c-1.09-0.6-3.17-1.31-4.86-1.67L25.86,111.82z M33.83,105.04
 c-0.64,1.22-1.45,2.59-2.12,3.51l-1.2-0.51c0.68-0.96,1.54-2.46,1.99-3.55L33.83,105.04z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M42.99,118.94c-1.54,0.86-3.91,1.71-5.8,2.2c-0.21-0.28-0.7-0.81-1-1.05c1.92-0.36,4.21-1.01,5.54-1.71
 L42.99,118.94z M47.5,118.36c1.95,0.56,4,1.28,5.28,1.82l-1.05,0.86c-1.26-0.58-3.38-1.37-5.52-2.01l0.69-0.68h-8.32v-5.95
 c-0.49,0.15-1.05,0.28-1.67,0.41c-0.13-0.32-0.43-0.83-0.66-1.09c2.37-0.43,3.74-1.03,4.53-1.75h-3.19
 c0.17-0.83,0.36-1.99,0.47-2.97h3.74v-1.07h-4.58v-0.92h4.58v-1.03h1.28v1.03h2.89v-1.03h1.31v1.03h4.19v2.91h-4.19v1.13h5.35
 c0,0-0.02,0.28-0.04,0.45c-0.11,1.01-0.23,1.56-0.49,1.8c-0.24,0.23-0.53,0.32-0.9,0.34c-0.13,0-0.3,0.02-0.49,0.02v6.69H47.5z
 M39.16,107.94c-0.06,0.39-0.11,0.77-0.17,1.13h2.48c0.17-0.36,0.24-0.73,0.28-1.13H39.16z M49.32,112.22h-9.39v1.16h9.39V112.22z
 M49.32,114.25h-9.39v1.15h9.39V114.25z M39.93,117.46h9.39v-1.18h-9.39V117.46z M42.46,109.98c-0.28,0.49-0.71,0.94-1.33,1.33
 h8.38c-0.04-0.21-0.13-0.43-0.23-0.6c0.58,0.06,1.09,0.08,1.3,0.08s0.34-0.02,0.43-0.13c0.09-0.09,0.17-0.28,0.23-0.68h-3.96v1.3
 h-1.31v-1.3H42.46z M45.96,107.94h-2.93c-0.02,0.39-0.08,0.77-0.19,1.13h3.12V107.94z M43.07,107.02h2.89v-1.07h-2.89V107.02z
 M47.27,105.94v1.07h2.91v-1.07H47.27z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M60.21,108.22c-0.47,0.88-1.03,1.77-1.65,2.61v10.37h-1.31v-8.75c-0.58,0.68-1.2,1.28-1.78,1.77
 c-0.15-0.26-0.54-0.94-0.81-1.22c1.62-1.28,3.29-3.23,4.32-5.2L60.21,108.22z M59.8,104.46c-1.03,1.58-2.7,3.31-4.21,4.45
 c-0.17-0.28-0.54-0.75-0.75-1.01c1.37-1,2.91-2.59,3.68-3.91L59.8,104.46z M70.23,113.97c-0.77,1.8-2.01,3.23-3.57,4.36
 c1.48,0.73,3.16,1.31,4.96,1.63c-0.3,0.3-0.66,0.83-0.85,1.2c-1.97-0.43-3.76-1.13-5.32-2.05c-1.69,0.98-3.59,1.63-5.5,2.09
 c-0.11-0.36-0.41-0.92-0.68-1.2c1.71-0.32,3.44-0.88,4.96-1.67c-0.75-0.56-1.48-1.22-2.08-1.92c-0.49,0.47-1,0.86-1.48,1.24
 c-0.19-0.28-0.68-0.79-0.96-1.03c0.54-0.36,1.11-0.77,1.62-1.24c-0.34-0.43-0.62-0.92-0.9-1.41l1.15-0.39
 c0.19,0.34,0.38,0.66,0.6,0.98c0.66-0.71,1.28-1.52,1.75-2.35c-2.69,0.17-3.17,0.24-3.53,0.38c-0.06-0.26-0.28-0.94-0.43-1.3
 c0.54-0.08,1.2-0.39,2.08-0.9c0.43-0.23,1.3-0.77,2.35-1.45c-2.8,0.13-3.31,0.23-3.59,0.34c-0.06-0.3-0.28-0.98-0.45-1.35
 c0.36-0.06,0.75-0.32,1.24-0.66c0.49-0.36,2.14-1.71,3.29-3.08l1.37,0.6c-1.13,1.16-2.37,2.27-3.57,3.12l3.34-0.11
 c0.85-0.62,1.71-1.31,2.48-2.01l1.28,0.71c-2.22,1.82-4.53,3.38-6.82,4.6l5.88-0.32c-0.43-0.54-0.86-1.09-1.28-1.56l1.09-0.56
 c1.11,1.24,2.44,2.97,3.08,4.06l-1.15,0.66c-0.24-0.43-0.56-0.98-0.98-1.54l-4.17,0.26c-0.26,0.51-0.56,1.03-0.9,1.5h4.6
 l0.23-0.06L70.23,113.97z M63.69,114.75c-0.23,0.28-0.45,0.54-0.69,0.81c0.69,0.77,1.52,1.46,2.46,2.05
 c1.16-0.77,2.18-1.73,2.87-2.85H63.69z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M81.91,116.78c-0.23,2.48-0.45,3.49-0.86,3.91c-0.3,0.3-0.62,0.38-1.09,0.41c-0.41,0.02-1.2,0.04-1.99-0.02
 c-0.04-0.34-0.17-0.77-0.34-1.09c0.79,0.09,1.56,0.09,1.86,0.09c0.28,0,0.45-0.02,0.58-0.15c0.23-0.24,0.41-0.98,0.6-2.67h-3.83
 c0.32-0.92,0.62-2.25,0.85-3.32h3.21v-1.52h-2.37c-0.6,0.34-1.24,0.6-1.86,0.83c-0.11-0.24-0.38-0.6-0.6-0.85
 c-0.08,2.76-0.43,6.27-1.69,8.75c-0.21-0.26-0.77-0.68-1.05-0.83c1.35-2.72,1.46-6.56,1.46-9.28v-5.6h7.06
 c-0.23-0.36-0.47-0.68-0.73-0.98l1.13-0.58c0.43,0.45,0.86,1.05,1.16,1.56h7.1v1.16H76.09v4.43c0,0.39,0,0.83-0.02,1.26
 c1-0.34,1.99-0.79,2.86-1.39c-0.53-0.39-1.2-0.86-1.8-1.18l0.79-0.66c0.6,0.32,1.35,0.77,1.86,1.15c0.56-0.47,1.03-1.03,1.39-1.62
 h-3.68v-1.01h4.34l0.21-0.06l0.75,0.36c-0.58,1.45-1.56,2.63-2.76,3.55h2.01v3.48H78.6c-0.11,0.47-0.23,0.92-0.34,1.35h3.7
 L81.91,116.78z M88.84,116.05c-0.36,1.09-0.92,1.97-1.65,2.69c0.85,0.51,1.63,0.98,2.18,1.39l-0.79,0.88
 c-0.56-0.43-1.37-0.98-2.27-1.5c-1.11,0.81-2.46,1.33-3.94,1.67c-0.11-0.28-0.34-0.69-0.58-0.94c1.3-0.24,2.54-0.7,3.55-1.33
 c-0.88-0.49-1.78-0.98-2.61-1.37l0.73-0.71h-0.98v-1h5.47l0.21-0.04L88.84,116.05z M90.06,109.55c-0.62,0.49-1.37,0.94-2.07,1.31
 c0.86,0.53,1.82,0.94,2.89,1.2c-0.28,0.24-0.62,0.69-0.79,1.01c-0.96-0.3-1.86-0.69-2.65-1.2v1.92c0,0.38,0.02,0.49,0.26,0.49
 h0.94c0.19,0,0.56-0.02,0.77-0.08c0.02,0.28,0.06,0.66,0.09,0.94c-0.19,0.06-0.54,0.07-0.85,0.07h-1.11
 c-1.03,0-1.24-0.41-1.24-1.45v-1.31h-1.88v0.34c0,0.96-0.26,2.07-1.56,2.85c-0.15-0.24-0.58-0.66-0.81-0.81
 c1.11-0.62,1.26-1.37,1.26-2.08v-1.33h3.46c-1.35-1.03-2.37-2.37-3.02-4l1.01-0.26c0.23,0.53,0.53,1.01,0.86,1.5
 c0.62-0.43,1.31-0.96,1.75-1.31l0.9,0.58c-0.64,0.53-1.41,1.03-2.1,1.41c0.3,0.34,0.64,0.64,0.98,0.92
 c0.7-0.39,1.48-0.94,1.95-1.3L90.06,109.55z M83.56,116.82c0.85,0.39,1.78,0.88,2.67,1.39c0.45-0.41,0.81-0.86,1.11-1.39H83.56z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#099660"
                        d="M11.79,129.38H7.89v-1.16h2.69c-0.24-0.56-0.73-1.35-1.2-1.95l1-0.45c0.53,0.62,1.09,1.46,1.31,2.05
 l-0.71,0.36h2.16c0.43-0.7,0.98-1.71,1.28-2.4l1.22,0.38c-0.41,0.71-0.85,1.43-1.22,2.03h2.52v1.16h-3.87v2.25
 c0,0.32-0.02,0.64-0.06,0.98h2.08v-2.4h1.18v4.06h-1.18v-0.51h-2.37c-0.43,1.22-1.41,2.39-3.36,3.27
 c-0.15-0.28-0.6-0.77-0.86-0.96c1.58-0.66,2.42-1.45,2.84-2.31h-2.7v-3.55h1.16v2.4h1.93c0.06-0.34,0.08-0.66,0.08-1V129.38z
 M24.81,140.93v1.24H7.89v-1.24h7.7v-2.08H9.82v-1.22h5.77v-1.16H17v1.16h5.86v1.22H17v2.08H24.81z M18.7,132.99
 c-0.32,1.24-0.9,2.48-1.92,3.46c-0.23-0.23-0.77-0.53-1.11-0.66c1.9-1.77,2.14-4.25,2.14-6.09v-3.25h6.22v8.73
 c0,0.7-0.13,1.07-0.64,1.3c-0.49,0.23-1.26,0.23-2.46,0.23c-0.06-0.38-0.24-0.9-0.41-1.26c0.85,0.04,1.67,0.04,1.88,0.04
 c0.24-0.02,0.32-0.09,0.32-0.32v-2.18H18.7z M22.72,131.9v-1.63h-3.64c-0.02,0.51-0.08,1.07-0.15,1.63H22.72z M19.08,127.62v1.56
 h3.64v-1.56H19.08z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M32.23,141.14c0,0.7-0.15,1.07-0.58,1.3c-0.45,0.21-1.13,0.23-2.33,0.23c-0.06-0.32-0.19-0.86-0.36-1.2
 c0.83,0.04,1.56,0.02,1.78,0.02c0.23,0,0.32-0.09,0.32-0.36v-5.35c-0.62,0.49-1.22,0.94-1.82,1.41l-0.49-1.03
 c-0.15,2.29-0.53,4.79-1.41,6.71c-0.19-0.26-0.69-0.71-0.96-0.85c1.18-2.65,1.28-6.33,1.28-9.04v-6.63h4.56V141.14z M28.85,132.97
 c0,0.9-0.02,1.95-0.09,3.02c0.62-0.34,1.45-0.83,2.31-1.41v-2.37l-0.68,0.49c-0.34-0.53-0.98-1.35-1.54-1.99V132.97z
 M28.85,127.62v2.91l0.68-0.45c0.54,0.56,1.16,1.28,1.54,1.8v-4.26H28.85z M39.14,132.65c-0.11,0.11-0.26,0.26-0.41,0.39
 c1.65,0.96,3.36,1.52,4.9,1.92c-0.28,0.23-0.66,0.68-0.83,1.01c-1.5-0.47-3.16-1.15-4.86-2.31c-1.39,1.01-3.14,1.88-4.75,2.44
 c-0.19-0.26-0.51-0.66-0.79-0.9c2.08-0.62,4.45-1.78,5.73-3.06L39.14,132.65z M36.32,130.87c-1,0.49-2.01,0.98-2.91,1.41
 l-0.56-0.86c0.86-0.32,2.05-0.81,3.27-1.35L36.32,130.87z M42.86,138.55c-1.75,2.25-5.13,3.55-9.22,4.21
 c-0.11-0.32-0.39-0.75-0.64-1.05c3.89-0.53,7.14-1.69,8.7-3.66L42.86,138.55z M36.47,127.49h-3.4v-1.03h4.51v5.52
 c0,0.53-0.11,0.75-0.47,0.9c-0.34,0.15-0.94,0.15-1.77,0.15c-0.02-0.28-0.13-0.6-0.24-0.85h1.16c0.17-0.02,0.21-0.06,0.21-0.21
 V127.49z M33.98,127.84c0.54,0.47,1.24,1.17,1.6,1.6L34.76,130c-0.34-0.43-1.01-1.15-1.56-1.67L33.98,127.84z M41.08,137.14
 c-1.56,1.33-4.21,2.37-6.69,2.93c-0.15-0.24-0.45-0.62-0.71-0.86c2.39-0.47,5-1.41,6.35-2.57L41.08,137.14z M39.52,135.47
 c-1.22,1.03-3.21,1.94-4.94,2.46c-0.19-0.23-0.49-0.54-0.75-0.75c1.65-0.45,3.63-1.28,4.68-2.18L39.52,135.47z M41.54,130.68
 c-1,0.45-2.01,0.96-2.91,1.35l-0.53-0.86c0.85-0.3,2.01-0.79,3.23-1.32L41.54,130.68z M41.69,127.49H38.2v-1.03h4.64v5.47
 c0,0.54-0.09,0.81-0.47,0.98c-0.36,0.17-0.92,0.17-1.75,0.17c-0.02-0.3-0.13-0.66-0.26-0.96h1.13c0.17,0,0.21-0.04,0.21-0.21
 V127.49z M39.18,127.86c0.53,0.47,1.22,1.15,1.6,1.58l-0.81,0.58c-0.34-0.43-1.03-1.15-1.56-1.67L39.18,127.86z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M51.97,135.73v6.91h-1.24v-6.91h-2.22c-0.13,2.35-0.66,5.15-2.39,7.1c-0.21-0.24-0.69-0.69-0.96-0.83
 c1.58-1.8,2.01-4.21,2.12-6.27h-1.9v-1.28h1.93v-0.04v-3.68h-1.69v-1.28h4.43c0.45-1.01,1.01-2.65,1.3-3.77l1.3,0.43
 c-0.39,1.11-0.88,2.38-1.31,3.34h2.22v1.28h-1.6v3.72h1.77v1.28H51.97z M47.87,129.12c-0.23-0.75-0.75-1.99-1.18-2.91l1.11-0.36
 c0.43,0.9,0.98,2.12,1.2,2.82L47.87,129.12z M50.73,134.45v-3.72h-2.18v3.68v0.04H50.73z M61.23,141.42c0.47,0,0.56-0.7,0.64-3.34
 c0.32,0.3,0.66,0.51,1.01,0.6c-0.17,3.04-0.32,3.96-1.65,3.96h-0.96c-1.01,0-1.5-0.34-1.45-1.6l0.34-9.22h-3.19
 c-0.08,0.77-0.15,1.56-0.21,2.35c1.11,0.83,2.35,1.88,2.97,2.54l-0.58,1.13c-0.54-0.62-1.56-1.56-2.52-2.35
 c-0.17,2.03-0.38,3.93-0.56,5.43c0.98-0.17,2.05-0.38,3.1-0.58l0.09,1.17c-1.92,0.43-3.91,0.83-5.45,1.15l-0.34-1.28l1.3-0.23
 c0.47-3.38,1.01-8.9,1.28-13.13h-1.82v-1.28h8.96v1.28h-5.92c-0.06,0.81-0.13,1.67-0.21,2.55h4.4l-0.38,10.26
 c-0.02,0.54,0.11,0.6,0.41,0.6H61.23z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M73.81,131.69c-0.11,0.17-0.23,0.34-0.36,0.51c2.12,2.4,4.77,3.87,7.78,5.05c-0.32,0.3-0.7,0.77-0.9,1.18
 c-0.83-0.39-1.63-0.77-2.4-1.22v5.54h-1.41v-0.56h-7.7v0.64h-1.35v-5.39c-0.81,0.47-1.65,0.88-2.52,1.22
 c-0.21-0.34-0.56-0.81-0.88-1.13c3.44-1.28,6.74-3.61,8.53-6.37L73.81,131.69z M66.26,130.75h-1.35v-3.38h7.29
 c-0.21-0.49-0.49-1.07-0.75-1.52l1.43-0.34c0.34,0.56,0.73,1.3,0.96,1.86h6.63v3.38h-1.41v-2.1H66.26V130.75z M70.85,129.96
 c-1.24,1.62-3.14,3.17-4.85,4.15c-0.21-0.26-0.68-0.83-0.98-1.05c1.67-0.86,3.44-2.16,4.53-3.55L70.85,129.96z M76.52,140.93
 v-3.14h-7.7v3.14H76.52z M76.78,136.54c-1.48-0.92-2.82-2.01-4.06-3.38c-1.07,1.26-2.39,2.4-3.81,3.38H76.78z M75.22,129.53
 c1.71,1.01,3.87,2.55,4.92,3.63l-1,0.92c-1.01-1.07-3.12-2.69-4.85-3.76L75.22,129.53z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M99.02,138.4c-0.26-0.24-0.53-0.47-0.85-0.71v4.98H96.9v-0.49h-3.34v0.6h-1.24v-5.8h4.88
 c-1.2-0.83-2.63-1.65-4.13-2.37H89.5c-0.79,0.84-1.77,1.65-2.89,2.37h3.98v5.69h-1.3v-0.49H86.1v0.6h-1.24v-4.83
 c-0.45,0.21-0.92,0.43-1.39,0.6c-0.15-0.32-0.51-0.81-0.79-1.01c2.08-0.77,3.78-1.78,5.05-2.93h-4.64v-1.2h5.79
 c0.51-0.58,0.9-1.18,1.2-1.77h-5.6v-5.15h5.88v4.81l1.28,0.24c-0.32,0.62-0.7,1.26-1.13,1.86h5.37c-0.64-0.41-1.52-0.85-2.25-1.13
 l0.6-0.64h-1.75v-5.15h5.99v5.15h-3.94c0.88,0.34,1.92,0.84,2.48,1.3l-0.43,0.47h3.29v1.2h-4.4c1.8,0.96,3.48,2.01,4.53,2.97
 L99.02,138.4z M89.06,127.64h-3.34v2.85h3.34V127.64z M89.29,138.12H86.1v2.91h3.19V138.12z M96.9,141.03v-2.91h-3.34v2.91H96.9z
 M93.7,130.49h3.49v-2.85H93.7V130.49z"
                      ></path>
                    </g>
                    <line
                      fill="none"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      x1="46.51"
                      y1="63.32"
                      x2="46.51"
                      y2="88.35"
                    ></line>
                    <path
                      fill="none"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M37.46,46.28c0,12.6,0.14,25.21-0.08,37.8c-0.07,4.13,3.51,5.17,5.41,5.39
 c3.18,0.36,12.78,0,12.78,0V42.56c4.24,0,7.98,0,11.71,0c6.87,0,8.87-1.8,10.21-9.58c-11.8,0-23.54-0.47-35.22,0.18
 c-6.82,0.38-11.33,5.87-12.17,13.15c-0.44,4.06-0.44,8.16,0.01,12.23c0.38,3.63,2.24,6.62,6.29,7.46"
                    ></path>
                    <path
                      fill="white"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M55.13,19.21c0.06,4.76-3.75,8.66-8.5,8.73s-8.66-3.75-8.73-8.5c0-0.07,0-0.15,0-0.22
 c-0.06-4.76,3.75-8.66,8.5-8.73s8.66,3.75,8.73,8.5C55.13,19.06,55.13,19.13,55.13,19.21z"
                    ></path>
                    <path
                      fill="none"
                      stroke="#09660"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M91.93,52.78c-0.15-1.32-1.2-2.34-2.52-2.46"
                    ></path>
                    <path
                      fill="none"
                      stroke="#09660"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M89.89,69.32c0.73-0.38,1.51-0.65,2.32-0.79c1.45-0.12,2.63-1.23,2.82-2.68
 c0.17-2.05,1.9-3.63,3.96-3.61c0.57,0.01,1.11-0.28,1.4-0.77"
                    ></path>
                    <path
                      fill="none"
                      stroke="#09660"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M100.97,75.66l-0.92-0.02c-0.22-1.66-0.9-2.14-2.63-2.01c-2.33,0.26-4.64-0.61-6.21-2.34
 c-1.59-1.72-3.21-3.41-4.86-5.09c-0.58-0.49-0.93-1.21-0.96-1.97"
                    ></path>
                    <path
                      fill="none"
                      stroke="#09660"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M82.88,61.6c2.86-2.73,5.76-5.42,8.54-8.22c0.32-0.39,0.87-0.51,1.33-0.29
 c1.04,0.25,1.69,1.29,1.44,2.33c-0.1,0.43-0.34,0.81-0.69,1.08l-7.07,6.74c-1.36,1.3-2.46,1.1-3.3-0.63
 c-0.14-0.29-0.24-0.62-0.35-0.93"
                    ></path>
                    <path
                      fill="none"
                      stroke="#09660"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M80.59,58.68c2.77-2.64,5.3-5,8.07-7.64c0.9-0.87,0.93-1.44,0.05-2.39
 c-1.36-1.46-2.76-2.89-4.13-4.34c-0.39-0.57-1.17-0.72-1.74-0.33c-0.11,0.08-0.21,0.17-0.29,0.28c-2.63,2.52-5.27,5.04-7.92,7.55
 c-0.57,0.39-0.72,1.17-0.33,1.74c0.08,0.11,0.17,0.21,0.28,0.29c1.39,1.44,2.77,2.88,4.13,4.35c0.27,0.3,0.62,0.52,1.01,0.63
 c0.37,0.11,0.64,0.2,0.71,0.6c0.23,1.12,1.13,1.99,2.26,2.17"
                    ></path>
                    <path
                      fill="none"
                      stroke="#09660"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M94.45,55.6c0.77,0.04,1.47,0.43,1.92,1.05c1.29,1.64,2.69,3.18,4.21,4.61
 c2.18,1.77,3.16,4.62,2.52,7.35c-0.2,1.17,0.58,1.9,2.05,2.17c0.06,0.51-0.15,1.01-0.55,1.32c-1.25,1.05-2.45,2.17-3.58,3.34
 c0.38,0.7,0.89,1.31,1.51,1.8c0.37,0.48,1.05,0.57,1.53,0.2c0.09-0.07,0.16-0.14,0.22-0.23c0.68-0.72,1.44-1.38,2.16-2.08
 c0.84-0.81,0.87-1.18,0.04-2.02c-0.43-0.43-0.72-1.01-1.35-1.24"
                    ></path>
                    <circle
                      opacity="0.2"
                      fill="#4EB47D"
                      cx="77.31"
                      cy="39.67"
                      r="17.92"
                    ></circle>
                  </g>
                </svg>
              </svg>
              <animate
                attributeName="opacity"
                data-values="1;0.3333333333333333;0.7333333333333333;1"
                values="1;1;1;1;1;0.1;0.4666666666666667;0.6666666666666666;0.7333333333333333;94;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                data-dur="1.9249999999999998s"
                dur="30s"
                begin="0.35s"
                data-begin="1.0499999999999998s"
                repeatCount="indefinite"
                fill="freeze"
              ></animate>
            </g>
            <g>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                viewBox="0 0 93 93"
                x="175.675"
                y="54.5"
                width="85.65"
                height="80"
              >
                <path
                  fill="none"
                  stroke="black"
                  stroke-width="2.43"
                  stroke-miterlimit="10"
                  d="M51.27,76.88H10.3V43.48l40.97-10.81
 V76.88z"
                ></path>
                <rect
                  x="9.57"
                  y="22.83"
                  fill="none"
                  width="82.31"
                  height="68.24"
                ></rect>
                <path
                  fill="white"
                  d="M41.77,76.88h40.97V34.65L41.77,23.78
 V76.88z"
                ></path>
                <path
                  fill="none"
                  stroke="black"
                  stroke-width="2.43"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  d="M41.77,76.88h40.97V34.65L41.77,23.78
 V76.88z"
                ></path>
                <rect
                  x="9.57"
                  y="22.83"
                  fill="none"
                  width="82.31"
                  height="68.24"
                ></rect>
                <rect x="16.53" y="50.02" width="8.1" height="8.1"></rect>
                <rect x="16.53" y="61.57" width="8.1" height="8.1"></rect>
                <rect x="27.6" y="61.57" width="8.1" height="8.1"></rect>
                <rect x="27.6" y="50.02" width="8.1" height="8.1"></rect>
                <path
                  fill="none"
                  stroke="black"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  d="M62.01,44.38c-7.49,0-13.57,6.07-13.57,13.57s6.07,13.57,13.57,13.57c7.49,0,13.57-6.07,13.57-13.57
 C75.58,50.46,69.5,44.39,62.01,44.38"
                ></path>
                <rect
                  x="9.57"
                  y="22.83"
                  fill="none"
                  width="82.31"
                  height="68.24"
                ></rect>
                <g>
                  <path
                    fill="#099660"
                    stroke-width="0"
                    d="M54.52,53.88h3.42c0.77,0,1.36,0.06,1.77,0.18c0.54,0.16,1.01,0.44,1.4,0.85s0.68,0.91,0.89,1.5
 s0.3,1.32,0.3,2.19c0,0.76-0.09,1.42-0.28,1.97c-0.23,0.68-0.56,1.22-0.99,1.64c-0.32,0.32-0.76,0.56-1.32,0.74
 c-0.41,0.13-0.97,0.2-1.66,0.2h-3.52V53.88z M56.4,55.44v6.14h1.4c0.52,0,0.9-0.03,1.13-0.09c0.3-0.08,0.56-0.2,0.76-0.39
 c0.2-0.18,0.36-0.48,0.49-0.9c0.13-0.42,0.19-0.98,0.19-1.7c0-0.72-0.06-1.27-0.19-1.65c-0.13-0.38-0.3-0.68-0.53-0.9
 c-0.23-0.21-0.52-0.36-0.87-0.44c-0.26-0.06-0.77-0.09-1.54-0.09H56.4z"
                  ></path>
                  <path
                    fill="#099660"
                    stroke-width="0"
                    d="M63.9,63.15v-9.28h6.36v1.57h-4.49v2.2h3.87v1.57h-3.87v3.94H63.9z"
                  ></path>
                </g>
                <circle
                  opacity="0.2"
                  fill="#4EB47D"
                  cx="42.02"
                  cy="27.94"
                  r="14.58"
                ></circle>
              </svg>
              <text
                font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                fill="#099660"
                font-size="12"
                x="188.5"
                y="139.5"
              >
                資源回收站
              </text>
              <animate
                attributeName="opacity"
                data-values="1;0.3333333333333333;0.7333333333333333;1"
                values="1;1;1;1;1;1;1;1;1;0.1;0.4666666666666667;0.6666666666666666;0.7333333333333333;94;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                data-dur="1.9249999999999998s"
                dur="30s"
                begin="0.35s"
                data-begin="2.4499999999999997s"
                repeatCount="indefinite"
                fill="freeze"
              ></animate>
            </g>
            <g>
              <svg
                x="10"
                y="144.5"
                width="78"
                height="113.4235807860262"
                viewBox="0 0 114.5 166.5"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 114.5 166.5"
                  style="enable-background: new 0 0 114.5 166.5"
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        fill="#099660"
                        d="M38.58,101.04c-0.96,2.92-2.67,5.37-4.68,6.98c-0.22-0.26-0.76-0.74-1.07-0.95
 c2.03-1.41,3.59-3.68,4.42-6.36L38.58,101.04z M46.08,106.6c0,0-0.02,0.45-0.03,0.62c-0.24,5.28-0.48,7.26-1.07,7.91
 c-0.36,0.43-0.72,0.55-1.34,0.62c-0.55,0.05-1.63,0.02-2.7-0.03c-0.02-0.4-0.17-0.91-0.41-1.29c1.12,0.1,2.17,0.12,2.58,0.12
 c0.36,0,0.55-0.03,0.72-0.22c0.45-0.43,0.69-2.15,0.89-6.48h-4.44c-0.45,3.4-1.56,6.5-5.93,8.1c-0.15-0.34-0.52-0.84-0.83-1.12
 c4.04-1.36,4.99-4.08,5.4-6.98h-3.51v-1.24H46.08z M43.89,100.44c0.86,2.7,2.7,5.16,4.88,6.4c-0.27,0.28-0.69,0.79-0.91,1.15
 c-2.13-1.38-3.9-3.78-4.88-6.35h-3.04v-1.2H43.89z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M54.53,108.54c-0.21,1.41-0.55,2.67-0.96,3.73c1.13,1.91,3.3,2.18,6.55,2.18c1.82,0,4.32-0.09,6.09-0.24
 c-0.21,0.29-0.34,0.88-0.41,1.24c-1.62,0.09-3.78,0.14-5.67,0.14c-3.49,0-5.67-0.34-7.02-2.29c-0.6,1.1-1.31,1.96-2.12,2.58
 c-0.17-0.27-0.58-0.71-0.84-0.88c1.5-1.07,2.58-2.98,3.1-5.62H51.7c-0.38,0-0.84,0.12-0.98,0.24c-0.07-0.31-0.31-0.89-0.45-1.15
 c0.24-0.07,0.48-0.17,0.76-0.5c0.31-0.36,1.14-1.75,1.72-2.82h-2.29v-1.07h2.96l0.21-0.09l0.84,0.34
 c-0.58,0.98-1.65,2.82-2.44,3.99h1.67l0.22-0.03L54.53,108.54z M52.95,103.57c-0.46-0.72-1.41-1.89-2.17-2.73l0.95-0.58
 c0.79,0.84,1.72,1.93,2.2,2.61L52.95,103.57z M65.83,111H54.65v-1h3.08v-1.58h-2.37v-1h2.37v-1.24h1.19v1.24h2.68v-1.24h1.19v1.24
 h2.49v1h-2.49V110h3.04V111z M59.97,104.45c-0.05,0.29-0.1,0.69-0.1,0.91c-3.82,0.69-4.32,0.79-4.61,0.96
 c-0.07-0.29-0.31-0.77-0.45-1.03c0.19-0.1,0.45-0.31,0.45-0.96v-3.51h4.56v2.89h-3.53v1.31L59.97,104.45z M59.44,111.55
 c-0.91,0.84-2.3,1.72-3.47,2.27c-0.22-0.24-0.69-0.64-0.98-0.79c1.22-0.48,2.51-1.17,3.32-1.87L59.44,111.55z M56.29,101.68v1.15
 h2.42v-1.15H56.29z M58.92,110h2.68v-1.58h-2.68V110z M62.17,105.89c-1.19,0-1.48-0.43-1.48-1.58v-3.47h4.66v2.89h-3.59v0.6
 c0,0.48,0.07,0.64,0.45,0.64h2.34c0.29,0,0.83-0.02,1.12-0.07c0.02,0.27,0.05,0.67,0.1,0.91c-0.26,0.07-0.74,0.09-1.19,0.09H62.17
 z M64.42,113.75c-0.72-0.64-2.01-1.43-3.27-2.03l0.86-0.58c1.27,0.6,2.72,1.39,3.54,2.03L64.42,113.75z M61.76,101.7v1.15h2.48
 v-1.15H61.76z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M70.04,102.78v4.18c0,2.61-0.21,6.36-1.44,8.89c-0.19-0.24-0.71-0.62-0.98-0.72
 c1.13-2.41,1.24-5.73,1.24-8.17v-5.28h6.95c-0.19-0.45-0.52-1-0.83-1.39l1.12-0.46c0.43,0.52,0.86,1.22,1.05,1.69l-0.4,0.17h6.55
 v1.1H70.04z M71.9,106.44c-0.21-0.65-0.74-1.6-1.31-2.3l0.83-0.4c0.58,0.67,1.15,1.62,1.34,2.24L71.9,106.44z M82.61,106.86
 c-0.29,1.94-0.79,3.82-1.63,5.45c0.69,1.15,1.56,2.06,2.63,2.65c-0.24,0.19-0.58,0.62-0.76,0.93c-1.01-0.62-1.84-1.5-2.49-2.56
 c-0.72,1.03-1.63,1.93-2.79,2.61c-0.12-0.21-0.36-0.52-0.55-0.74c-0.09,0.1-0.19,0.17-0.33,0.24c-0.41,0.17-1.05,0.19-2.06,0.17
 c-0.05-0.29-0.19-0.69-0.33-0.96c0.77,0.02,1.43,0.02,1.62,0c0.22,0,0.29-0.05,0.29-0.26v-6.43h-4.51v7.79h-0.95v-8.79h2.6v-3.71
 h1.1v3.71h2.73v1.41c0.81-1.38,1.38-3.25,1.72-5.12l1.13,0.22c-0.15,0.77-0.36,1.56-0.58,2.3h3.89v1.08H82.61z M73.24,113.12v0.62
 h-0.67v-4.57h2.75v3.96H73.24z M73.24,110.04v2.2h1.41v-2.2H73.24z M74.84,106.14c0.43-0.65,0.98-1.72,1.29-2.42l1.01,0.33
 c-0.48,0.84-1.03,1.79-1.48,2.42L74.84,106.14z M77.2,114.41c0,0.21-0.02,0.38-0.05,0.53c1.13-0.71,1.99-1.63,2.63-2.7
 c-0.55-1.14-0.96-2.46-1.29-3.89c-0.22,0.5-0.48,0.96-0.77,1.36c-0.1-0.1-0.31-0.29-0.52-0.45V114.41z M79.14,106.86
 c0.26,1.55,0.65,2.99,1.2,4.27c0.6-1.32,0.93-2.79,1.13-4.27H79.14z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#099660"
                        d="M20.11,129.43c0-3.11,0.87-5.68,2.33-8.05l0.9,0.41c-1.38,2.27-2.03,4.94-2.03,7.63
 c0,2.7,0.65,5.38,2.03,7.63l-0.9,0.43C20.98,135.11,20.11,132.56,20.11,129.43z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#099660"
                        d="M30.31,130.67c-0.32-0.52-1.08-1.54-1.67-2.33v7.43h-1.08v-6.98c-0.63,1.7-1.45,3.36-2.31,4.35
 c-0.12-0.31-0.39-0.76-0.6-1.02c1.11-1.21,2.21-3.46,2.75-5.47h-2.25v-1.03h2.41v-3.11h1.08v3.11h1.98v1.03h-1.98v0.38
 c0.54,0.58,1.99,2.28,2.36,2.7L30.31,130.67z M38.1,126.67h-1.5v7.65c0,0.74-0.19,1.08-0.67,1.24c-0.48,0.19-1.34,0.22-2.56,0.22
 c-0.06-0.31-0.23-0.8-0.39-1.11c0.95,0.03,1.88,0.01,2.15,0.01c0.26-0.01,0.36-0.09,0.36-0.35v-6.19
 c-1.15,2.09-2.81,4.14-4.41,5.35c-0.19-0.28-0.51-0.65-0.77-0.87c1.82-1.24,3.72-3.66,4.8-5.95h-3.96v-1.03h4.33v-3.1h1.11v3.1
 h1.5V126.67z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M41.7,125.51c-0.17,0.77-0.54,1.57-1.31,2.2c-0.15-0.2-0.52-0.57-0.71-0.68c1.02-0.8,1.18-1.82,1.18-2.63
 v-1.18c1.5-0.12,3.3-0.35,4.28-0.64l0.67,0.65c-1.05,0.32-2.59,0.55-4,0.65v0.52c0,0.09,0,0.19,0,0.28h4.25v0.83h-1.61v1.76h-0.99
 v-1.76H41.7z M44.92,134.04c-1.18,0.68-3.1,1.4-4.54,1.83c-0.09-0.2-0.38-0.71-0.54-0.93c1.4-0.31,3.18-0.83,4.25-1.35
 L44.92,134.04z M41.69,127.56h9.06v5.95h-9.06V127.56z M42.73,129.3h6.94v-1.02h-6.94V129.3z M42.73,131.02h6.94V130h-6.94V131.02
 z M42.73,132.78h6.94v-1.06h-6.94V132.78z M52.68,124.68v0.83h-2.25v1.8h-0.99v-1.8h-1.89c-0.15,0.7-0.44,1.41-1.03,1.96
 c-0.16-0.17-0.57-0.45-0.79-0.55c0.86-0.83,1-1.85,1-2.65v-1.08c1.61-0.1,3.5-0.32,4.51-0.63l0.74,0.64
 c-1.13,0.33-2.81,0.55-4.32,0.65v0.41c0,0.13,0,0.26-0.01,0.41H52.68z M48.07,133.58c1.64,0.44,3.36,1,4.45,1.45L52,135.82
 c-1.05-0.47-2.72-1.08-4.35-1.54L48.07,133.58z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M59.11,123.28c-0.81,2.47-2.25,4.54-3.96,5.9c-0.19-0.22-0.64-0.63-0.9-0.8c1.72-1.19,3.04-3.11,3.74-5.38
 L59.11,123.28z M65.45,127.98c0,0-0.01,0.38-0.03,0.52c-0.2,4.46-0.41,6.14-0.9,6.69c-0.31,0.36-0.61,0.47-1.13,0.52
 c-0.47,0.04-1.38,0.01-2.28-0.03c-0.01-0.33-0.15-0.77-0.35-1.09c0.94,0.09,1.83,0.1,2.18,0.1c0.31,0,0.47-0.03,0.61-0.19
 c0.38-0.36,0.58-1.82,0.76-5.48h-3.75c-0.38,2.88-1.32,5.5-5.02,6.85c-0.13-0.29-0.44-0.71-0.7-0.95c3.42-1.15,4.22-3.45,4.57-5.9
 h-2.97v-1.05H65.45z M63.61,122.77c0.73,2.28,2.28,4.36,4.13,5.41c-0.23,0.23-0.58,0.67-0.77,0.97c-1.8-1.16-3.3-3.2-4.13-5.37
 h-2.57v-1.02H63.61z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M72.61,129.62c-0.17,1.19-0.47,2.25-0.81,3.16c0.96,1.61,2.79,1.85,5.54,1.85c1.54,0,3.65-0.07,5.15-0.2
 c-0.17,0.25-0.29,0.74-0.35,1.05c-1.37,0.07-3.2,0.12-4.8,0.12c-2.95,0-4.8-0.29-5.93-1.93c-0.51,0.93-1.1,1.66-1.79,2.18
 c-0.15-0.23-0.49-0.6-0.71-0.74c1.27-0.9,2.18-2.52,2.62-4.76h-1.31c-0.32,0-0.71,0.1-0.83,0.2c-0.06-0.26-0.26-0.76-0.38-0.97
 c0.2-0.06,0.41-0.15,0.64-0.42c0.26-0.31,0.96-1.48,1.45-2.38h-1.93v-0.9h2.5l0.17-0.07l0.71,0.29c-0.49,0.83-1.4,2.38-2.06,3.37
 h1.41l0.19-0.03L72.61,129.62z M71.28,125.42c-0.39-0.61-1.19-1.6-1.83-2.31l0.8-0.49c0.67,0.71,1.45,1.63,1.86,2.21L71.28,125.42
 z M82.17,131.7h-9.45v-0.84h2.6v-1.34h-2.01v-0.84h2.01v-1.05h1v1.05h2.27v-1.05h1v1.05h2.11v0.84h-2.11v1.34h2.57V131.7z
 M77.21,126.16c-0.04,0.25-0.09,0.58-0.09,0.77c-3.23,0.58-3.65,0.67-3.9,0.81c-0.06-0.25-0.26-0.65-0.38-0.87
 c0.16-0.09,0.38-0.26,0.38-0.81v-2.97h3.85v2.44H74.1v1.1L77.21,126.16z M76.76,132.17c-0.77,0.71-1.95,1.45-2.94,1.92
 c-0.19-0.2-0.58-0.54-0.83-0.67c1.03-0.41,2.12-0.99,2.81-1.58L76.76,132.17z M74.1,123.82v0.97h2.05v-0.97H74.1z M76.32,130.86
 h2.27v-1.34h-2.27V130.86z M79.07,127.38c-1,0-1.25-0.36-1.25-1.34v-2.94h3.94v2.44h-3.04v0.51c0,0.41,0.06,0.54,0.38,0.54h1.98
 c0.25,0,0.7-0.01,0.94-0.06c0.01,0.23,0.04,0.57,0.09,0.77c-0.22,0.06-0.62,0.07-1,0.07H79.07z M80.98,134.03
 c-0.61-0.54-1.7-1.21-2.76-1.72l0.73-0.49c1.08,0.51,2.3,1.18,3,1.72L80.98,134.03z M78.72,123.83v0.97h2.09v-0.97H78.72z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M84.7,128.04l0.95-0.83c1.03,0.84,2.36,2.15,3.26,3.23l-0.99,0.83C86.97,130.12,85.74,128.88,84.7,128.04z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#099660"
                        d="M31.8,150.16v5.35h-0.96v-5.35h-1.72c-0.1,1.82-0.51,3.98-1.85,5.5c-0.16-0.19-0.54-0.54-0.74-0.64
 c1.22-1.4,1.56-3.26,1.64-4.86h-1.47v-0.99h1.5v-0.03v-2.85H26.9v-0.99h3.43c0.35-0.79,0.79-2.05,1-2.92l1,0.33
 c-0.31,0.86-0.68,1.85-1.02,2.59h1.72v0.99H31.8v2.88h1.37v0.99H31.8z M28.63,145.04c-0.17-0.58-0.58-1.54-0.92-2.25l0.86-0.28
 c0.33,0.7,0.76,1.64,0.93,2.18L28.63,145.04z M30.84,149.17v-2.88h-1.69v2.85v0.03H30.84z M38.96,154.56
 c0.36,0,0.44-0.54,0.49-2.59c0.25,0.23,0.51,0.39,0.79,0.47c-0.13,2.36-0.25,3.07-1.28,3.07h-0.74c-0.79,0-1.16-0.26-1.12-1.24
 l0.26-7.14h-2.47c-0.06,0.6-0.12,1.21-0.16,1.82c0.86,0.64,1.82,1.45,2.3,1.96l-0.45,0.87c-0.42-0.48-1.21-1.21-1.95-1.82
 c-0.13,1.57-0.29,3.04-0.44,4.2c0.76-0.13,1.58-0.29,2.4-0.45l0.07,0.9c-1.48,0.33-3.02,0.64-4.22,0.89l-0.26-0.99l1-0.17
 c0.36-2.62,0.79-6.89,0.99-10.16h-1.41v-0.99h6.94v0.99h-4.58c-0.04,0.62-0.1,1.29-0.16,1.98h3.4l-0.29,7.94
 c-0.01,0.42,0.09,0.47,0.32,0.47H38.96z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M41.47,143.29h5.13v0.99h-2.43c-0.17,1.15-0.38,2.25-0.65,3.3h2.63v6.14h-2.72v1.22H42.5v-4.48
 c-0.19,0.39-0.39,0.77-0.63,1.1c-0.12-0.25-0.45-0.73-0.65-0.96c1.02-1.53,1.58-3.85,1.92-6.33h-1.67V143.29z M45.19,148.51h-1.76
 v4.25h1.76V148.51z M52.54,151.68h2.15v0.84h-2.15v2.02c0,0.51-0.09,0.77-0.48,0.92c-0.38,0.16-0.95,0.16-1.86,0.16
 c-0.04-0.26-0.19-0.64-0.32-0.89c0.67,0.01,1.25,0.01,1.41,0c0.19,0,0.23-0.04,0.23-0.22v-1.99h-4.89v-0.84h4.89v-0.9
 c-1.76,0.06-3.43,0.1-4.73,0.13l-0.07-0.89c0.92,0,2.11-0.01,3.4-0.03v-0.96h-2.84v-3.84h2.84v-0.77h-3.14v-0.87h3.14v-1.05h1
 v1.05h3.37v0.87h-3.37v0.77h2.91v3.84H52.9c0.7,0.54,1.48,1.25,1.88,1.76l-0.76,0.48c-0.12-0.17-0.29-0.36-0.48-0.57l-1,0.03
 V151.68z M48.45,152.59c0.63,0.48,1.28,1.15,1.58,1.6l-0.77,0.57c-0.29-0.46-0.95-1.19-1.53-1.69L48.45,152.59z M48.23,146.78
 h1.89v-0.92h-1.89V146.78z M50.12,148.35v-0.93h-1.89v0.93H50.12z M51.13,145.87v0.92h1.92v-0.92H51.13z M53.05,147.42h-1.92v0.93
 h1.92V147.42z M51.13,149.98l1.63-0.03c-0.25-0.23-0.51-0.45-0.76-0.64l0.49-0.28h-1.37V149.98z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M61.63,149.52c-0.71,0.22-1.44,0.45-2.15,0.65v4.03c0,0.63-0.15,0.9-0.52,1.08c-0.38,0.19-0.97,0.2-1.98,0.2
 c-0.04-0.29-0.2-0.73-0.35-1.02c0.7,0.01,1.32,0.01,1.5,0.01c0.2,0,0.29-0.07,0.29-0.29v-3.68c-0.71,0.2-1.38,0.41-1.98,0.58
 L56.12,150c0.64-0.16,1.44-0.38,2.3-0.6v-3.1h-2.17v-1.03h2.17v-2.89h1.06v2.89h2.01v1.03h-2.01v2.78l2.02-0.57L61.63,149.52z
 M69.41,144.65h-2.57v9.41c0,0.74-0.19,1.11-0.71,1.28c-0.52,0.2-1.42,0.22-2.79,0.22c-0.07-0.32-0.28-0.86-0.45-1.16
 c1.06,0.04,2.12,0.04,2.43,0.03c0.28-0.01,0.39-0.1,0.39-0.38v-9.39h-4.14v-1.06h7.85V144.65z"
                      ></path>
                      <path
                        fill="#099660"
                        d="M74.2,145.33c-0.77,1.09-1.63,2.04-2.52,2.76c-0.2-0.2-0.62-0.61-0.9-0.79c1.6-1.18,3.02-3.05,3.87-5.03
 l1.09,0.32c-0.26,0.6-0.57,1.16-0.89,1.7h8.03v0.51c-0.16,4.83-0.31,6.51-0.71,7.04c-0.25,0.33-0.52,0.45-0.92,0.49
 c-0.38,0.04-1,0.04-1.69,0c-0.01-0.3-0.13-0.74-0.28-1.03c0.62,0.06,1.21,0.07,1.45,0.06c0.22,0.01,0.35-0.01,0.48-0.19
 c0.28-0.35,0.44-1.82,0.55-5.85H74.2z M81.52,154.3c1.24,0,1.44-0.32,1.6-1.82c0.26,0.17,0.73,0.33,1.03,0.39
 c-0.22,1.91-0.65,2.44-2.62,2.44h-5.48c-2.27,0-2.94-0.39-2.94-2.01v-6.49h5.9v4.29h-4.84v2.2c0,0.79,0.28,0.99,1.82,0.99H81.52z
 M74.17,147.8v2.34h3.78v-2.34H74.17z"
                      ></path>
                    </g>
                    <g>
                      <path
                        fill="#099660"
                        d="M85.65,156.9c1.37-2.25,2.03-4.93,2.03-7.63c0-2.7-0.67-5.36-2.03-7.63l0.89-0.41
 c1.48,2.36,2.35,4.93,2.35,8.04c0,3.13-0.87,5.68-2.35,8.06L85.65,156.9z"
                      ></path>
                    </g>
                    <rect x="28" y="34.33" width="17.55" height="17.55"></rect>
                    <rect
                      x="48.9"
                      y="34.33"
                      width="17.55"
                      height="17.55"
                    ></rect>
                    <path
                      fill="#099660"
                      d="M85.92,33.43l2.61,13.4l-13.4,2.61l-2.61-13.4L85.92,33.43z M87.46,31.14L70.24,34.5
 l3.36,17.23l17.23-3.36L87.46,31.14z"
                    ></path>
                    <rect x="28" y="56.76" width="17.55" height="17.55"></rect>
                    <rect
                      x="48.9"
                      y="56.76"
                      width="17.55"
                      height="17.55"
                    ></rect>
                    <path
                      fill="#099660"
                      d="M85.41,72.36H71.76V58.71h13.65V72.36z M87.36,56.75H69.81v17.56h17.55V56.75z"
                    ></path>
                    <rect
                      x="21.12"
                      y="81.32"
                      fill="white"
                      stroke="black"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      width="73.9"
                      height="4.4"
                    ></rect>
                    <line
                      fill="none"
                      stroke="black"
                      stroke-width="1.9"
                      stroke-miterlimit="10"
                      x1="44.46"
                      y1="81.57"
                      x2="44.46"
                      y2="85.47"
                    ></line>
                    <line
                      fill="none"
                      stroke="black"
                      stroke-width="1.9"
                      stroke-miterlimit="10"
                      x1="71.42"
                      y1="81.57"
                      x2="71.42"
                      y2="85.47"
                    ></line>
                    <g>
                      <path
                        d="M27.56,10.27h1.52l2.69,11.1h-1.55L27.56,10.27z"
                      ></path>
                      <path
                        d="M37,21.19V10.46h3.48c1.32,0,2.18,0.05,2.58,0.16c0.62,0.16,1.13,0.51,1.55,1.05c0.42,0.54,0.62,1.24,0.62,2.09
 c0,0.66-0.12,1.21-0.36,1.66s-0.54,0.8-0.91,1.06c-0.37,0.26-0.74,0.43-1.12,0.51c-0.52,0.1-1.27,0.15-2.25,0.15h-1.41v4.05H37z
 M39.17,12.27v3.05h1.19c0.85,0,1.43-0.06,1.71-0.17s0.51-0.29,0.68-0.53S43,14.1,43,13.79c0-0.39-0.11-0.71-0.34-0.97
 s-0.52-0.41-0.87-0.48c-0.26-0.05-0.78-0.07-1.56-0.07H39.17z"
                      ></path>
                      <path
                        d="M47.01,21.19V10.46h7.96v1.82h-5.79v2.38h5.39v1.81h-5.39v2.92h6v1.81H47.01z"
                      ></path>
                      <path
                        d="M61.18,21.19V10.46h3.48c1.32,0,2.18,0.05,2.58,0.16c0.62,0.16,1.13,0.51,1.55,1.05c0.42,0.54,0.62,1.24,0.62,2.09
 c0,0.66-0.12,1.21-0.36,1.66s-0.54,0.8-0.91,1.06c-0.37,0.26-0.74,0.43-1.12,0.51c-0.52,0.1-1.27,0.15-2.25,0.15h-1.41v4.05H61.18
 z M63.35,12.27v3.05h1.19c0.85,0,1.43-0.06,1.71-0.17s0.51-0.29,0.68-0.53s0.25-0.52,0.25-0.83c0-0.39-0.11-0.71-0.34-0.97
 s-0.52-0.41-0.87-0.48c-0.26-0.05-0.78-0.07-1.56-0.07H63.35z"
                      ></path>
                      <path
                        d="M71.19,21.19V10.46h3.48c1.32,0,2.18,0.05,2.58,0.16c0.62,0.16,1.13,0.51,1.55,1.05c0.42,0.54,0.62,1.24,0.62,2.09
 c0,0.66-0.12,1.21-0.36,1.66s-0.54,0.8-0.91,1.06c-0.37,0.26-0.74,0.43-1.12,0.51c-0.52,0.1-1.27,0.15-2.25,0.15h-1.41v4.05H71.19
 z M73.35,12.27v3.05h1.19c0.85,0,1.43-0.06,1.71-0.17s0.51-0.29,0.68-0.53s0.25-0.52,0.25-0.83c0-0.39-0.11-0.71-0.34-0.97
 s-0.52-0.41-0.87-0.48c-0.26-0.05-0.78-0.07-1.56-0.07H73.35z"
                      ></path>
                      <path
                        d="M83.97,21.38l2.66-11.1h1.55l-2.69,11.1H83.97z"
                      ></path>
                    </g>
                    <circle
                      opacity="0.2"
                      fill="#4EB47D"
                      cx="91.39"
                      cy="55.51"
                      r="14.85"
                    ></circle>
                  </g>
                </svg>
              </svg>
              <animate
                attributeName="opacity"
                data-values="1;0.3333333333333333;0.7333333333333333;1"
                values="1;1;1;1;1;1;1;1;1;1;1;1;1;0.1;0.4666666666666667;0.6666666666666666;0.7333333333333333;94;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                data-dur="1.9249999999999998s"
                dur="30s"
                begin="0.35s"
                data-begin="3.8499999999999996s"
                repeatCount="indefinite"
                fill="freeze"
              ></animate>
            </g>
            <g>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                viewBox="0 0 93 93"
                x="20"
                y="319.5"
                width="72.15"
                height="80"
              >
                <path
                  fill="white"
                  d="M82.85,39.65
 c-4.79-6.54-17.55-11.04-32.8-11.04s-28.01,4.51-32.8,11.04c2.21-11.62,16.08-20.61,32.8-20.61S80.64,28.02,82.85,39.65"
                ></path>
                <path
                  stroke="black"
                  stroke-width="0.9"
                  d="M50.05,19.01
 c14.66,0,27.07,7.02,30.97,16.59c-6.12-5.29-17.62-8.75-30.97-8.75s-24.85,3.46-30.97,8.75C22.99,26.02,35.39,19.01,50.05,19.01
 M50.05,17.29c-18.76,0-33.97,11.07-33.97,24.73c0,0.51,0.03,1.01,0.07,1.51c1.07-8.34,15.84-14.96,33.9-14.96
 s32.83,6.61,33.9,14.96c0.04-0.5,0.07-1,0.07-1.51C84.02,28.36,68.81,17.29,50.05,17.29"
                ></path>
                <path
                  fill="white"
                  d="M78.92,42.36
 c-0.16,1.88-0.6,3.72-1.31,5.47c0.88-1.34,1.36-2.9,1.38-4.5C78.99,43.01,78.97,42.68,78.92,42.36"
                ></path>
                <path
                  stroke="black"
                  stroke-width="0.9"
                  d="M50.05,28.49
 c15.86,0,29.58,5.37,31.92,12.5l0.33,1v29.84h-64.5V41.99l0.33-1C20.47,33.87,34.19,28.49,50.05,28.49 M50.05,26.76
 c-16.96,0-31.01,5.93-33.56,13.69h-0.41v33.11h67.94V40.45h-0.41C81.07,32.69,67.01,26.76,50.05,26.76"
                ></path>
                <rect x="24.64" y="58.95" width="12.9" height="13.82"></rect>
                <rect
                  x="63.47"
                  y="59.86"
                  fill="white"
                  width="11.09"
                  height="12.01"
                ></rect>
                <rect
                  x="46.37"
                  y="59.86"
                  fill="white"
                  width="11.09"
                  height="12.01"
                ></rect>
                <path
                  d="M73.65,71.64h-9.28V60.87h9.28V71.64z M75.46,58.95
 h-12.9v14.61h12.9V58.95z"
                ></path>
                <path
                  d="M55.65,71.64h-9.28V60.87h9.28V71.64z M57.46,58.95
 h-12.9v14.61h12.9V58.95z"
                ></path>
                <path
                  fill="#099660"
                  d="M61.15,44.92
 c0,6.13-4.96,11.1-11.09,11.1c-6.13,0-11.1-4.96-11.1-11.09s4.96-11.1,11.09-11.1c0,0,0,0,0,0C56.18,33.83,61.15,38.8,61.15,44.92"
                ></path>
                <path
                  fill="white"
                  d="M42.71,40.82h3.13
 c0.54-0.02,1.08,0.03,1.61,0.16c0.49,0.13,0.93,0.4,1.28,0.76c0.36,0.38,0.64,0.83,0.81,1.33c0.2,0.63,0.29,1.28,0.28,1.94
 c0.01,0.59-0.08,1.18-0.26,1.75c-0.18,0.55-0.49,1.05-0.91,1.45c-0.35,0.31-0.76,0.53-1.2,0.65c-0.49,0.13-1,0.19-1.51,0.17h-3.22
 V40.82z M44.42,42.21v5.43h1.28c0.35,0.01,0.69-0.01,1.03-0.08c0.25-0.06,0.49-0.17,0.69-0.34c0.22-0.22,0.37-0.49,0.45-0.79
 c0.13-0.49,0.19-1,0.17-1.5c0.02-0.49-0.04-0.99-0.17-1.46c-0.09-0.3-0.26-0.57-0.49-0.79c-0.22-0.2-0.5-0.33-0.79-0.39
 c-0.47-0.07-0.94-0.09-1.4-0.08L44.42,42.21z"
                ></path>
                <path
                  fill="white"
                  d="M51.46,49.01v-8.19h5.93v1.38h-4.18
v1.94h3.61v1.38h-3.61v3.48L51.46,49.01z"
                ></path>
                <circle
                  opacity="0.2"
                  fill="#4EB47D"
                  cx="21.71"
                  cy="65.27"
                  r="16.2"
                ></circle>
              </svg>
              <text
                font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                fill="#099660"
                font-size="12"
                x="26.075000000000003"
                y="404.5"
              >
                再生處理廠
              </text>
              <animate
                attributeName="opacity"
                data-values="1;0.3333333333333333;0.7333333333333333;1"
                values="1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;0.1;0.4666666666666667;0.6666666666666666;0.7333333333333333;94;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                data-dur="1.9249999999999998s"
                dur="30s"
                begin="0.35s"
                data-begin="5.25s"
                repeatCount="indefinite"
                fill="freeze"
              ></animate>
            </g>
            <g>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                viewBox="0 0 93 93"
                x="302"
                y="319.5"
                width="75"
                height="80"
              >
                <path
                  fill="white"
                  stroke="black"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  d="M32.07,22.04
 c-0.14-7.17,5.55-13.1,12.71-13.25c7.17,0.15,12.86,6.08,12.71,13.25"
                ></path>
                <path
                  fill="#099660"
                  d="M59.95,31.28
 c0,1.44-1.17,2.61-2.61,2.62c-1.44,0-2.61-1.17-2.62-2.61c0-1.44,1.17-2.61,2.61-2.62c0,0,0,0,0.01,0
 C58.78,28.67,59.95,29.83,59.95,31.28"
                ></path>
                <path
                  fill="#099660"
                  d="M36.17,31.28
 c0,1.44-1.17,2.61-2.61,2.62c-1.44,0-2.61-1.17-2.62-2.61c0-1.44,1.17-2.61,2.61-2.62c0,0,0,0,0,0C35,28.67,36.17,29.83,36.17,31.28
 "
                ></path>
                <g>
                  <path
                    fill="#1A1818"
                    stroke="black"
                    stroke-width="0.3001"
                    stroke-miterlimit="4.001"
                    d="M48.15,62.23
 c-2.93,1.17-6.24,0.94-8.99-0.61c-0.62-0.34-1.37-0.73-0.87-1.6c0.46-0.78,1.11-0.35,1.71-0.06c4.27,2.31,9.61,0.8,12.02-3.41
 c0.59-1,0.8-1.68-0.62-2.27c-2.59-1.07-3.65-3.35-3.12-6.43c0.36-2.07,0.89-4.1,1.34-6.16c0.13-0.6,0.38-1.15,1.1-0.8
 c2.98,1.47,5.92,3.08,7.45,6.22c1.37,2.52,0.45,5.67-2.07,7.04c-0.04,0.02-0.08,0.04-0.12,0.07c-0.78,0.43-1.38,1.12-1.71,1.94
 C53.19,58.97,50.97,61.18,48.15,62.23 M55.22,52.4c1.59-1.27,1.98-2.47,1.4-4.05c-0.84-2.26-2.8-3.43-4.69-4.66
 c-0.45-0.29-0.65,0-0.74,0.38c-0.45,1.89-1.19,3.72-1.09,5.72c0.07,1.18,0.78,2.22,1.85,2.72c0.69,0.39,1.17,0.21,1.19-0.66
 c0.01-0.8-0.1-1.6-0.33-2.36c-0.18-0.62-0.51-1.37,0.41-1.62c0.92-0.26,1.26,0.49,1.42,1.18C54.88,50.1,55.01,51.18,55.22,52.4"
                  ></path>
                  <path
                    fill="none"
                    d="M48.15,62.23
 c-2.93,1.17-6.24,0.94-8.99-0.61c-0.62-0.34-1.37-0.73-0.87-1.6c0.46-0.78,1.11-0.35,1.71-0.06c4.27,2.31,9.61,0.8,12.02-3.41
 c0.59-1,0.8-1.68-0.62-2.27c-2.59-1.07-3.65-3.35-3.12-6.43c0.36-2.07,0.89-4.1,1.34-6.16c0.13-0.6,0.38-1.15,1.1-0.8
 c2.98,1.47,5.92,3.08,7.45,6.22c1.37,2.52,0.45,5.67-2.07,7.04c-0.04,0.02-0.08,0.04-0.12,0.07c-0.78,0.43-1.38,1.12-1.71,1.94
 C53.2,58.97,50.97,61.18,48.15,62.23z M55.22,52.4c1.59-1.27,1.98-2.47,1.4-4.05c-0.84-2.26-2.8-3.43-4.69-4.66
 c-0.45-0.29-0.65,0-0.74,0.38c-0.45,1.89-1.19,3.72-1.09,5.72c0.07,1.18,0.78,2.22,1.85,2.72c0.69,0.39,1.17,0.21,1.19-0.66
 c0.01-0.8-0.1-1.6-0.33-2.36c-0.18-0.62-0.51-1.37,0.41-1.62c0.92-0.26,1.26,0.49,1.42,1.18C54.88,50.1,55.01,51.18,55.22,52.4z"
                  ></path>
                  <path
                    fill="#1A1818"
                    stroke="black"
                    stroke-width="0.5001"
                    stroke-miterlimit="4.001"
                    d="M36.16,55.03
 c0.64-1.35,1.13-2.43,1.66-3.49c0.33-0.65,0.78-1.32,1.62-0.9c0.84,0.42,0.4,1.13,0.13,1.7c-0.82,1.72-1.68,3.42-2.5,5.14
 c-0.27,0.82-1.15,1.27-1.97,1c-0.09-0.03-0.17-0.06-0.25-0.11c-1.86-0.75-3.71-1.51-5.56-2.28c-0.53-0.23-1.05-0.56-0.8-1.24
 c0.27-0.72,0.92-0.73,1.52-0.5c1.03,0.38,2.04,0.85,3.05,1.26c0.27,0.11,0.58,0.3,0.84,0.06c0.26-0.24,0.04-0.56-0.03-0.84
 c-1.1-3.97,0.21-8.22,3.35-10.88c2.19-1.99,5.13-2.93,8.07-2.56c0.76,0.06,1.87-0.01,1.78,1.12c-0.09,1.17-1.15,0.85-1.91,0.79
 c-4.84-0.52-9.19,2.98-9.71,7.82c-0.07,0.64-0.07,1.28,0,1.91C35.52,53.74,35.76,54.44,36.16,55.03"
                  ></path>
                  <path
                    fill="none"
                    d="M36.16,55.03
 c0.64-1.35,1.13-2.43,1.66-3.49c0.33-0.65,0.78-1.32,1.62-0.9c0.84,0.42,0.4,1.13,0.13,1.7c-0.82,1.72-1.68,3.42-2.5,5.14
 c-0.27,0.82-1.15,1.27-1.97,1c-0.09-0.03-0.17-0.06-0.25-0.11c-1.86-0.75-3.71-1.51-5.56-2.28c-0.53-0.23-1.05-0.56-0.8-1.24
 c0.27-0.72,0.92-0.73,1.52-0.5c1.03,0.38,2.04,0.85,3.05,1.26c0.27,0.11,0.58,0.3,0.84,0.06c0.26-0.24,0.04-0.56-0.03-0.84
 c-1.1-3.97,0.21-8.22,3.35-10.88c2.19-1.99,5.13-2.93,8.07-2.56c0.76,0.06,1.87-0.01,1.78,1.12c-0.09,1.17-1.15,0.85-1.91,0.79
 c-4.84-0.52-9.19,2.98-9.71,7.82c-0.07,0.64-0.07,1.28,0,1.91C35.52,53.74,35.76,54.44,36.16,55.03z"
                  ></path>
                </g>
                <path
                  stroke="black"
                  d="M70.79,22.89l0.68,46.86
 c0,1.36-1.1,2.46-2.46,2.46H20.56c-1.35,0-2.45-1.08-2.47-2.43l0.68-46.89L70.79,22.89z M72.86,20.79H16.69l-0.71,48.96
 c0,2.52,2.05,4.57,4.57,4.56H69c2.52,0,4.57-2.04,4.57-4.56L72.86,20.79z"
                ></path>
                <circle
                  opacity="0.2"
                  fill="#4EB47D"
                  cx="69.5"
                  cy="70.9"
                  r="18"
                ></circle>
              </svg>
              <text
                font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                fill="#099660"
                font-size="12"
                x="303.5"
                y="409.5"
              >
                各類綠色商品
              </text>
              <animate
                attributeName="opacity"
                data-values="1;0.3333333333333333;0.7333333333333333;1"
                values="1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;0.1;0.4666666666666667;0.6666666666666666;0.7333333333333333;94;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                data-dur="1.9249999999999998s"
                dur="30s"
                begin="0.35s"
                data-begin="17.849999999999998s"
                repeatCount="indefinite"
                fill="freeze"
              ></animate>
            </g>
            <g>
              <g
                style="transform-origin: 74.5px center; transform: scale(-1, 1)"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                  viewBox="0 0 93 93"
                  x="45.5"
                  y="429.5"
                  width="58"
                  height="80"
                >
                  <g transform="translate(146.65 142.533)">
                    <path
                      stroke="black"
                      stroke-width="0.75"
                      d="M-109.77-113.23c0.18,0,0.35,0.12,0.4,0.29l6.91,20.21l0.4,1.16h4.87
 c0.4,0,0.73,0.33,0.73,0.73v17.72c0,0.4-0.33,0.73-0.73,0.73h-40.67c-0.4,0-0.72-0.33-0.73-0.73v-17.72c0-0.4,0.32-0.73,0.73-0.73
 h13.89v-21.26c0-0.23,0.18-0.41,0.41-0.41H-109.77z M-109.77-114.95h-13.79c-1.18,0-2.13,0.95-2.13,2.13v19.54h-12.16
 c-1.35,0-2.45,1.1-2.45,2.45v17.72c0,1.35,1.1,2.45,2.45,2.45h40.67c1.35,0,2.45-1.1,2.45-2.45c0,0,0,0,0,0v-17.72
 c0-1.35-1.1-2.45-2.45-2.45c0,0,0,0,0,0h-3.64l-1.57-4.59l-5.35-15.62C-108.03-114.37-108.85-114.95-109.77-114.95"
                    ></path>
                    <path
                      fill="none"
                      stroke="black"
                      stroke-width="2.52"
                      stroke-miterlimit="10"
                      d="M-89.72-114.95v43.24h24.93"
                    ></path>
                    <rect
                      x="-83.46"
                      y="-93.8"
                      fill="#004974"
                      width="17.81"
                      height="17.81"
                    ></rect>
                    <path
                      d="M-128.97-65.36c-2.93,0-5.31-2.38-5.31-5.31c0-2.93,2.38-5.31,5.31-5.31s5.31,2.38,5.31,5.31
 C-123.67-67.74-126.04-65.36-128.97-65.36"
                    ></path>
                    <path
                      fill="white"
                      d="M-128.97-75.4c2.61,0,4.73,2.12,4.72,4.73c0,2.61-2.12,4.73-4.73,4.72
 c-2.61,0-4.72-2.12-4.73-4.72C-133.7-73.28-131.58-75.39-128.97-75.4 M-128.97-76.57c-3.26,0-5.9,2.64-5.9,5.9
 c0,3.26,2.64,5.9,5.9,5.9s5.9-2.64,5.9-5.9c0,0,0,0,0,0C-123.08-73.93-125.72-76.57-128.97-76.57"
                    ></path>
                    <path
                      d="M-106.05-65.36c-2.93,0-5.31-2.38-5.31-5.31c0-2.93,2.38-5.31,5.31-5.31s5.31,2.38,5.31,5.31
 C-100.75-67.74-103.12-65.36-106.05-65.36"
                    ></path>
                    <path
                      fill="white"
                      d="M-106.05-75.4c2.61,0,4.73,2.12,4.72,4.73s-2.12,4.73-4.73,4.72c-2.61,0-4.72-2.12-4.72-4.72
 C-110.78-73.28-108.66-75.39-106.05-75.4 M-106.05-76.57c-3.26,0-5.9,2.64-5.9,5.9c0,3.26,2.64,5.9,5.9,5.9
 c3.26,0,5.9-2.64,5.9-5.9c0,0,0,0,0,0C-100.16-73.93-102.8-76.57-106.05-76.57"
                    ></path>
                    <path
                      fill="none"
                      stroke="black"
                      stroke-width="2.52"
                      stroke-miterlimit="10"
                      d="M-100.74-92.6h-14.2c-0.38,0-0.68-0.3-0.68-0.68c0,0,0,0,0,0v-10.88
 c0-0.38,0.31-0.68,0.68-0.68c0,0,0,0,0,0h9.98"
                    ></path>
                    <rect
                      x="-83.91"
                      y="-114.43"
                      transform="matrix(0.9563 -0.2924 0.2924 0.9563 27.7742 -26.8099)"
                      fill="white"
                      width="16.2"
                      height="16.2"
                    ></rect>
                    <path
                      stroke="black"
                      stroke-width="0.9"
                      d="M-70.85-115.42l3.9,13.37l-13.37,3.89l-3.9-13.37L-70.85-115.42z M-69.89-117.16l-16.08,4.68
 l4.68,16.08l16.08-4.68L-69.89-117.16z"
                    ></path>
                  </g>
                  <path
                    opacity="0.2"
                    fill="#3094A5"
                    d="M72.6,18.96c8.95,0,16.2,7.25,16.2,16.2s-7.25,16.2-16.2,16.2s-16.2-7.25-16.2-16.2
 S63.66,18.96,72.6,18.96z"
                  ></path>
                </svg>
              </g>
              <text
                font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                fill="#004974"
                font-size="12"
                x="50.5"
                y="504.5"
              >
                瓶磚入廠
              </text>
              <animate
                attributeName="opacity"
                data-values="1;0.3333333333333333;0.7333333333333333;1"
                values="1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;0.1;0.4666666666666667;0.6666666666666666;0.7333333333333333;94;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                data-dur="1.9249999999999998s"
                dur="30s"
                begin="0.35s"
                data-begin="16.45s"
                repeatCount="indefinite"
                fill="freeze"
              ></animate>
            </g>
            <g>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                viewBox="0 0 93 93"
                x="335"
                y="509.5"
                width="65"
                height="80"
              >
                <line
                  fill="none"
                  stroke="black"
                  stroke-width="2.66"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  x1="30.97"
                  y1="59.87"
                  x2="30.97"
                  y2="83.74"
                ></line>
                <path
                  fill="none"
                  stroke="black"
                  stroke-width="2.85"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M39.19,17.79c0.1,4.54-3.5,8.3-8.04,8.39c-4.54,0.1-8.3-3.5-8.39-8.04c0-0.06,0-0.11,0-0.17
 c0-0.06,0-0.12,0-0.18c-0.1-4.54,3.5-8.3,8.04-8.39s8.3,3.5,8.39,8.04c0,0.06,0,0.11,0,0.17C39.19,17.66,39.19,17.73,39.19,17.79z"
                ></path>
                <rect
                  x="54.38"
                  y="43.67"
                  transform="matrix(0.7071 -0.7071 0.7071 0.7071 -18.5262 59.8656)"
                  fill="#004974"
                  width="17.25"
                  height="17.25"
                ></rect>
                <path
                  fill="none"
                  stroke="black"
                  stroke-width="2.85"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M22.26,40.12c0,12.02-0.38,35.87,0,39.56c-0.07,3.94,3.35,4.93,5.16,5.14
 c3.03,0.34,12.19,0,12.19,0V40.06h11.17c6.55-0.01,8.46-1.72,9.74-9.14c-11.26,0-24.39,0.41-33.6,0.17
 C22.83,31.33,22.26,32.52,22.26,40.12z"
                ></path>
                <circle
                  opacity="0.2"
                  fill="#3094A5"
                  cx="50.23"
                  cy="38.77"
                  r="17.1"
                ></circle>
                <rect
                  x="64.8"
                  y="65.99"
                  transform="matrix(0.9781 -0.208 0.208 0.9781 -13.8134 16.7803)"
                  fill="white"
                  width="16.15"
                  height="16.15"
                ></rect>
                <path
                  stroke="black"
                  stroke-width="0.475"
                  d="M64.86,68.97l13.3-2.73l2.73,13.3l-13.3,2.73L64.86,68.97z M62.16,67.2l3.66,17.77l17.77-3.66
 l-3.66-17.77L62.16,67.2z"
                ></path>
              </svg>
              <text
                font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                fill="#004974"
                font-size="12"
                x="343.5"
                y="594.5"
              >
                人工篩選
              </text>
              <animate
                attributeName="opacity"
                data-values="1;0.3333333333333333;0.7333333333333333;1"
                values="1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;0.1;0.4666666666666667;0.6666666666666666;0.7333333333333333;94;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                data-dur="1.9249999999999998s"
                dur="30s"
                begin="0.35s"
                data-begin="8.049999999999999s"
                repeatCount="indefinite"
                fill="freeze"
              ></animate>
            </g>
            <g>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                viewBox="0 0 93 93"
                x="320"
                y="606.5"
                width="65"
                height="80"
              >
                <path
                  fill="#282828"
                  d="M23.51,13.09l-8.45,7.76l10.54,10.15L23.51,13.09z"
                ></path>
                <path d="M49.51,80.58l-7.9-3.97L57.05,73L49.51,80.58z"></path>
                <path
                  d="M46.63,31.79l-16.17,8.82l10.77,8.93L46.63,31.79z"
                ></path>
                <path d="M14.38,41.11l-8.67,9.12l9.36,3.13L14.38,41.11z"></path>
                <path
                  d="M67.82,29.95l-5.48,0.52l-5.87-9.39l7.56-1.83L67.82,29.95z"
                ></path>
                <g transform="translate(1428.219 3320.613)">
                  <path
                    fill="#004974"
                    stroke="#004974"
                    stroke-width="0.5"
                    d="M-1404.12-3260.36c-0.19,0-0.37,0.11-0.47,0.27l-5.09,8l-0.03,0.05
 c-1.05,2.07-1.03,4.52,0.05,6.57c1.34,3.07,4.91,4.46,7.98,3.12c1.4-0.61,2.51-1.73,3.12-3.12c1.07-2.06,1.09-4.5,0.04-6.57
 l-0.03-0.05l-5.09-8C-1403.75-3260.25-1403.93-3260.36-1404.12-3260.36 M-1404.13-3243.13c-1.95-0.06-3.71-1.21-4.54-2.98
 c-0.87-1.63-0.89-3.59-0.06-5.24l4.6-7.24l4.6,7.23c0.83,1.65,0.81,3.61-0.06,5.24
 C-1400.42-3244.35-1402.17-3243.2-1404.13-3243.13"
                  ></path>
                  <path
                    fill="#004974"
                    stroke="#004974"
                    stroke-width="0.5"
                    d="M-1400.98-3249.59c-0.36,0-0.65,0.29-0.65,0.65c0,0,0,0,0,0c0,1.55-1.26,2.81-2.81,2.81
 c-0.36,0.01-0.64,0.32-0.63,0.68c0.01,0.34,0.29,0.62,0.63,0.63c2.28,0,4.12-1.85,4.12-4.12
 C-1400.32-3249.29-1400.61-3249.59-1400.98-3249.59C-1400.98-3249.59-1400.98-3249.59-1400.98-3249.59"
                  ></path>
                </g>
                <g transform="translate(1476.57 3302.716)">
                  <path
                    fill="#004974"
                    stroke="#004974"
                    stroke-width="0.5"
                    d="M-1404.12-3260.36c-0.19,0-0.37,0.11-0.47,0.27l-5.09,8l-0.03,0.05
 c-1.05,2.07-1.03,4.52,0.05,6.57c1.34,3.07,4.91,4.46,7.98,3.12c1.4-0.61,2.51-1.73,3.12-3.12c1.07-2.06,1.09-4.5,0.04-6.57
 l-0.03-0.05l-5.09-8C-1403.75-3260.25-1403.93-3260.36-1404.12-3260.36 M-1404.13-3243.13c-1.95-0.06-3.71-1.21-4.54-2.98
 c-0.87-1.63-0.89-3.59-0.06-5.24l4.6-7.24l4.6,7.23c0.83,1.65,0.81,3.61-0.06,5.24
 C-1400.42-3244.35-1402.17-3243.2-1404.13-3243.13"
                  ></path>
                  <path
                    fill="#004974"
                    stroke="#004974"
                    stroke-width="0.5"
                    d="M-1400.98-3249.59c-0.36,0-0.65,0.29-0.65,0.65c0,0,0,0,0,0c0,1.55-1.26,2.81-2.81,2.81
 c-0.36,0.01-0.64,0.32-0.63,0.68c0.01,0.34,0.29,0.62,0.63,0.63c2.28,0,4.12-1.85,4.12-4.12
 C-1400.32-3249.29-1400.61-3249.59-1400.98-3249.59C-1400.98-3249.59-1400.98-3249.59-1400.98-3249.59"
                  ></path>
                </g>
                <path
                  fill="white"
                  d="M46.94,48.88l-13.82,8.12l17.25,10.62L46.94,48.88z"
                ></path>
                <circle
                  opacity="0.2"
                  fill="#3094A5"
                  cx="72.45"
                  cy="51.62"
                  r="18"
                ></circle>
              </svg>
              <text
                font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                fill="#004974"
                font-size="12"
                x="325"
                y="686.5"
              >
                粉碎清洗
              </text>
              <animate
                attributeName="opacity"
                data-values="1;0.3333333333333333;0.7333333333333333;1"
                values="1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;0.1;0.4666666666666667;0.6666666666666666;0.7333333333333333;94;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                data-dur="1.9249999999999998s"
                dur="30s"
                begin="0.35s"
                data-begin="9.45s"
                repeatCount="indefinite"
                fill="freeze"
              ></animate>
            </g>
            <g>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                viewBox="0 0 93 93"
                x="237"
                y="664.5"
                width="60"
                height="80"
              >
                <path
                  d="M36.9,24.56l-3.96-3.71v15.39h-3.61V20.76l-3.66,4.52
 l-0.53-0.62l-2.54-2.23c2.9-2.85,5.74-5.65,8.51-8.38l8.6,8.61L36.9,24.56"
                ></path>
                <path
                  d="M64.81,24.56l-3.96-3.71v15.39h-3.6V20.76l-3.66,4.52
 l-0.53-0.62l-2.54-2.23c2.9-2.85,5.74-5.65,8.52-8.38l8.6,8.61L64.81,24.56"
                ></path>
                <g transform="translate(1493.941 3538.189)">
                  <path
                    fill="none"
                    stroke="#004974"
                    stroke-width="2.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M-1422.31-3479.8
 c-2.95-0.56-5.13,1.53-7.21,3.52c-6.01,5.75-8.77,3.7-12.87-0.04c-4.76-4.33-7.24-5.07-12.88-0.05c-5.62/,5-8,5.02-13.56-0.05
 c-2.05-1.86-3.91-3.46-6.49-3.38"
                  ></path>
                  <path
                    fill="none"
                    stroke="#004974"
                    stroke-width="2.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M-1423.8-3492.26
 c-2.93,0.15-4.85,2.83-7.14,4.52c-3.85,2.84-7.41,2.77-10.76-0.53c-5.49-5.42-8.52-5.4-14.32-0.01c-4.46,4.15-9.42,3.11-12.3-0.52
 c-1.48-1.88-3.63-3.12-6-3.46"
                  ></path>
                  <path
                    fill="none"
                    stroke="#004974"
                    stroke-width="2.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M-1422.31-3466.85
 c-2.69-0.44-4.82,0.72-6.86,2.95c-4.25,4.64-8.09,4.68-12.82,0.54c-5.74-5.02-8.75-4.92-14.46,0.5c-2.92,2.77-7.15,3.79-11.24,0
 c-2.28-2.12-4.48-4.46-7.63-3.99"
                  ></path>
                </g>
                <circle
                  opacity="0.2"
                  fill="#3094A5"
                  cx="59.67"
                  cy="53.67"
                  r="18"
                ></circle>
              </svg>
              <text
                font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                fill="#004974"
                font-size="12"
                x="243"
                y="744.5"
              >
                比重浮選
              </text>
              <animate
                attributeName="opacity"
                data-values="1;0.3333333333333333;0.7333333333333333;1"
                values="1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;0.1;0.4666666666666667;0.6666666666666666;0.7333333333333333;94;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                data-dur="1.9249999999999998s"
                dur="30s"
                begin="0.35s"
                data-begin="10.85s"
                repeatCount="indefinite"
                fill="freeze"
              ></animate>
            </g>
            <g>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                viewBox="0 0 93 93"
                x="142.5"
                y="674.5"
                width="60"
                height="80"
              >
                <g transform="translate(1454.429 3680.182)">
                  <circle
                    fill="white"
                    cx="-1402.52"
                    cy="-3631.88"
                    r="31.93"
                  ></circle>
                  <circle
                    fill="none"
                    stroke="black"
                    stroke-width="3"
                    cx="-1402.52"
                    cy="-3631.88"
                    r="30.43"
                  ></circle>
                </g>
                <g
                  fill="none"
                  stroke="#004974"
                  stroke-width="2.8013"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="4.0018"
                >
                  <path
                    d="M42.47,63.21
 c7.27-6.9,7.42-10.76,0.76-18.51c-3.41-3.96-4.36-9.46,1.11-14.36"
                  ></path>
                  <path
                    d="M58.59,66.24
 c7.27-6.9,7.42-10.76,0.76-18.51c-3.41-3.96-4.36-9.46,1.11-14.36"
                  ></path>
                </g>
                <line
                  fill="none"
                  stroke="black"
                  stroke-width="2.8"
                  stroke-linecap="round"
                  x1="16.35"
                  y1="42.02"
                  x2="86.02"
                  y2="62.34"
                ></line>
                <circle
                  opacity="0.2"
                  fill="#3094A5"
                  cx="21.55"
                  cy="42.19"
                  r="18"
                ></circle>
              </svg>
              <text
                font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                fill="#004974"
                font-size="12"
                x="148.5"
                y="752"
              >
                去味色選
              </text>
              <animate
                attributeName="opacity"
                data-values="1;0.3333333333333333;0.7333333333333333;1"
                values="1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;0.1;0.4666666666666667;0.6666666666666666;0.7333333333333333;94;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                data-dur="1.9249999999999998s"
                dur="30s"
                begin="0.35s"
                data-begin="12.25s"
                repeatCount="indefinite"
                fill="freeze"
              ></animate>
            </g>
            <g>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                viewBox="0 0 93 93"
                x="63"
                y="624.5"
                width="55"
                height="80"
              >
                <path
                  fill="none"
                  stroke="black"
                  stroke-width="2.85"
                  stroke-miterlimit="10"
                  d="M75.1,78.52V23.31H12.73v55.21"
                ></path>
                <circle
                  opacity="0.2"
                  fill="#3094A5"
                  cx="72.05"
                  cy="29.42"
                  r="17.1"
                ></circle>
                <path
                  fill="white"
                  d="M26.98,42.97h34.2v32.99h-34.2V42.97z"
                ></path>
                <path
                  stroke="black"
                  stroke-width="0.475"
                  d="M61.04,75.67H26.79V36.71h34.25V75.67z M63.37,34.35H24.46v43.67h38.91L63.37,34.35z"
                ></path>
                <path
                  fill="#004974"
                  d="M43.48,46.83l-6.44,5.92l8.04,7.75L43.48,46.83z"
                ></path>
                <path
                  fill="#004974"
                  d="M52.11,68.23l-7.03-3.54l13.75-3.2L52.11,68.23z"
                ></path>
                <path
                  fill="#004974"
                  d="M40.47,61.24l-7.45,8.43l8.04,2.89L40.47,61.24z"
                ></path>
                <path
                  stroke="black"
                  stroke-width="2.375"
                  d="M64.59,40.64H23.24V35.5h41.35V40.64z M66.92,33.17H20.91v9.81h46.01V33.17z"
                ></path>
                <rect
                  x="22.07"
                  y="34.33"
                  fill="white"
                  width="43.68"
                  height="7.48"
                ></rect>
              </svg>
              <text
                font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                fill="#004974"
                font-size="12"
                x="66.5"
                y="704.5"
              >
                熔融過濾
              </text>
              <animate
                attributeName="opacity"
                data-values="1;0.3333333333333333;0.7333333333333333;1"
                values="1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;0.1;0.4666666666666667;0.6666666666666666;0.7333333333333333;94;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                data-dur="1.9249999999999998s"
                dur="30s"
                begin="0.35s"
                data-begin="13.649999999999999s"
                repeatCount="indefinite"
                fill="freeze"
              ></animate>
            </g>
            <g>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                viewBox="0 0 93 93"
                x="35"
                y="529.5"
                width="55"
                height="80"
              >
                <g transform="translate(-0.34 13.721)">
                  <path
                    fill="white"
                    d="M62.76,19.78
 c-0.05,0-0.09-0.04-0.09-0.09c0-0.05,0.04-0.09,0.09-0.09l0,0c1.3,0,2.35-1.05,2.35-2.35c0-0.05,0.04-0.09,0.09-0.09
 c0.05,0,0.09,0.04,0.09,0.09C65.28,18.65,64.15,19.78,62.76,19.78"
                  ></path>
                  <path
                    d="M47.62,7c0,2.76-2.24,5-5,5s-5-2.24-5-5s2.24-5,5-5
 S47.62,4.24,47.62,7"
                  ></path>
                  <path
                    d="M19.6,26.97c0,2.76-2.24,5-5,5s-5-2.24-5-5
 s2.24-5,5-5S19.6,24.21,19.6,26.97"
                  ></path>
                  <path
                    fill="#004974"
                    d="M42.11,25.83c0,2.76-2.24,5-5,5
 s-5-2.24-5-5s2.24-5,5-5S42.11,23.06,42.11,25.83"
                  ></path>
                  <path
                    d="M55.2,40c0,2.76-2.24,5-5,5s-5-2.24-5-5s2.24-5,5-5
 S55.2,37.24,55.2,40"
                  ></path>
                  <path
                    fill="#004974"
                    d="M77.52,42.74c0,2.76-2.24,5-5,5
 s-5-2.24-5-5s2.24-5,5-5S77.52,39.97,77.52,42.74"
                  ></path>
                  <path
                    d="M49.13,59.5c0,2.76-2.24,5-5,5s-5-2.24-5-5
 c0-2.76,2.24-5,5-5S49.13,56.74,49.13,59.5"
                  ></path>
                  <path
                    fill="#004974"
                    d="M30.44,44.99c0,2.76-2.24,5-5,5
 s-5-2.24-5-5s2.24-5,5-5S30.44,42.23,30.44,44.99"
                  ></path>
                  <path
                    d="M70.35,22.04c0,2.76-2.24,5-5,5c-2.76,0-5-2.24-5-5
 s2.24-5,5-5C68.11,17.04,70.35,19.28,70.35,22.04"
                  ></path>
                </g>
                <circle
                  opacity="0.2"
                  fill="#3094A5"
                  cx="67.88"
                  cy="54.59"
                  r="18"
                ></circle>
              </svg>
              <text
                font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                fill="#004974"
                font-size="12"
                x="38.5"
                y="609.5"
              >
                冷卻造粒
              </text>
              <animate
                attributeName="opacity"
                data-values="1;0.3333333333333333;0.7333333333333333;1"
                values="1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;0.1;0.4666666666666667;0.6666666666666666;0.7333333333333333;94;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                data-dur="1.9249999999999998s"
                dur="30s"
                begin="0.35s"
                data-begin="15.049999999999999s"
                repeatCount="indefinite"
                fill="freeze"
              ></animate>
            </g>
            <g>
              <g
                style="transform-origin: 340px center; transform: scale(-1, 1)"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                  viewBox="0 0 93 93"
                  x="310"
                  y="424.5"
                  width="60"
                  height="80"
                >
                  <g transform="translate(996.542 3641.038)">
                    <rect
                      x="-938.35"
                      y="-3616.93"
                      fill="white"
                      width="15.54"
                      height="15.54"
                    ></rect>
                    <rect
                      x="-937.23"
                      y="-3615.8"
                      fill="none"
                      stroke="#282828"
                      stroke-width="2.25"
                      width="13.29"
                      height="13.29"
                    ></rect>
                  </g>
                  <rect
                    x="40.92"
                    y="24.11"
                    fill="#004974"
                    width="15.54"
                    height="15.54"
                  ></rect>
                  <rect x="58.19" y="41.37" width="15.54" height="15.54"></rect>
                  <rect x="40.92" y="41.37" width="15.54" height="15.54"></rect>
                  <g transform="translate(50.235 -262.885)">
                    <path
                      d="M26.9,323.82c-0.28-0.41-0.77-0.63-1.26-0.59c-4.2,0.01-8.4,0.01-12.6,0.01c-0.19,0-0.45-0.1-0.54,0.12
 c-0.09,0.22,0.16,0.34,0.29,0.47c1.03,1.06,1.74,2.38,2.05,3.82c0.02,0.36,0.34,0.64,0.7,0.61c0.02,0,0.05,0,0.07-0.01
 c3.36-0.01,6.71-0.01,10.07,0c0.47,0,0.92-0.21,1.21-0.58L26.9,323.82z"
                    ></path>
                    <path
                      d="M-13.1,322.4c-0.01,0.69,0.21,0.86,0.87,0.85c4.47-0.03,8.93-0.02,13.4-0.01c0.21,0,0.51-0.12,0.6,0.12
 c0.09,0.24-0.2,0.36-0.35,0.51c-1,0.99-1.69,2.25-1.99,3.63c-0.13,0.6-0.41,0.77-1,0.76c-4.73-0.02-9.47-0.01-14.2-0.01
 c-0.98,0-0.98,0-1.22-0.97c-1.13-4.21-5.46-6.71-9.68-5.58c-0.83,0.22-1.61,0.58-2.32,1.05c-1.69,1.12-2.88,2.84-3.32,4.82
 c-0.07,0.32-0.11,0.68-0.58,0.67c-2.51-0.01-5.02,0.01-7.53-0.02c-0.53,0.03-0.98-0.38-1.01-0.91c0-0.04,0-0.08,0-0.12
 c-0.02-0.98-0.03-1.96,0-2.93c-0.04-0.54,0.37-1,0.9-1.03c0.05,0,0.11,0,0.16,0c0.49-0.04,0.98-0.04,1.47,0
 c0.67,0.07,0.81-0.21,0.81-0.84c-0.02-4.09,0-8.18-0.02-12.27c-0.04-1.41,0.33-2.8,1.06-4c1.93-3.09,4.05-6.06,6.08-9.09
 c1.51-2.38,4.18-3.78,7-3.68c2.78,0,5.56,0,8.33,0c1.79,0,2.55,0.77,2.55,2.56c0,4.38,0,8.76,0,13.13
 C-13.09,313.5-13.07,317.95-13.1,322.4 M-18.93,307.36c0.93,0,1.24-0.31,1.24-1.24c0.01-2.04,0.01-4.08,0-6.13
 c0-0.82-0.29-1.17-1.1-1.19c-2.31-0.03-4.62-0.02-6.93-0.01c-0.45-0.01-0.88,0.22-1.13,0.6c-1.49,2.14-2.99,4.25-4.48,6.38
 c-0.27,0.28-0.34,0.7-0.18,1.05c0.21,0.38,0.63,0.59,1.06,0.54c1.93-0.01,3.86,0,5.8,0C-22.74,307.37-20.83,307.38-18.93,307.36"
                    ></path>
                    <path
                      d="M-18.49,329.36c0.01,3.39-2.73,6.14-6.11,6.15c-3.39,0.01-6.14-2.73-6.15-6.11s2.73-6.14,6.11-6.15
 c0.02,0,0.03,0,0.05,0C-21.21,323.26-18.49,325.99-18.49,329.36 M-24.57,326.39c-1.63,0-2.96,1.32-2.96,2.96
 c0,1.63,1.32,2.96,2.96,2.96c1.63-0.04,2.92-1.4,2.88-3.03C-21.73,327.7-23,326.43-24.57,326.39"
                    ></path>
                    <path
                      d="M7.17,335.46c-3.37,0.11-6.2-2.54-6.3-5.91c-0.11-3.37,2.54-6.2,5.91-6.3c0.11,0,0.22,0,0.32,0
 c3.37,0.07,6.05,2.86,5.98,6.23C13.01,332.73,10.41,335.35,7.17,335.46 M4.15,329.35c0.03,1.64,1.36,2.95,3,2.95
 c1.63-0.06,2.91-1.42,2.85-3.05c-0.05-1.58-1.35-2.84-2.93-2.86C5.47,326.44,4.18,327.74,4.15,329.35"
                    ></path>
                    <rect
                      x="-41.44"
                      y="278.39"
                      fill="none"
                      width="69.51"
                      height="57.07"
                    ></rect>
                  </g>
                  <circle
                    opacity="0.2"
                    fill="#3094A5"
                    cx="73"
                    cy="55.57"
                    r="16.2"
                  ></circle>
                </svg>
              </g>
              <text
                font-family="Source Han Sans HW, Source Han Sans CJK TC, source-han-sans-cjk-tc, source-han-sans-traditional, 思源黑體 HW, Noto Sans CJK TC, Noto Sans TC, sans-serif"
                fill="#004974"
                font-size="12"
                x="316"
                y="499.5"
              >
                包裝出貨
              </text>
              <animate
                attributeName="opacity"
                data-values="1;0.3333333333333333;0.7333333333333333;1"
                values="1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;0.1;0.4666666666666667;0.6666666666666666;0.7333333333333333;94;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1;1"
                data-dur="1.9249999999999998s"
                dur="30s"
                begin="0.35s"
                data-begin="6.6499999999999995s"
                repeatCount="indefinite"
                fill="freeze"
              ></animate>
            </g>
          </g>
          <text
            fill="white"
            font-family="Roboto, sans-serif"
            font-size="30"
            x="6"
            y="829"
            font-weight="300"
          >
            POST CONSUMER RECYCLED
          </text>
        </svg>
      </div>
      <div id="laboratory">
        <div class="pic">
          <img
            src="@/assets/images/company_serve/pcr/laboratory_pic.jpg"
            alt="pic"
          />
        </div>
        <div class="text">
          <h3>專業品保實驗室</h3>
          <p>
            大豐環保擁有獨立且專業的品保實驗室，實驗室除了恆溫恆濕外，更參考ISO/IEC
            17025之規範建置品質文件與表單，並且依據ASTM國際規範進行各批次產品之物性檢測，建立樣品保存機制每日留樣備查。
          </p>
        </div>
      </div>

      <div id="laboratory_item">
        <div class="wrapper">
          <div class="content">
            <button
              :class="{ active: laboratory == index }"
              @click="laboratory = index"
              v-for="(item, index) in laboratory_info"
              :key="index"
            >
              {{ item.title }}
            </button>
          </div>
          <div class="detail">
            <div
              class="item"
              :class="{ active: laboratory == index }"
              v-for="(item, index) in laboratory_info"
              :key="index"
            >
              <div class="pic">
                <img
                  :src="
                    require(`@/assets/images/company_serve/pcr/${item.pic}`)
                  "
                  alt="pic"
                />
              </div>
              <div class="text">
                <h5>{{ item.title }}</h5>
                <p>
                  {{ item.text }}
                </p>
                <a @click="laboratory_switch" href="javascript:void(0)">
                  <img
                    src="@/assets/images/company_serve/pcr/detail_arrow.svg"
                    alt="arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="forest_bg">
        <!-- <img
          src="@/assets/images/company_serve/industrialwaste/tree.jpg"
          alt="tree"
        /> -->
        <h3>FOR BETTER LIFE</h3>
      </div>

      <div id="hdpe">
        <div class="wrapper">
          <div class="title">
            <h3>
              PCR HDPE
              <img
                src="@/assets/images/company_serve/pcr/hdpe_tiltle_icon.svg"
                alt="icon"
              />
            </h3>
            <p>
              可應用於瓶器、軟管、薄板、膜類 Product applications could be
              bottles、tubes、sheets、films and so on.
            </p>
          </div>
          <div class="content">
            <div
              v-for="(item, index) in hdpe_info"
              :key="index"
              class="item"
              :class="{ big: item.isBig }"
            >
              <div class="pic">
                <a
                  href="javascript:void(0)"
                  @click="
                    open_pic1(
                      require(`@/assets/images/company_serve/pcr/${item.big_pic}`)
                    )
                  "
                >
                  <img
                    class="example-image"
                    :src="
                      require(`@/assets/images/company_serve/pcr/${item.pic}`)
                    "
                    alt="thumbnail"
                  />
                </a>
              </div>
              <h5>
                <span>{{ item.code }} </span>
                {{ item.name }}
              </h5>
              <p v-if="item.isFoodGrade">食品級</p>
            </div>
          </div>

          <div class="title">
            <h3>
              PCR PP
              <img
                src="@/assets/images/company_serve/pcr/hdpe_tiltle_icon2.svg"
                alt="icon"
              />
            </h3>
            <p>
              可應用於個人用品類、化粧品包材、瓶蓋、吹瓶、編織袋 <br />Product
              applications could be personal-care products, cosmetic packaging,
              lids, bottles, woofer bags and so on.
            </p>
          </div>
          <div class="content">
            <div
              v-for="(item, index) in hdpe_info2"
              :key="index"
              class="item"
              :class="{ big: item.isBig, big_m_hide: item.isBig }"
            >
              <div class="pic">
                <a
                  href="javascript:void(0)"
                  @click="
                    open_pic2(
                      require(`@/assets/images/company_serve/pcr/${item.big_pic}`)
                    )
                  "
                >
                  <img
                    class="example-image"
                    :src="
                      require(`@/assets/images/company_serve/pcr/${item.pic}`)
                    "
                    alt="thumbnail"
                  />
                </a>
              </div>
              <h5>
                <span>{{ item.code }} </span>
                {{ item.name }}
              </h5>
              <p v-if="item.isFoodGrade">食品級</p>
            </div>
          </div>

          <div id="consult">
            <img
              src="@/assets/images/company_serve/pcr/consult_pic.jpg"
              alt="pic"
            />
            <p>
              我們產品以客製化服務，提供更多專業配料、配色與物性調配，產品種類多，詳細資訊歡迎與我們聯絡!
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="10.706"
              viewBox="0 0 300 10.706"
            >
              <g transform="translate(-1058 -8650.294)">
                <line
                  x2="8"
                  y2="9"
                  transform="translate(1349 8651)"
                  fill="none"
                  stroke="#ccc"
                  stroke-linecap="round"
                  stroke-width="1"
                />
                <line
                  x2="300"
                  transform="translate(1058 8660.5)"
                  fill="none"
                  stroke="#ccc"
                  stroke-width="1"
                />
              </g>
            </svg>

            <router-link to="/contact">我想諮詢</router-link>
          </div>
        </div>
      </div>

      <div id="scope">
        <div class="title">
          <h3>應用範圍</h3>
          <p>SUSTAINBILITY SOLUTIONS FOR YOUR MARKETS</p>
        </div>
        <div class="content">
          <div class="scope_item">
            <div class="item big_pic">
              <div class="item_content">
                <h3>各類瓶器</h3>
                <img
                  class="img"
                  src="@/assets/images/company_serve/pcr/scope_pic01.jpg"
                  alt="pic"
                />
                <div class="float_text">
                  <span> 洗髮精、洗衣精 </span>
                </div>
              </div>
            </div>
            <div class="item text">
              <div class="item_content">
                <div class="icon">
                  <img
                    src="@/assets/images/company_serve/pcr/scope_icon01.svg"
                    alt="icon"
                  />
                  <h3>食品容器</h3>
                </div>
              </div>
            </div>
            <div class="item pic">
              <div class="item_content">
                <div class="item_content">
                  <h3>文具用品</h3>
                  <img
                    class="img"
                    src="@/assets/images/company_serve/pcr/scope_pic02.jpg"
                    alt="pic"
                  />
                  <div class="float_text">
                    <span> 原子筆、筆記本、書籤、L夾 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="scope_item">
            <div class="item big_pic">
              <div class="item_content">
                <h3>紡織品類</h3>
                <img
                  class="img"
                  src="@/assets/images/company_serve/pcr/scope_pic03.jpg"
                  alt="pic"
                />
                <div class="float_text">
                  <span> 購物袋、廢布餐墊 </span>
                </div>
              </div>
            </div>
            <div class="item text">
              <div class="item_content">
                <div class="icon">
                  <img
                    src="@/assets/images/company_serve/pcr/scope_icon02.svg"
                    alt="icon"
                  />
                  <h3>物流載具</h3>
                </div>
              </div>
            </div>
            <div class="item pic">
              <div class="item_content">
                <div class="item_content">
                  <h3>工業用品</h3>
                  <img
                    class="img"
                    src="@/assets/images/company_serve/pcr/scope_pic04.jpg"
                    alt="pic"
                  />
                  <div class="float_text">
                    <span> 工具箱、交通角錐 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="scope_item">
            <div class="item pic">
              <div class="item_content">
                <div class="item_content">
                  <h3>運動用品</h3>
                  <img
                    class="img"
                    src="@/assets/images/company_serve/pcr/scope_pic05.jpg"
                    alt="pic"
                  />
                  <div class="float_text">
                    <span> 健身輪、蛙鞋、打氣瓶 </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="item text">
              <div class="item_content">
                <div class="icon">
                  <img
                    src="@/assets/images/company_serve/pcr/scope_icon03.svg"
                    alt="icon"
                  />
                  <h3>建材應用</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="cooperate">
        <div class="title">
          <h3 class="tc">品牌合作</h3>
        </div>
        <div class="brand_list">
          <a href="">
            <img
              src="@/assets/images/company_serve/pcr/brand01.png"
              alt="brand"
            />
          </a>
          <a href="">
            <img
              src="@/assets/images/company_serve/pcr/brand02.png"
              alt="brand"
            />
          </a>
          <a href="">
            <img
              src="@/assets/images/company_serve/pcr/brand03.png"
              alt="brand"
            />
          </a>
          <a href="">
            <img
              src="@/assets/images/company_serve/pcr/brand04.png"
              alt="brand"
            />
          </a>
          <a href="">
            <img
              src="@/assets/images/company_serve/pcr/brand05.png"
              alt="brand"
            />
          </a>
          <a href="">
            <img
              src="@/assets/images/company_serve/pcr/brand06.png"
              alt="brand"
            />
          </a>
          <a href="">
            <img
              src="@/assets/images/company_serve/pcr/brand07.png"
              alt="brand"
            />
          </a>
          <a href="">
            <img
              src="@/assets/images/company_serve/pcr/brand08.png"
              alt="brand"
            />
          </a>
          <a href="">
            <img
              src="@/assets/images/company_serve/pcr/brand09.png"
              alt="brand"
            />
          </a>
          <a href="">
            <img
              src="@/assets/images/company_serve/pcr/brand10.png"
              alt="brand"
            />
          </a>
        </div>
      </div>

      <div id="service">
        <div class="wrapper">
          <div class="pic">
            <img
              src="@/assets/images/company_serve/pcr/service_pic.jpg"
              alt="pic"
            />
          </div>
          <div class="text">
            <a href="mailto:service@df-recycle.com">
              <img
                src="@/assets/images/company_serve/pcr/meil.svg"
                alt="icon"
              />
              <span class="text_content">
                <span>請將您的需求寄信至</span>
                <span
                  >service@df-recycle.com<span class="m_hide">，</span></span
                >
                <span>將由專人為您回覆</span>
              </span>
              <p>Welcome to collaborate with us</p>
            </a>
          </div>
        </div>
      </div>

      <div id="more" class="mb an fu">
        <router-link to="/pcr-materials">
          <span>再生循環產品</span>
          <img
            loading="lazy"
            src="@/assets/images/company_serve/more_arrow.svg"
            alt="arrow"
          />
        </router-link>
      </div>
    </main>

    <!-- 燈箱 -->
    <div id="lightbox" :class="{ active: lightbox }">
      <div id="lightbox_wrapper">
        <button id="closeBtn" @click="lightbox = false" />
        <img loading="lazy" :src="lightbox_pic" alt="pic" />
      </div>
    </div>

    <vfooter />
  </div>
</template>
