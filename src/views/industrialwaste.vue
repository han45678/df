<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, onMounted } from "vue";
import { animateItems } from "@/assets/js/processPlugin";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const serve = ref([
  {
    no: "01",
    pic: "serve_pic01.jpg",
    title: "一般廢棄物清運",
    text: "工廠、社區、學校、辦公大樓、醫院、飯店等產出的生活垃圾",
  },
  {
    no: "02",
    pic: "serve_pic02.jpg",
    title: "事業廢棄物清運",
    text: "事業產線、作業等<br>產生的生活垃圾",
  },
  {
    no: "03",
    pic: "serve_pic03.jpg",
    title: "廢棄物減量",
    text: "面臨台灣設備老舊更新及歲修停爐問題，協助將客戶企業廢棄物轉化為可用之燃料(SRF)",
  },
  {
    no: "04",
    pic: "serve_pic04.jpg",
    title: "下腳料資收統包",
    text: "廢五金類、廢塑膠回收、廢紙類、貴金屬類、廢IC類",
  },
  {
    no: "05",
    pic: "serve_pic05.jpg",
    title: "駐廠服務",
    text: "由大豐環保訓練人員配合<br>事業進行廠內打包、分選作業",
  },
  {
    no: "06",
    pic: "serve_pic06.jpg",
    title: "儲區規劃",
    text: "子母車、貨櫃屋、資收桶設置資收分類",
  },
  {
    no: "07",
    pic: "serve_pic07.jpg",
    title: "廢棄物棄置案",
    text: "非法棄置案，<br>特定品項報廢處理",
  },
]);

const detail_open = ref(false);

let slickInitialized = ref(false);

function initializeSlick() {
  if (!slickInitialized.value) {
    $("#serve_content_top").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1279,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    slickInitialized.value = true;
  }

  $("#serve_content_top").on("beforeChange", () => {
    detail_open.value = false;
  });
}

function destroySlick() {
  if (slickInitialized.value) {
    $("#serve_content_top").slick("unslick");
    slickInitialized.value = false;
  }
}
function handleWindowSize() {
  let windowWidth = window.innerWidth;
  let itemCount = document.querySelectorAll("#serve_content_top .item").length;

  if (windowWidth >= 1024 && itemCount < 3) {
    destroySlick();
  } else if (windowWidth >= 560 && windowWidth < 1024 && itemCount < 2) {
    destroySlick();
  } else if (windowWidth < 560 && itemCount < 1) {
    destroySlick();
  } else {
    initializeSlick();
  }
}

