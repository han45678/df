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

const type = ref(0);

const type_info = ref([
  {
    name: "食品報廢",
    pic: "type_icon01.svg",
    content: [
      {
        cn_name: "食品報廢",
        en_name: "Food Waste",
        text: "大豐環保具備甲級清運執照及各式國際認證，提供食品及相關產業客製化報廢和清運服務，如：包裝破袋、清運儲具、多樣清運車種、進行破壞標記、提供銷毀報告等，並配合再利用處理廠，讓報廢非浪費、資源全循環，大豐環保與企業一同守護民生食品安全。",
        pic: "type_pic01.jpg",
        item_project: "包裝食品｜食品原料｜生食熟食｜食品下腳料",
      },
      {
        cn_name: "食品報廢",
        en_name: "Food Waste",
        text: "大豐環保具備甲級清運執照及各式國際認證，提供食品及相關產業客製化報廢和清運服務，如：包裝破袋、清運儲具、多樣清運車種、進行破壞標記、提供銷毀報告等，並配合再利用處理廠，讓報廢非浪費、資源全循環，大豐環保與企業一同守護民生食品安全。",
        pic: "type_pic01.jpg",
        item_project: "包裝食品｜食品原料｜生食熟食｜食品下腳料",
      },
    ],
  },
  {
    name: "機台報廢",
    pic: "type_icon02.svg",
    content: [
      {
        cn_name: "機台報廢",
        en_name: "FMachine Scrapping",
        text: "針對報廢之工業設備、機台等提供完整的SOP流程，依照客戶需求配合使用之車輛、人力、機具等，從現場清運、報廢銷毀，再到後端合法處理廠，使機台報廢更迅速、安全，達成資源循環再利用。",
        pic: "type_pic02.jpg",
        item_project: "中古機台｜二手機台｜老舊、故障之工業設備",
      },
      {
        cn_name: "機台報廢",
        en_name: "FMachine Scrapping",
        text: "針對報廢之工業設備、機台等提供完整的SOP流程，依照客戶需求配合使用之車輛、人力、機具等，從現場清運、報廢銷毀，再到後端合法處理廠，使機台報廢更迅速、安全，達成資源循環再利用。",
        pic: "type_pic02.jpg",
        item_project: "中古機台｜二手機台｜老舊、故障之工業設備",
      },
    ],
  },
  {
    name: "商品報廢",
    pic: "type_icon03.svg",
    content: [
      {
        cn_name: "商品報廢",
        en_name: "Scrapping",
        text: "商品報廢之意義，大豐環保和您一樣重視。謹慎杜絕報廢商品再度流通回市面，除利用噴漆破壞標記，更可視商品特性進行物理破壞；若涉及商標授權之報廢商品，大豐環保也提供移除商標之服務，確保商業安全與市場公平性。",
        pic: "type_pic03.jpg",
        item_project:
          "周邊商品｜不良品｜3C設備｜生活用品｜家用產品｜商品零組件",
      },
      {
        cn_name: "商品報廢",
        en_name: "Scrapping",
        text: "商品報廢之意義，大豐環保和您一樣重視。謹慎杜絕報廢商品再度流通回市面，除利用噴漆破壞標記，更可視商品特性進行物理破壞；若涉及商標授權之報廢商品，大豐環保也提供移除商標之服務，確保商業安全與市場公平性。",
        pic: "type_pic03.jpg",
        item_project:
          "周邊商品｜不良品｜3C設備｜生活用品｜家用產品｜商品零組件",
      },
    ],
  },
  {
    name: "保稅品報廢",
    pic: "type_icon04.svg",
    content: [
      {
        cn_name: "保稅品報廢",
        en_name: "Bonded Scrapping",
        text: "舉凡需過海關之商品、食品及原物料等，大豐環保可配合至指定場域進行報廢。從估價→稅務諮詢→海關檢驗→人工分選→集中作業→上下車處理→處理廠銷毀，以專業嚴謹的流程，及電子業、傳產等豐富的合作經驗，使海關報廢更安全、高品質、有效率。",
        pic: "type_pic04.jpg",
        item_project: "任何需過海關之商品｜食品｜原物料",
      },
      {
        cn_name: "保稅品報廢",
        en_name: "Bonded Scrapping",
        text: "舉凡需過海關之商品、食品及原物料等，大豐環保可配合至指定場域進行報廢。從估價→稅務諮詢→海關檢驗→人工分選→集中作業→上下車處理→處理廠銷毀，以專業嚴謹的流程，及電子業、傳產等豐富的合作經驗，使海關報廢更安全、高品質、有效率。",
        pic: "type_pic04.jpg",
        item_project: "任何需過海關之商品｜食品｜原物料",
      },
    ],
  },
  {
    name: "IC報廢",
    pic: "type_icon05.svg",
    content: [
      {
        cn_name: "IC報廢",
        en_name: "IC Scrapping",
        text: "針對需報廢各式IC品項，大豐環保提供縝密報廢流程，從清點、分選、粉碎，再進到合法處理廠，確保IC報廢品項完全粉碎且無法回歸製程，保障科技廠製程技術安全。",
        pic: "type_pic05.jpg",
        item_project:
          " IC晶片｜PCB｜半成品｜庫存IC｜電腦零組件｜電子庫存呆料｜主被動元件",
      },
      {
        cn_name: "IC報廢",
        en_name: "IC Scrapping",
        text: "針對需報廢各式IC品項，大豐環保提供縝密報廢流程，從清點、分選、粉碎，再進到合法處理廠，確保IC報廢品項完全粉碎且無法回歸製程，保障科技廠製程技術安全。",
        pic: "type_pic05.jpg",
        item_project:
          " IC晶片｜PCB｜半成品｜庫存IC｜電腦零組件｜電子庫存呆料｜主被動元件",
      },
    ],
  },
]);

