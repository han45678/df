<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { animateItems } from "@/assets/js/processPlugin";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";

const destroy = ref(0);

const destroy_an = ref(true);

const destroy_class = ref(0);

const cost_info = ref([
  {
    quantity: 1696,
    unit: "家",
    text: "企業參與",
    symbol: "",
  },
  {
    quantity: 985,
    unit: "噸",
    text: "機密文件再利用",
    symbol: "+",
  },
  {
    quantity: 296,
    unit: "噸",
    text: "機密文件成功減碳量",
    symbol: "",
  },
  {
    quantity: 22500,
    unit: "顆",
    text: "硬碟銷毀量",
    symbol: "",
  },
]);

const destroy_info = ref([
  {
    title: "機密文件銷毀",
    subtitle: "百家企業 × 大豐環保",
    text: "資料無論是個人或企業凡有個人資訊、帳務、稅單、藥單等機密資料，都需要被妥善銷毀。以往會用碎紙方式進行銷毀，但無形之中耗費時間及人力，亦無法確認銷毀後保證安全。以企業來說資料又是年度累積，更無法透過傳統方式進行銷毀。",
    pic: "destroy_pic01.jpg",
  },
  {
    title: "硬碟銷毀",
    subtitle: "百家企業 × 大豐環保",
    text: "資料無論是個人或企業凡有個人資訊、帳務、稅單、藥單等機密資料，都需要被妥善銷毀。以往會用碎紙方式進行銷毀，但無形之中耗費時間及人力，亦無法確認銷毀後保證安全。以企業來說資料又是年度累積，更無法透過傳統方式進行銷毀。",
    pic: "destroy_pic01.jpg",
  },
]);

const destroy_type = ref([
  {
    title: "機密文件種類",
    text: "各產業共同好評見證 <span>零洩密、零風險</span>",
    content: [
      {
        no: "01",
        title: "公家機關",
        text: "保存期效已過之文件、機密文件檔案、民眾申請之基本資料、會議紀錄",
      },
      {
        no: "02",
        title: "科技公司",
        text: "產品研發紀錄、專利申請書、合約書等",
      },
      {
        no: "03",
        title: "金融證券",
        text: "交易明細、財務報表、合約、客戶資料、報表、過期有價證劵等",
      },
      {
        no: "04",
        title: "保險業",
        text: "保單、理賠資料、保單合約等",
      },
      {
        no: "05",
        title: "公司行號",
        text: "報價單、人事資料、價格表、會議紀錄、薪資表、財務報表、發票、帳單等",
      },
      {
        no: "06",
        title: "醫院診所",
        text: "病歷資料、申請書、診斷證明、檢驗報告等",
      },
      {
        no: "07",
        title: "律師會計師事務所",
        text: "判決書、上訴書、客戶資料、稅單、帳務資料等",
      },
      {
        no: "08",
        title: "旅遊業",
        text: "申請表、簽證文件資料等",
      },
      {
        no: "09",
        title: "個人資料",
        text: "醫療單據、醫療紀錄、信用卡帳單、發票明細等",
      },
    ],
    type_text:
      "違禁品：資料夾、塑膠套、塑膠外皮、筆記本的線圈、照片、電子發票、工程圖、X光片、CD、DVD",
  },
  {
    title: "硬碟銷毀",
    text: "各產業共同好評見證 <span>零洩密、零風險</span>",
    content: [
      {
        no: "01",
        title: "公家機關",
        text: "存期效已過之文件、機密文件檔案、民眾申請之基本資料、會議紀錄",
      },
      {
        no: "02",
        title: "科技公司",
        text: "產品研發紀錄、專利申請書、合約書等",
      },
      {
        no: "03",
        title: "金融證券",
        text: "交易明細、財務報表、合約、客戶資料、報表、過期有價證卷等",
      },
      {
        no: "04",
        title: "保險業",
        text: "保單、理賠資料、保單合約等",
      },
      {
        no: "05",
        title: "公司行號",
        text: "報價單、人事資料、價格表、會議紀錄、薪資表、財務報表、發票、帳單等",
      },
      {
        no: "06",
        title: "公家機關",
        text: "存期效已過之文件、機密文件檔案、民眾申請之基本資料、會議紀錄",
      },
      {
        no: "07",
        title: "醫院診所",
        text: "病歷資料、申請書、診斷證明、檢驗報告等",
      },
      {
        no: "08",
        title: "律師會計<br>師事務所",
        text: "判決書、上訴書、客戶資料、稅單、帳務資料等",
      },
      {
        no: "09",
        title: "旅遊業",
        text: "申請表、簽證文件資料等",
      },
      {
        no: "10",
        title: "個人資料",
        text: "醫療單據、醫療紀錄、信用卡帳單、發票明細等",
      },
    ],
    type_text:
      "違禁品：資料夾、塑膠套、塑膠外皮、筆記本的線圈、照片、電子發票、工程圖、X光片、CD、DVD",
  },
]);

