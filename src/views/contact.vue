<script setup>
import swal from 'sweetalert';
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import identify from "@/components/identify.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

let script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://smtpjs.com/v3/smtp.js";
document.body.appendChild(script);

const about_introduce = ref(true);
const identifyCode = ref("7777");

const name = ref("");
const email = ref("");
const tel = ref("");
const add = ref("");
const inquiry_type_input = ref("請選擇");
const inquiry_type = ref([
  "回收諮詢",
  "報廢清運",
  "站點加盟",
  "再生塑膠粒",
  "綠色商品",
  "異業合作",
  "媒體邀約",
  "其他",
]);

const select_box = ref(false);

const need = ref("");
const code = ref("");

function generate() {
  var result = "";
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";

  for (var i = 0; i < 2; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  identifyCode.value = result
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
}

function post_form() {
  const feedbackData = {
    username: name.value,
    address: add.value,
    mail: email.value,
    phone: tel.value,
    question: inquiry_type_input.value,
    content: need.value,
  };

  // 使用Axios發送POST請求
  axios
    .post("http://34.81.192.108:13000/feedback/addFeedback", feedbackData, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      // 請求成功處理
      console.log(response.data);

      name.value = "";
      add.value = "";
      email.value = "";
      tel.value = "";
      inquiry_type_input.value = "請選擇";
      need.value = "";
      code.value = "";

      generate();
    })
    .catch((error) => {
      // 請求失敗處理
      console.error("Error:", error);
    });
}

// function sendEmail() {
//   window.Email.send({
//     SecureToken: "z3r4U2Xu+ut6",
//     To: "service@df-recycle.com",
//     From: `han<${email.value}>`,
//     Subject: "SMTP.JS測試",
//     Body: "SMTP.JS測試!!!",
//   }).then((message) => {
//     console.log("SMTP");
//     console.log(message);
//   });
// }

function send() {
  if (name.value) {
    if (add.value) {
      if (email.value) {
        if (tel.value) {
          if (inquiry_type_input.value !== "請選擇") {
            if (need.value) {
              if (identifyCode.value.toLowerCase() === code.value.toLowerCase()){
                swal("成功", "表單送出!", "success");
                post_form();
                // sendEmail();
              }else {
                swal("錯誤", "驗證碼錯誤!", "error");
              }
            }else{
              swal("錯誤", "需求說明未填寫!", "error");
            }
            
          }else{
            swal("錯誤", "詢問類型未選擇!", "error");
          }
          
        }else{
          swal("錯誤", "電話未填寫!", "error");
        }
        
      }else{
        swal("錯誤", "信箱未填寫!", "error");
      }
      
    }else{
      swal("錯誤", "地址未填寫!", "error");
    }
    
  }else{
    swal("錯誤", "姓名未填寫!", "error");
  }
}

function test(){
  console.log("123");
}