onMounted(() => {
  const scrollingHandler = () => {
    let wh = window.innerHeight || document.documentElement.clientHeight;
    let ws = window.pageYOffset || document.documentElement.scrollTop;
    let m = wh / 2 + ws;

    // Replace '#process_line' with the actual ID or class of your element
    let processLineElement = document.getElementById("process_line");

    if (processLineElement && processLineElement.offsetTop < m + wh / 4) {
      animateItems();

      // setInterval(()=>{
      //   animateItems();
      // },30000);
      document.removeEventListener("scroll", scrollingHandler);
    }
  };

  document.addEventListener("scroll", scrollingHandler);

  handleWindowSize();
  window.addEventListener("resize", handleWindowSize);
});
</script>
<template>
  <div>
    <vheader :logo_color="true" :fixed="true" />

    <main id="company_serve" class="page industrialwaste">
      <div id="banner">
        <div id="banner_pic">
          <img
            class="pc"
            loading="lazy"
            src="@/assets/images/company_serve/industrialwaste/banner.png"
            alt="banner"
          />
          <img
            class="m"
            loading="lazy"
            src="@/assets/images/company_serve/industrialwaste/banner_m.png"
            alt="banner"
          />
        </div>
      </div>
      <div id="banner_title">
        <h2 class="an fd">事業廢棄物</h2>
        <h3 class="an fd">
          <span><router-link to="/">企業服務</router-link></span>/ 企業清運服務
        </h3>
      </div>
      <div id="serve_introduce">
        <div id="serve_introduce_content">
          <div class="pic an fu">
            <img
              loading="lazy"
              src="@/assets/images/company_serve/industrialwaste/pic.png"
              alt="pic"
            />
          </div>
          <div class="text an fl">
            <h3>廢棄物清運、資源回收、廢棄物減量多樣服務</h3>
            <p>
              大豐環保擁有20年專業經驗與團隊，多年累積許多知名事業廢棄物清運回收案例，包含科技大廠下腳料、儲區資收、生活垃圾清運等服務，依「廢棄物清理法」第28條規定，產源企業選擇不法的清運業者須受罰。大豐環保也擁有甲級廢棄物清除許可證，替企業產生之事業廢棄物提供安全合法及便捷的清運服務。
            </p>
          </div>
        </div>
      </div>
      <div id="advantage">
        <div class="title">
          <h3 class="an fu">服務優勢</h3>
        </div>
        <div id="advantage_wrapper">
          <div id="advantage_detail" class="an fr">
            <p>
              大豐環保能夠針對企業不同需求，客製化事業單位資源回收儲區規劃及美化工程，包含派駐專業人員與機具設備至客戶廠區內進行分類回收服務。
            </p>
            <p>
              提供產業多年服務經驗有效協助客戶降低廢棄物比例與處理成本，更提高資源化程度來增加銷貨收入。
            </p>
          </div>
          <div id="advantage_content">
            <div class="item an fu">
              <div class="no">01</div>
              <div class="icon">
                <div
                  class="lazy_img_pic lazy_img"
                  :data-src="require(`@/assets/images/icon/enterprise_6.svg`)"
                />
              </div>
              <div class="text">
                <h4>統包服務</h4>
                <p>降低廢棄物比例提高資源化</p>
              </div>
            </div>
            <div class="item an fu">
              <div class="no">02</div>
              <div class="icon">
                <div
                  class="lazy_img_pic lazy_img"
                  :data-src="require(`@/assets/images/icon/enterprise_7.svg`)"
                />
              </div>
              <div class="text">
                <h4>駐廠服務</h4>
                <p>客戶廠區進行分類回收服務</p>
              </div>
            </div>
            <div class="item an fu">
              <div class="no">03</div>
              <div class="icon">
                <div
                  class="lazy_img_pic lazy_img"
                  :data-src="require(`@/assets/images/icon/enterprise_8.svg`)"
                />
              </div>
              <div class="text">
                <h4>儲區規劃</h4>
                <p>客製化儲區與美化工程</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="serve">
        <div id="serve_title">
          <h3 class="an fu">服務項目</h3>
        </div>
        <div id="serve_content">
          <div id="serve_content_top" class="an fu">
            <div
              class="item"
              v-for="(item, index) in serve"
              :key="index"
              @click="detail_open = true"
            >
              <div class="pic">
                <div class="no">{{ item.no }}</div>
                <img
                  loading="lazy"
                  :src="
                    require(`@/assets/images/company_serve/industrialwaste//${item.pic}`)
                  "
                  alt="pic"
                />
              </div>
              <div class="text">
                <h5 v-html="item.title" />
                <p v-html="item.text" />
              </div>
            </div>
          </div>
          <transition name="fade-up">
            <div id="serve_content_bottom" v-if="detail_open">
              <div id="serve_content_bottom_wrapper">
                <button class="off_btn" @click="detail_open = false">
                  <img
                    loading="lazy"
                    src="@/assets/images/icon/X.svg"
                    alt="X"
                  />
                </button>
                <div id="serve_content_bottom_content">
                  <ul class="active">
                    <li>
                      <span class="title">1、廢五金類：</span>
                      <span class="content">廢鋼、廢鐵、廢不鏽鋼、廢電線、含銅廢料(銅箔、銅球、銅塊、青銅…)、廢鐵屑、特殊合金等</span>
                      
                    </li>
                    <li>
                      <span class="title">2、廢塑膠回收：</span>
                      <span class="content">PE．PP聚乙烯(PE)、高分子聚乙烯(UPE)、聚丙烯(PP)、MC尼龍、PU．ABS、聚氨酯制品PU、ABS樹脂、聚縮醛(POM)、PVC、聚氯乙烯(CPVC)。</span>
                    </li>
                    <li>
                      <span class="title">3、廢紙類：</span>
                      <span class="content">電子廠墊襯白紙、廢紙箱、廢紙切邊料、淋膜紙、紙箱、報表紙等，(大豐另有機密文件銷毀服務)。</span>
                    </li>
                    <li>
                      <span class="title">4、貴金屬類：</span>
                      <span class="content">各類含金廢料(導線架、金板、金框…)、含銀廢料(銅鍍銀、鎳鍍銀、銀膠、廢銀液..)、含鈀廢料、含銦廢料、各式靶材回收等。</span>
                    </li>
                    <li>
                      <span class="title">5、電子零件類：</span>
                      <span class="content">廢IC、廢晶片、廢BGA、廢PCB板、電晶體、軟板、電子元件、LED、電子零組件下腳料、庫存品(料)等。</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div
        id="forest_bg"
        :style="{
          backgroundImage:
            'url(' +
            require('@/assets/images/company_serve/industrialwaste/tree.jpg') +
            ')',
        }"
      ></div>
      <div id="process">
        <div class="title">
          <h3 class="an fu">服務流程</h3>
        </div>
        <div id="process_line" style="--line: 0%">
          <div class="item anp fr">
            <div class="process_wrapper">
              <div
                class="process_bg"
                data-percent="16.6"
                style="--percent: 0"
              ></div>
              <div class="process_content">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/process_icon08.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>拍照提供</h4>
              <p>
                需要您報廢的資訊<br />
                EX：物品地點、數量等
              </p>
            </div>
          </div>
          <div class="item anp fr">
            <div class="process_wrapper">
              <div
                class="process_bg"
                data-percent="33.2"
                style="--percent: 0"
              ></div>
              <div class="process_content">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/process_icon04.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>業務洽談</h4>
              <p>大豐環保評估</p>
            </div>
          </div>
          <div class="item anp fr">
            <div class="process_wrapper">
              <div
                class="process_bg"
                data-percent="49.8"
                style="--percent: 0"
              ></div>
              <div class="process_content">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/process_icon07.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>報價預約</h4>
              <p>業務報價預約</p>
            </div>
          </div>
          <div class="item anp fr">
            <div class="process_wrapper">
              <div
                class="process_bg"
                data-percent="66.4"
                style="--percent: 0"
              ></div>
              <div class="process_content">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/process_icon03.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>簽訂合約</h4>
            </div>
          </div>
          <div class="item anp fr">
            <div class="process_wrapper">
              <div
                class="process_bg"
                data-percent="83"
                style="--percent: 0"
              ></div>
              <div class="process_content">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/process_icon05.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>報廢清運</h4>
              <p>執行清運</p>
            </div>
          </div>
          <div class="item anp fr">
            <div class="process_wrapper">
              <div
                class="process_bg"
                data-percent="100"
                style="--percent: 0"
              ></div>
              <div class="process_content">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/process_icon06.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>事業驗收</h4>
              <p>
                銷毀完成提供<br />
                清運照片及證明(部份)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="contact">
        <div class="title">
          <h3 class="an fu">聯絡我們</h3>
        </div>
        <div id="contact_content_wrapper">
          <div id="contact_content_bg" class="an fu">
            <img
              loading="lazy"
              src="@/assets/images/company_serve/contact_content_bg.jpg"
              alt="bg"
            />
          </div>
          <div id="contact_content">
            <div class="item an fu">
              <div class="icon">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/tel.svg"
                  alt="tel"
                />
              </div>
              <div class="text">
                <h5>客服電話</h5>
                <p>週一至週五 8:30~17:30</p>
                <a href="tel:0800-588717#3">0800-588717#3</a>
              </div>
            </div>
            <div class="item green an fu">
              <div class="icon">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/line.svg"
                  alt="tel"
                />
              </div>
              <div class="text">
                <h5>LINE</h5>
                <p>透過line@線上客服</p>
                <a
                  href="https://www.zerozero-tw.com/line_open/?df-zopim"
                  target="_blank"
                  >加入好友 @df717</a
                >
              </div>
            </div>
            <div class="item black an fu">
              <div class="icon">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/email.svg"
                  alt="tel"
                />
              </div>
              <div class="text">
                <h5>E-Mail</h5>
                <p>聯絡我們</p>
                <a href="mailto:df.waste@df-recycle.com"
                  >df.waste@df-recycle.com</a
                >
              </div>
            </div>
          </div>
          <div id="more" class="an fu">
            <router-link to="/enterprise">
              <span>企業清運服務</span>
              <img
                loading="lazy"
                src="@/assets/images/company_serve/more_arrow.svg"
                alt="arrow"
              />
            </router-link>
          </div>
        </div>
      </div>
    </main>

    <vfooter />
  </div>
</template>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-up-enter,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* 新增的樣式，讓元素出現時也有特效 */
.fade-up-enter {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-up-enter-active {
  opacity: 1;
  transform: translateY(0);
}
</style>