const scrollToElement = (data) => {
  let element = document.querySelector(`#${data}`);
  element.scrollIntoView({ behavior: "smooth" });
};

function cost() {
  let hasTriggered = false;

  window.addEventListener("scroll", () => {
    document.querySelectorAll("#cost #cost_content .item").forEach((item) => {
      if (item.classList.contains("an") && !hasTriggered) {
        let element = item.querySelector(".run_number");

        let dataNumber = parseFloat(element.getAttribute("data-number"));

        let currentNumber = 0; // 修改此行，從 dataNumber * 0.75 改為 0
        let step = dataNumber / 100;

        let timer = setInterval(function () {
          element.textContent = Math.floor(currentNumber).toLocaleString();
          if (currentNumber >= dataNumber) {
            clearInterval(timer);
            element.textContent = Math.floor(dataNumber).toLocaleString(); // 修改此行，確保最終數字不超過目標值
            hasTriggered = true;
          } else {
            currentNumber += step;
          }
        }, 50);
      }
    });
  });
}

function slick() {
  $(".destroy_type_wrapper").slick({
    infinite: true,
    slidesToShow: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: false,
        },
      },
    ],
  });
}

function destroy_switch(data) {
  destroy.value = data;
  destroy_an.value = false;

  if (destroy.value === 1) {
    scrollToElement("hdd");
  }

  setTimeout(() => {
    destroy_an.value = true;
  }, 300);
}