onMounted(() => {
  generate();
  
});
</script>
<template>
  <div>
    <vheader :logo_color="true" :fixed="true" />

    <main id="about" class="contact">
      <div id="banner">
        <div id="banner_pic">
          <img
            loading="lazy"
            class="pc"
            src="@/assets/images/about/banner04.jpg"
            alt="banner"
          />
          <img
            loading="lazy"
            class="m"
            src="@/assets/images/about/banner04_m.jpg"
            alt="banner"
          />
        </div>
      </div>
      <div id="banner_title">
        <h2 class="an fd">聯絡我們</h2>
        <h3 class="an fd">
          <span>
            <router-link class="color" to="/">大豐環保</router-link>
          </span>
          / 關於大豐
        </h3>
      </div>
      <div id="about_introduce">
        <div id="about_introduce_content" class="bookmark_bg">
          <div class="pic an fu">
            <div class="bookmark_bg_pic">
              <div class="bookmark_bg_pic_contetn">
                <img
                  loading="lazy"
                  :class="{ active: about_introduce }"
                  src="@/assets/images/about/pic04.jpg"
                  alt="pic"
                />
                <img
                  loading="lazy"
                  :class="{ active: !about_introduce }"
                  src="@/assets/images/about/pic05.jpg"
                  alt="pic"
                />
              </div>
            </div>
          </div>
          <div class="text an fu">
            <div class="bookmark">
              <div class="label">
                <div
                  class="item"
                  :class="{ active: about_introduce }"
                  @click="about_introduce = true"
                >
                  <span>台中總公司</span>
                </div>
                <div
                  class="item"
                  :class="{ active: !about_introduce }"
                  @click="about_introduce = false"
                >
                  <span>再生處理廠</span>
                </div>
              </div>
              <div class="content">
                <div class="item" :class="{ active: about_introduce }">
                  <ul>
                    <li>
                      <h5>客服電話</h5>
                      <p>週一至週五 8:30~17:30</p>
                      <a href="tel:0800-588-717">0800-588-717</a>
                    </li>
                    <li>
                      <h5>聯絡地址</h5>
                      <p>台中市北屯區崇德九路287號</p>
                      <a href="https://maps.app.goo.gl/5HMzFxrW1VbKtaF48"
                        >MAP</a
                      >
                    </li>
                    <li>
                      <h5>E-Mail</h5>
                      <p>透過Mail聯絡我們</p>
                      <a href="mailto:service@df-recycle.com"
                        >service@df-recycle.com</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="item" :class="{ active: !about_introduce }">
                  <ul>
                    <li>
                      <h5>全興廠</h5>
                      <p>
                        <a href="tel:04797-7555">(04)797-7555</a>、08:00~17:00
                      </p>
                      <p>50843 彰化縣和美鎮全興工業區工一路7號</p>
                      <a href="https://maps.app.goo.gl/kG7MQERvWZiWPBBu5"
                        >MAP</a
                      >
                    </li>
                    <li>
                      <h5>宏偉廠</h5>
                      <p>
                        <a href="tel:042630-2428<">(04)2630-2428</a
                        >、08:00~17:00
                      </p>
                      <p>435 台中市梧棲區向上路九段323號</p>
                      <a href="https://maps.app.goo.gl/kHtT2orcfUsPXcKX6"
                        >MAP</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="connection_title">
        <div class="wrapper">
          <h3 class="an fu">
            <img
              loading="lazy"
              class="icon"
              src="@/assets/images/about/title_icon.svg"
              alt="title_icon"
            />
            與我聯絡
          </h3>
          <p class="an fu">
            如果您有任何服務或業務相關問題，歡迎透過下列表單聯繫我們 !
            大豐環保感謝您。
          </p>
        </div>
      </div>

      <div id="connection">
        <div class="wrapper">
          <div class="item">
            <div class="input_box_text">
              <p>(*為必填欄位)</p>
            </div>
          </div>
          <div class="item">
            <label>
              姓名
              <span>*</span>
            </label>
            <div class="input_box">
              <input type="text" v-model="name" placeholder="請輸入姓名" />
            </div>
          </div>
          <div class="item">
            <label>
              E-mail
              <span>*</span>
            </label>
            <div class="input_box">
              <input type="text" v-model="email" placeholder="請輸入E-mail" />
            </div>
          </div>
          <div class="item">
            <label>
              聯絡電話
              <span>*</span>
            </label>
            <div class="input_box">
              <input type="text" v-model="tel" placeholder="請輸入電話" />
            </div>
          </div>
          <div class="item">
            <label>
              地址
              <span>*</span>
            </label>
            <div class="input_box">
              <input type="text" v-model="add" placeholder="請輸入地址" />
            </div>
          </div>
          <div class="item">
            <label>
              詢問類型
              <span>*</span>
            </label>
            <div class="select_box" :class="{'active':select_box}">
              <div style="position: absolute;width: 100%;height: 100%;top: 0;left: 0; z-index: 1;" @click="select_box = !select_box" ></div>
              <input type="text" disabled :value="inquiry_type_input" />
              <ul>
                <li
                  v-for="(item, index) in inquiry_type"
                  :key="index"
                  @click="inquiry_type_input = inquiry_type[index],select_box=false"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <div class="item">
            <label>
              需求說明
              <span>*</span>
            </label>
            <div class="input_box">
              <textarea v-model="need" placeholder="請輸入需求"></textarea>
            </div>
          </div>

          <div class="item">
            <label>
              驗證碼
              <span>*</span>
            </label>
            <div class="input_box">
              <input class="code" type="text" v-model="code" />
              <identify @click="generate" :identifyCode="identifyCode" />
            </div>
          </div>

          <div class="item">
            <button @click="send">送出</button>
          </div>
        </div>
      </div>
    </main>

    <vfooter />
  </div>
</template>
