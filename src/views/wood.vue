<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, onMounted } from "vue";
import { animateItems } from "@/assets/js/processPlugin";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";

const router = useRouter();
const store = useStore();

function slick() {
  $("#wood_content").slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

onMounted(() => {
  slick();

  const scrollingHandler = () => {
    let wh = window.innerHeight || document.documentElement.clientHeight;
    let ws = window.pageYOffset || document.documentElement.scrollTop;
    let m = wh / 2 + ws;

    // Replace '#process_line' with the actual ID or class of your element
    let processLineElement = document.getElementById("process_line");

    if (processLineElement && processLineElement.offsetTop < m + wh / 4) {
      animateItems();
      //   setInterval(() => {
      //     animateItems();
      //   }, 30000);
      document.removeEventListener("scroll", scrollingHandler);
    }
  };

  document.addEventListener("scroll", scrollingHandler);
});
</script>
<template>
  <div>
    <vheader :logo_color="true" :fixed="true" />

    <main id="company_serve" class="page wood">
      <div id="banner">
        <div id="banner_pic">
          <img
            loading="lazy"
            src="@/assets/images/company_serve/wood/banner.jpg"
            alt="banner"
          />
        </div>
      </div>
      <div id="banner_title">
        <h2 class="an fd">廢⽊材清運</h2>
        <h3 class="an fd">
          <span>
            <router-link to="/">企業服務</router-link>
          </span>
          / 企業清運服務
        </h3>
      </div>
      <div id="serve_introduce">
        <div id="serve_introduce_content">
          <div class="pic an fu">
            <img
              loading="lazy"
              src="@/assets/images/company_serve/wood/pic.jpg"
              alt="pic"
            />
          </div>
          <div class="text an fl">
            <h3>合法清運、申報</h3>
            <p>
              大豐環保把握每一個資源可再利用的機會，對於科技廠、工廠定時汰換、工程、裝潢工程等產出的廢木材、廢木棧板，以往大多處理方式都直接丟焚化爐焚燒，不僅造成空氣污然，也浪費了這些能夠再利用處理的資源，甚至亂傾倒，因此受罰。
            </p>
            <p>
              依「廢棄物清理法」第30條、第46條規定，事業委託清理其廢棄物，應與受託人就該廢棄物負連帶清理責任。若污染環境等規定，可處一年以上五年以下有期徒刑，得併科新臺幣一千五百萬元以下罰金!
            </p>
          </div>
        </div>
      </div>

      <div id="wood">
        <div class="wrapper">
          <div class="title">
            <h3 class="an fu">廢木材種類</h3>
          </div>
        </div>
        <div id="wood_content_wrapper">
          <div id="wood_content" class="an fu">
            <div class="item">
              <img
                loading="lazy"
                src="@/assets/images/company_serve/wood/wood_pic01.jpg"
                alt="pic"
              />
              <div class="text">
                <h4>純木頭或合板棧板、木箱、木輪、三合板</h4>
                <p>
                  公司進出貨、載運貨物的棧板，科技廠、製造業、大型賣場、物流中心所使用的木棧板，或是包裝機台及其他物品之大型木箱。
                </p>
              </div>
            </div>
            <div class="item">
              <img
                loading="lazy"
                src="@/assets/images/company_serve/wood/wood_pic02.jpg"
                alt="pic"
              />
              <div class="text">
                <h4>密集板、裝潢板、OA板</h4>
                <p>
                  宿舍或個人傢俱替換、系統櫃廠商、系統廚具工廠、木材家具商、裝修等產出之木材切邊料、密集板、裝潢木板、木製家具、貼皮木板、含膠含漆木板、美耐板。
                </p>
              </div>
            </div>
            <div class="item">
              <img
                loading="lazy"
                src="@/assets/images/company_serve/wood/wood_pic03.jpg"
                alt="pic"
              />
              <div class="text">
                <h4>枯枝落葉、漂流木</h4>
                <p>
                  公園、工廠、家庭、路邊所產出的路樹、落葉或颱風過後的樹木、漂流木、落葉。
                </p>
              </div>
            </div>
            <div class="item">
              <img
                loading="lazy"
                src="@/assets/images/company_serve/wood/wood_pic04.jpg"
                alt="pic"
              />
              <div class="text">
                <h4>其他(纖維板、木漿板)</h4>
                <p>
                  家具，裝潢，窗花，櫥櫃門板，烤漆專用板、雕飾品、雷射專用板。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="car">
        <div class="wrapper">
          <div class="title">
            <h3 class="an fu">車種資源</h3>
          </div>
        </div>
        <div id="car_content_wrapper">
          <div id="car_content">
            <div class="detail an fu">
              <p>
                大豐環保每個據點都配有專業車輛機具，能針對客戶廠區大小、地域限制以及清運數量指派車種!
              </p>
              <p>
                為了確保廢木材能夠安全迅速地進行清運，車輛種類包括3.5噸貨車、7.7噸貨車、17噸平板車、17噸夾子車、26噸夾子車和35噸夾子車。
              </p>
            </div>
            <div class="list">
              <div class="item an fu">
                <div class="pic">
                  <img
                    loading="lazy"
                    src="@/assets/images/company_serve/wood/car_pic01.jpg"
                    alt="pic"
                  />
                </div>
                <h4>3.5噸貨車</h4>
                <p>清運少量廢木材</p>
                <div class="info">
                  <p>
                    載重量<br />
                    500公斤
                  </p>
                  <p>
                    木棧板約<br />
                    20片
                  </p>
                </div>
              </div>
              <div class="item an fu">
                <div class="pic">
                  <img
                    loading="lazy"
                    src="@/assets/images/company_serve/wood/car_pic02.jpg"
                    alt="pic"
                  />
                </div>
                <h4>17噸夾子車</h4>
                <p>清運中等數量廢木材</p>
                <div class="info">
                  <p>
                    載重量<br />
                    3000公斤
                  </p>
                  <p>
                    木棧板約<br />
                    180片
                  </p>
                </div>
              </div>
              <div class="item an fu">
                <div class="pic">
                  <img
                    loading="lazy"
                    src="@/assets/images/company_serve/wood/car_pic03.jpg"
                    alt="pic"
                  />
                </div>
                <h4>35噸夾子車</h4>
                <p>清運超大量廢木材</p>
                <div class="info">
                  <p>
                    載重量<br />
                    8000公斤
                  </p>
                  <p>
                    木棧板約<br />
                    300片
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="process">
        <div class="title">
          <h3 class="an fu">服務流程</h3>
        </div>
        <div id="process_line" style="--line: 0%">
          <div class="item an fr">
            <div class="process_wrapper">
              <div
                class="process_bg"
                data-percent="20"
                style="--percent: 0"
              ></div>
              <div class="process_content">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/wood/process_icon01.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>拍照提供</h4>
              <p>需要知道您木材種類、數量</p>
            </div>
          </div>
          <div class="item an fr d1">
            <div class="process_wrapper">
              <div
                class="process_bg"
                data-percent="40"
                style="--percent: 0"
              ></div>
              <div class="process_content">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/wood/process_icon02.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>上傳資料</h4>
              <p>提供企業資訊、木材地點</p>
            </div>
          </div>
          <div class="item an fr d15">
            <div class="process_wrapper">
              <div
                class="process_bg"
                data-percent="60"
                style="--percent: 0"
              ></div>
              <div class="process_content">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/wood/process_icon03.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>業務報價</h4>
              <p>客戶簽回報價單</p>
            </div>
          </div>
          <div class="item an fr d2">
            <div class="process_wrapper">
              <div
                class="process_bg"
                data-percent="80"
                style="--percent: 0"
              ></div>
              <div class="process_content">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/wood/process_icon04.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>簽訂合約</h4>
            </div>
          </div>
          <div class="item an fr d25">
            <div class="process_wrapper">
              <div
                class="process_bg"
                data-percent="100"
                style="--percent: 0"
              ></div>
              <div class="process_content">
                <img
                  loading="lazy"
                  src="@/assets/images/company_serve/wood/process_icon05.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>報廢清運</h4>
              <p>執行清運</p>
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