onMounted(() => {
  const scrollingHandler = () => {
    let wh = $(window).height();
    let ws = $(window).scrollTop();
    let m = wh / 2 + ws;

    if ($("#process_line").offset().top < m + wh / 4) {
      animateItems(0);

      // setInterval(()=>{
      //   animateItems();
      // },30000);

      document.removeEventListener("scroll", scrollingHandler);
    }
  };

  document.addEventListener("scroll", scrollingHandler);

  cost();
  slick();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll");
});
</script>
<template>
  <div>
    <vheader :logo_color="true" :fixed="true" />

    <main id="company_serve" class="page docdestroy">
      <div id="banner">
        <div id="banner_pic">
          <img
            src="@/assets/images/company_serve/docdestroy/banner.jpg"
            alt="banner"
          />
        </div>
      </div>
      <div id="banner_title">
        <h2 class="an fd">資安銷毀</h2>
        <h3 class="an fd">
          <span>
            <router-link to="/">企業服務</router-link>
          </span>
          / 
          <span>
            <router-link to="/enterprise">企業清運服務</router-link>
          </span>
        </h3>
      </div>
      <div id="serve_introduce">
        <div id="serve_introduce_content">
          <div class="pic an fu">
            <img
              src="@/assets/images/company_serve/docdestroy/pic.jpg"
              alt="pic"
            />
          </div>
          <div class="text an fl">
            <h3>提升企業防護力 完善銷毀零洩密</h3>
            <p>
              機密資訊同企業命脈，如何防止資料外洩，是企業共同課題，若資訊被外界獲取或洩露，會造成企業資產損失及營運風險。資安防漏除了落實於日常把關，更須努力至最後一刻，大豐環保以專業、安全、嚴謹的執行準則，提供銷毀服務，縝密防範資安外洩。
            </p>
          </div>
        </div>
      </div>

      <div id="cost">
        <div id="cost_title">
          <h3 class="an fu">大豐環保資安銷毀共減少的環境成本</h3>
        </div>
        <div id="cost_content">
          <div
            class="item an fu"
            v-for="(item, index) in cost_info"
            :key="index"
          >
            <div class="item_content">
              <div class="no">
                <span class="run_number" :data-number="item.quantity"></span>
                {{ item.symbol }}
                <span>
                  {{ item.unit }}
                </span>
              </div>
              <p>
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="destroy">
        <div id="destroy_label" class="an fu">
          <div
            class="item"
            v-for="(item, index) in destroy_info"
            :key="index"
            @click="
              destroy_switch(index);
              destroy = index;
            "
            :class="{ active: destroy == index }"
          >
            <span>{{ item.title }}</span>
          </div>
        </div>

        <div id="destroy_info">
          <div class="item">
            <div class="text an fr">
              <h3 :class="{ active: destroy_an }">
                {{ destroy_info[destroy].title }}
              </h3>
              <h4 :class="{ active: destroy_an }">
                {{ destroy_info[destroy].subtitle }}
              </h4>
              <p :class="{ active: destroy_an }">
                {{ destroy_info[destroy].text }}
              </p>
            </div>
            <div class="pic">
              <img
                :class="{ active: destroy_an }"
                :src="
                  require(`@/assets/images/company_serve/docdestroy/${destroy_info[destroy].pic}`)
                "
                alt="pic"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="destroy_type" class="an fu">
        <div
          class="destroy_type_item"
          v-for="(item, index) in destroy_type"
          :key="index"
          v-show="index == 0"
        >
          <!-- v-show="destroy == index" -->
          <div class="destroy_type_title">
            <h3 v-html="item.title" />
            <p v-html="item.text" />
          </div>
          <div class="destroy_type_wrapper">
            <div
              class="item"
              :class="index % 2 === 0 ? 'even' : 'odd'"
              v-for="(items, index) in item.content"
              :key="index"
            >
              <div class="destroy_type_content">
                <div class="destroy_type_content_item">
                  <div class="color">
                    <div class="no" v-html="items.no" />
                    <h5 v-html="items.title" />
                  </div>
                  <p v-html="items.text" />
                </div>
              </div>
            </div>
          </div>
          <div class="destroy_type_item_text">
            <p v-html="item.type_text" />
          </div>
        </div>
      </div>

      <div id="process">
        <div class="title an fu">
          <h3>服務流程</h3>
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
                  src="@/assets/images/company_serve/process_icon01.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>準備文件</h4>
              <p>注意不含違禁品</p>
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
                  src="@/assets/images/company_serve/process_icon02.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>打包文件</h4>
              <p>箱裝</p>
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
                  src="@/assets/images/company_serve/process_icon03.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>整理完成</h4>
              <p>提供數量、照片、物品地區、搬運需求</p>
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
                  src="@/assets/images/company_serve/process_icon04.svg"
                  alt="icon"
                />
              </div>
            </div>
            <div class="text">
              <h4>聯繫大豐環保</h4>
              <p>確認清運價格、時間及作業細項</p>
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
              <h4>清運作業</h4>
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
              <h4>完成流程</h4>
              <p>
                銷毀完成待業務提供<br />
                清運照片及證明
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="hdd">
        <div class="wrapper">
          <div class="text">
            <h3 class="an fu">硬碟銷毀</h3>
            <h4 class="an fu">專業資料抹除、硬碟消磁、銷毀服務</h4>
            <p class="an fu">
              資料並非刪除、格式化就可以完全刪除資料，數據復原公司可還原數據、駭客更可以透過破解密碼設備等方式來竊取資料。除了企業，個人智慧型手機、SD卡、隨身碟，這些暫存資料都有可能被復原的可能。
            </p>
            <h4 class="an fu">符合多項國際資安規範(資安分析)</h4>
            <ul class="an fu">
              <li>
                <b>ISO27001資安相關規範</b>
                A.11.2.7 設備汰除或再使用之保全
              </li>
              <li>
                <b>個人資料保護法</b>
                第 27 條
              </li>
              <li>
                <b>金融監督管理委員會</b>
                3.2.7
              </li>
            </ul>
          </div>
          <div class="video">
            <div class="video_content an fu">
              <iframe
                src="https://www.youtube-nocookie.com/embed/vk2XUq4tOjU?si=iYnWHLkKF16XNKhF"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div id="destroy_class">
        <div class="wrapper">
          <div class="title an fu">
            <h3>銷毀種類</h3>
            <p>
              選擇正確的方式與流程極為重要，掌握銷毀紀錄，保障自己的權責!
              <b>銷毀分為3種方式「抹除、消磁、破壞」：</b>
            </p>
          </div>
          <div class="content an fu">
            <div
              class="item"
              @click="destroy_class = 0"
              :class="{ active: destroy_class == 0 }"
            >
              <div class="item_content">
                <img
                  src="@/assets/images/company_serve/docdestroy/destroy_class_icon01.svg"
                  alt="icon"
                />
                <h4>抹除</h4>
              </div>
            </div>

            <div class="line"></div>

            <div
              class="item"
              @click="destroy_class = 1"
              :class="{ active: destroy_class == 1 }"
            >
              <div class="item_content">
                <img
                  src="@/assets/images/company_serve/docdestroy/destroy_class_icon02.svg"
                  alt="icon"
                />
                <h4>消磁</h4>
              </div>
            </div>

            <div class="line"></div>

            <div
              class="item"
              @click="destroy_class = 2"
              :class="{ active: destroy_class == 2 }"
            >
              <div class="item_content">
                <img
                  src="@/assets/images/company_serve/docdestroy/destroy_class_icon03.svg"
                  alt="icon"
                />
                <h4>破壞</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="destroy_process">
        <div class="title an fu">
          <h2 v-if="destroy_class==0">抹除 <span>品項＆流程</span></h2>
          <h2 v-if="destroy_class==1">消磁 <span>品項＆流程</span></h2>
          <h2 v-if="destroy_class==2">破壞 <span>品項＆流程</span></h2>
        </div>
        <div class="content">
          <div class="content_wrapper">
            <div class="item" :class="{ active: destroy_class == 0 }">
              <h3>服務品項：手機、USB隨身碟、硬碟、SSD、固態式硬碟</h3>
              <div class="process_content">
                <div class="item_process s">
                  <div class="pic">
                    <img
                      src="@/assets/images/company_serve/docdestroy/destroy_process_icon1_1.svg"
                      alt="icon"
                    />
                  </div>
                  <p>插入隨身碟/寄MAIL驅動程式/從雲端下載驅動程式</p>
                </div>
                <div class="arrow">
                  <img
                    src="@/assets/images/company_serve/docdestroy/destroy_arrow.svg"
                    alt="arrow"
                  />
                </div>
                <div class="item_process s">
                  <div class="pic">
                    <img
                      src="@/assets/images/company_serve/docdestroy/destroy_process_icon1_2.svg"
                      alt="icon"
                    />
                  </div>
                  <p>掃描QR Code</p>
                </div>
                <div class="arrow">
                  <img
                    src="@/assets/images/company_serve/docdestroy/destroy_arrow.svg"
                    alt="arrow"
                  />
                </div>
                <div class="item_process s">
                  <div class="pic">
                    <img
                      src="@/assets/images/company_serve/docdestroy/destroy_process_icon1_3.svg"
                      alt="icon"
                    />
                  </div>
                  <p>進行抹除</p>
                </div>
                <div class="arrow">
                  <img
                    src="@/assets/images/company_serve/docdestroy/destroy_arrow.svg"
                    alt="arrow"
                  />
                </div>
                <div class="item_process s">
                  <div class="pic">
                    <img
                      src="@/assets/images/company_serve/docdestroy/destroy_process_icon1_4.svg"
                      alt="icon"
                    />
                  </div>
                  <p>完成抹除後產生證書</p>
                </div>
              </div>
            </div>
            <div class="item" :class="{ active: destroy_class == 1 }">
              <h3>
                服務品項：HDD、2.5吋/3.5吋HDD硬碟、SSD固態硬碟、M.2磁碟、SATA
              </h3>
              <div class="process_content">
                <div class="item_process">
                  <div class="big_pic">
                    <img
                      src="@/assets/images/company_serve/docdestroy/destroy_process_icon2_1.jpg"
                      alt="icon"
                    />
                  </div>
                  <p>掃描條碼紀錄</p>
                </div>
                <div class="arrow big">
                  <img
                    src="@/assets/images/company_serve/docdestroy/destroy_arrow.svg"
                    alt="arrow"
                  />
                </div>
                <div class="item_process">
                  <div class="big_pic">
                    <img
                      src="@/assets/images/company_serve/docdestroy/destroy_process_icon2_2.jpg"
                      alt="icon"
                    />
                  </div>
                  <p>一秒強力消磁</p>
                  <span>
                    符合ISO27001（資訊安全管理系統的國際規範）<br>
                    磁場強度可達10,000 Oe以上，瞬間1秒銷（消）毀
                  </span>
                </div>
                <div class="arrow big">
                  <img
                    src="@/assets/images/company_serve/docdestroy/destroy_arrow.svg"
                    alt="arrow"
                  />
                </div>
                <div class="item_process">
                  <div class="big_pic">
                    <img
                      src="@/assets/images/company_serve/docdestroy/destroy_process_icon2_3.jpg"
                      alt="icon"
                    />
                  </div>
                  <p>提供銷毀證書</p>
                </div>
              </div>
            </div>
            <div class="item" :class="{ active: destroy_class == 2 }">
              <h3>服務品項：HDD,2.5吋/3.5吋HDD硬碟、SSD固態硬碟、M.2磁碟、SATA</h3>
              <div class="process_content">
                <div class="item_process">
                  <div class="big_pic">
                    <img
                      src="@/assets/images/company_serve/docdestroy/destroy_process_icon3_1.jpg"
                      alt="icon"
                    />
                  </div>
                  <p>重力鑽孔加壓破壞</p>
                </div>
                <div class="arrow big">
                  <span class="icon" />
                </div>
                <div class="item_process">
                  <div class="big_pic">
                    <img
                      src="@/assets/images/company_serve/docdestroy/destroy_process_icon3_2.jpg"
                      alt="icon"
                    />
                  </div>
                  <p>V型對折下壓式破壞</p>
                </div>
                <div class="arrow big">
                  <img
                    src="@/assets/images/company_serve/docdestroy/destroy_arrow.svg"
                    alt="arrow"
                  />
                </div>
                <div class="item_process">
                  <div class="big_pic">
                    <img
                      src="@/assets/images/company_serve/docdestroy/destroy_process_icon3_3.jpg"
                      alt="icon"
                    />
                  </div>
                  <p>提供銷毀證書</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact">
        <div class="title an fu">
          <h3>聯絡我們</h3>
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