const slick = () => {
  $("#type_content .type_content_item_wrapper").slick();
};

onMounted(() => {
  
  const scrollingHandler = () => {
        let wh = window.innerHeight || document.documentElement.clientHeight;
        let ws = window.pageYOffset || document.documentElement.scrollTop;
        let m = wh / 2 + ws;

        // Replace '#process_line' with the actual ID or class of your element
        let processLineElement = document.getElementById('process_line');
        
        if (processLineElement && processLineElement.offsetTop < m + wh / 4) {
          animateItems();
          setInterval(()=>{
            animateItems();
          },30000);
            document.removeEventListener('scroll', scrollingHandler);
        }
    };

    document.addEventListener('scroll', scrollingHandler);
  slick();
});
</script>
<template>
  <div>
    <vheader :logo_color="true" :fixed="true" />

    <main id="company_serve" class="page scrap">
      <div id="banner">
        <div id="banner_pic">
          <img
            class="pc"
            src="@/assets/images/company_serve/scrap/banner.jpg"
            alt="banner"
          />
          <img
            class="m"
            src="@/assets/images/company_serve/scrap/banner_m.jpg"
            alt="banner"
          />
        </div>
      </div>

      <div id="banner_title">
        <h2 class="an fd">報廢服務</h2>
        <h3 class="an fd">企業服務 / 企業清運服務</h3>
      </div>

      <div id="serve_introduce">
        <div id="serve_introduce_content">
          <div class="pic an fu">
            <img loading="lazy" src="@/assets/images/company_serve/scrap/pic.jpg" alt="pic" />
          </div>
          <div class="text an fl">
            <h3>多樣報廢服務</h3>
            <p>
              大豐環保擁有多年報廢處理經驗，服務多家知名科技廠，並具備各項專業合法清運執照，針對客戶多樣報廢需求，安排後端清運資源，提供企業客製化報廢服務。
            </p>
            <p>
              服務項目包含：食品報廢、機台報廢、商品報廢、保稅品報廢、IC報廢、海關報廢等，且針對廢五金、廢銅、廢鐵、白鐵等再利用資源，大豐環保有專門合作管道，可確保銷毀並回收再利用。
            </p>
          </div>
        </div>
      </div>
      <div id="object">
        <div id="object_wrapper">
          <div class="title">
            <h3 class="an fu">服務對象</h3>
          </div>
          <div id="object_wrapper_content">
            <div class="item an fu">
              <div class="item_title">
                <div class="no">01</div>
                政府
              </div>
              <div class="item_content">
                <p>國稅局、衛生局、海關</p>
              </div>
            </div>
            <div class="item an fu">
              <div class="item_title">
                <div class="no">02</div>
                企業
              </div>
              <div class="item_content">
                <p>
                  科技業、光電業、資訊業、金融業、食品相關業、量販業者、各類製造業、各類設備業
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="type">
        <div class="title">
          <h3 class="an fu">報廢種類</h3>
        </div>
        <div id="type_label">
          <ul class="an fu">
            <li
              @click="type = index"
              :class="{ active: type == index }"
              v-for="(item, index) in type_info"
              :key="index"
            >
              <div class="icon">
                <img
                  :src="
                    require(`@/assets/images/company_serve/scrap/${item.pic}`)
                  "
                  alt="icon"
                />
              </div>
              <span>
                {{ item.name }}
              </span>
            </li>
          </ul>
        </div>
        <div id="type_content">
          <div id="type_conten_track" class="an fu">
            <div
              class="type_content_item"
              :class="{ active: type == index }"
              v-for="(item, index) in type_info"
              :key="index"
            >
              <div class="type_content_item_wrapper">
                <div
                  class="type_content_item_wrapper_item"
                  v-for="(items, index) in item.content"
                  :key="index"
                >
                  <div class="type_content_item_main">
                    <h5>
                      <span class="l1">{{ items.cn_name }}</span>
                      <span class="l2">{{ items.en_name }}</span>
                    </h5>
                    <p>{{ items.text }}</p>
                    <div class="pic">
                      <!-- Use dynamic import to handle image paths -->
                      <img
                        :src="
                          require(`@/assets/images/company_serve/scrap/${items.pic}`)
                        "
                        alt="pic"
                      />
                    </div>
                  </div>
                  <div class="type_content_item_project">
                    <img
                      src="@/assets/images/icon/message_icon.svg"
                      alt="icon"
                    />
                    <p>報廢項目：{{ items.item_project }}</p>
                  </div>
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
          <div class="item anp fr">
            <div class="process_wrapper">
              <div
                class="process_bg"
                data-percent="16.6"
                style="--percent: 0"
              ></div>
              <div class="process_content">
                <img
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
              src="@/assets/images/company_serve/contact_content_bg.jpg"
              alt="bg"
            />
          </div>
          <div id="contact_content">
            <div class="item an fu">
              <div class="icon">
                <img loading="lazy" src="@/assets/images/company_serve/tel.svg" alt="tel" />
              </div>
              <div class="text">
                <h5>客服電話</h5>
                <p>週一至週五 8:30~17:30</p>
                <a href="tel:0800-588717#3">0800-588717#3</a>
              </div>
            </div>
            <div class="item green an fu">
              <div class="icon">
                <img loading="lazy" src="@/assets/images/company_serve/line.svg" alt="tel" />
              </div>
              <div class="text">
                <h5>LINE</h5>
                <p>透過line@線上客服</p>
                <a href="https://www.zerozero-tw.com/line_open/?df-zopim" target="_blank">加入好友 @df717</a>
              </div>
            </div>
            <div class="item black an fu">
              <div class="icon">
                <img loading="lazy" src="@/assets/images/company_serve/email.svg" alt="tel" />
              </div>
              <div class="text">
                <h5>E-Mail</h5>
                <p>聯絡我們</p>
                <a href="mailto:df.waste@df-recycle.com">df.waste@df-recycle.com</a>
              </div>
            </div>
          </div>
          <div id="more" class="an fu">
            <router-link to="/enterprise">
              <span>企業清運服務</span>
              <img
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
