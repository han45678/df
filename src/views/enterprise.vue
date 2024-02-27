<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, onMounted } from "vue";
import $ from "jquery";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.js';

const banner_text = ref([
  {
    text: "<h3>以企業願景<br>實現減碳行動</h3><p>Corporate vision achieving<br/>Carbon reduction</p>",
  },
  {
    text: "<h3>以企業願景<br>實現減碳行動</h3><p>Corporate vision achieving<br/>Carbon reduction</p>",
  },
]);

const banner_pic = ref([
  {
    pic: "banner01.jpg",
  },
  {
    pic: "banner02.jpg",
  },
]);

function slick() {
  $("#banner_pic").slick({
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    autoplaySpeed: 10000,
    speed: 1000, // 切換動畫速度（毫秒）
    autoplay: true,
    asNavFor: "#banner_text .text_content",
  });

  $("#banner_text .text_content").slick({
    dots: false,
    infinite: true,
    fade: true,
    arrows: false,
    autoplaySpeed: 10000,
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
  },300);
});
</script>
<template>
  <div>
    <vheader :logo_color="true" />
    
    <main id="company_serve">
        <div id="banner" class="big">
            <div id="banner_text">
                <div class="text">
                    <div class="text_line _10s" />
                    <div class="text_content slick_an">
                        <div
                            class="item"
                            v-for="(item, index) in banner_text"
                            :key="index"
                            v-html="item.text"
                        />
                    </div>
                    <div class="link">
                        <a href="https://www.youtube.com/@DaFon2001"><img loading="lazy" src="@/assets/images/icon/play_icon.svg" alt="icon"/></a>
                        <a href="https://www.facebook.com/TaiwanDafon/"><img loading="lazy" src="@/assets/images/icon/fb_icon.svg" alt="icon"/></a>
                    </div>
                </div>
            </div>
            <div id="banner_pic">
                <img
                    v-for="(item, index) in banner_pic"
                    :key="index"
                    :src="require(`@/assets/images/company_serve/enterprise/${item.pic}`)"
                    alt="banner"
                />
            </div>
        </div>
        <div id="banner_title">
            <h2 class="an fd">
                企業清運服務
            </h2>
            <h3 class="an fd">
                <span>
                    <router-link to="/">大豐環保</router-link>
                </span>
                / 企業服務
            </h3>
        </div>
        <div id="serve_introduce">
            <div id="serve_introduce_content" class="big">
                <div class="text an fr">
                    <h3>
                        落實CSR、接軌ESG
                    </h3>
                    <p>
                        大豐環保致力於前衛理念與軟實力顛覆台灣環保產業，整合全台北中南多家合法合作廠商，以企業為中心提供最專業的企業回收服務。
                    </p>
                    <p>
                        全球因應氣候變遷、低碳轉型，各國積極研擬方案，致力達成2050年達到淨零碳排的目標。循環經濟ESG為大豐環保主要打造的供應鏈，回收與收回處理創造再生品的資源。積極落實CSR、接軌ESG，推動循環經濟，務實創造永續的價值。
                    </p>
                </div>
                <div class="video an fu">
                    <div class="video_content">
                        <iframe src="https://www.youtube-nocookie.com/embed/cTnzgvlcK4k?si=myhZAsiNerJcFRgD"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>

        <div id="serve_item">
            <div class="wrapper">
                <div class="title">
                    <h3>
                        服務項目
                    </h3>
                    <p>
                        全循環回收再利用服務模式，提供您專屬的環保服務團隊
                    </p>
                </div>
                <div id="serve_item_content">
                        <a class="item item1" href="javascript:void(0)">
                            <div class="text">
                                <h5>報廢服務<span>Scrap Disposal</span></h5>
                                <p>IC / 食品 / 海關 / 保品非保</p>
                            </div>
                            <div class="pic">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/serve_item_pic01.jpg" alt="pic">
                            </div>
                        </a>
                        <a class="item item2" href="javascript:void(0)">
                            <div class="text">
                                <h5>廢棄物棄置案<span>Waste Disposal Projects</span></h5>
                                <p>非法棄置案 / 特定報廢處理</p>
                            </div>
                            <div class="pic">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/serve_item_pic02.jpg" alt="pic">
                            </div>
                        </a>
                        <a class="item item3" href="javascript:void(0)">
                            <div class="text">
                                <h5>廢棄物減量<span>SRF</span></h5>
                                <p>廢棄物規劃 / 能源化SRF</p>
                            </div>
                            <div class="pic">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/serve_item_pic03.jpg" alt="pic">
                            </div>
                        </a>
                        <a class="item item4" href="javascript:void(0)">
                            <div class="text">
                                <h5>事業廢棄物<span>Corporation Waste Disposal</span></h5>
                                <p>統包 / 駐廠 / 儲區規劃</p>
                            </div>
                            <div class="pic">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/serve_item_pic04.jpg" alt="pic">
                            </div>
                        </a>
                        <a class="item item5" href="javascript:void(0)">
                            <div class="text">
                                <h5>資安銷毀<span>Document Destruction</span></h5>
                                <p>機密文件 / 硬碟銷毀</p>
                            </div>
                            <div class="pic">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/serve_item_pic05.jpg" alt="pic">
                            </div>
                        </a>
                        <a class="item item6" href="javascript:void(0)">
                            <div class="text">
                                <h5>廢木材清運<span>Wood Waste Disposal</span></h5>
                                <p>木棧板 / 木箱 / 裝潢板</p>
                            </div>
                            <div class="pic">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/serve_item_pic06.jpg" alt="pic">
                            </div>
                        </a>
                        <a class="item item7" href="javascript:void(0)">
                            <div class="text">
                                <h5>生活垃圾清運<span>Household Waste</span></h5>
                                <p>垃圾清運服務</p>
                            </div>
                            <div class="pic">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/serve_item_pic07.jpg" alt="pic">
                            </div>
                        </a>
                </div>
            </div>
        </div>

        <div id="advantage_item">
            <div class="title">
                <h3 class="an fu">
                    服務優勢
                </h3>
            </div>
            <div id="advantage_content" class="lazy_img_wrapper">
                <div class="item an fu">
                    <div class="no">
                        01
                    </div>
                    <div class="icon">
                        <div 
                            class="lazy_img_pic lazy_img" 
                            :data-src="require(`@/assets/images/icon/enterprise_1.svg`)"
                        />
                    </div>
                    <div class="text">
                        <h4>
                            合法清除證照 
                        </h4>
                        <p class="color_main">
                            甲級廢棄物清除許可證<br>
                            ISO 9001、ISO 14001、ISO 45001
                        </p>
                    </div>
                </div>
                <div class="item an fu">
                    <div class="no">
                        02
                    </div>
                    <div class="icon">
                        <div 
                            class="lazy_img_pic lazy_img" 
                            :data-src="require(`@/assets/images/icon/enterprise_2.svg`)"
                        />
                    </div>
                    <div class="text">
                        <h4>
                            多服務據點
                        </h4>
                        <p>
                            <span>整合全台北中南據點</span>
                            <span>高效率省成本</span>
                        </p>
                    </div>
                </div>
                <div class="item an fu">
                    <div class="no">
                        03
                    </div>
                    <div class="icon">
                        <div 
                            class="lazy_img_pic lazy_img" 
                            :data-src="require(`@/assets/images/icon/enterprise_3.svg`)"
                        />
                    </div>
                    <div class="text">
                        <h4 class="color_main">
                            專屬車機系統
                        </h4>
                        <p>
                            <span>提供即時監控影像</span>
                            <span>GPS清運路徑軌跡</span>
                        </p>
                    </div>
                </div>
                <div class="item an fu">
                    <div class="no">
                        04
                    </div>
                    <div class="icon">
                        <div 
                            class="lazy_img_pic lazy_img" 
                            :data-src="require(`@/assets/images/icon/enterprise_4.svg`)"
                        />
                    </div>
                    <div class="text">
                        <h4>
                            紀錄透明化
                        </h4>
                        <p>
                            <span>查看相關清運數據</span>
                            <span>提供結案報告</span>
                        </p>
                    </div>
                </div>
                <div class="item an fu">
                    <div class="no">
                        05
                    </div>
                    <div class="icon">
                        <div 
                            class="lazy_img_pic lazy_img" 
                            :data-src="require(`@/assets/images/icon/enterprise_5.svg`)"
                        />
                    </div>
                    <div class="text">
                        <h4>
                            顧問服務
                        </h4>
                        <p>
                            <span>環保許可申請申報</span>
                            <span>環保法規規範諮詢</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div id="scope">
            <div class="wrapper">
                <div class="title px0">
                    <h3>服務範圍</h3>
                </div>
                <div class="content">
                    <img loading="lazy" class="bg" src="@/assets/images/company_serve/enterprise/scope_bg.jpg" alt="bg">
                    <div class="text">
                        <div class="item">
                            <h5>
                                3000+
                            </h5>
                            <p>
                                合作企業
                            </p>
                        </div>
                        <div class="item">
                            <h6>北、中、南部</h6>
                            <p>
                                東部地區不提供服務
                            </p>
                        </div>
                        <div class="item">
                            <h5>
                                100+
                            </h5>
                            <p>
                                車隊服務數量
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="cooperate">
            <div class="title">
                <h3>合作類型</h3>
            </div>
            <div class="content">
                <div id="cooperate_item">
                    <div class="group">
                        <div class="item">
                            <div class="item_content">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/cooperate_pic01.png" alt="pic">
                                <h5>
                                    電子科技產業
                                </h5>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item_content">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/cooperate_pic02.png" alt="pic">
                                <h5>
                                    服務產業
                                </h5>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item_content">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/cooperate_pic03.png" alt="pic">
                                <h5>
                                    食品製造業
                                </h5>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item_content">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/cooperate_pic04.png" alt="pic">
                                <h5>
                                    金融產業
                                </h5>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item_content">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/cooperate_pic05.png" alt="pic">
                                <h5>
                                    政府單位
                                </h5>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item_content">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/cooperate_pic06.png" alt="pic">
                                <h5>
                                    運輸物流產業
                                </h5>
                            </div>
                        </div>
                        <div class="item">
                            <div class="item_content">
                                <img loading="lazy" src="@/assets/images/company_serve/enterprise/cooperate_pic07.png" alt="pic">
                                <h5>
                                    醫療產業
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="cooperate_pic">
                    <div class="pic">
                        <img loading="lazy" src="@/assets/images/company_serve/enterprise/cooperate_pic.jpg" alt="pic">
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
                    <img loading="lazy" src="@/assets/images/company_serve/contact_content_bg.jpg" alt="bg">
                </div>
                <div id="contact_content">
                    <div class="item an fu">
                        <div class="icon">
                            <img loading="lazy" src="@/assets/images/company_serve/tel.svg" alt="tel">
                        </div>
                        <div class="text">
                            <h5>客服電話</h5>
                            <p>週一至週五 8:30~17:30</p>
                            <a href="tel:0800-588717#3">0800-588717#3</a>
                        </div>
                    </div>
                    <div class="item green an fu">
                        <div class="icon">
                            <img loading="lazy" src="@/assets/images/company_serve/line.svg" alt="tel">
                        </div>
                        <div class="text">
                            <h5>LINE</h5>
                            <p>透過line@線上客服</p>
                            <a href="https://www.zerozero-tw.com/line_open/?df-zopim" target="_blank">加入好友 @df717</a>
                        </div>
                    </div>
                    <div class="item black an fu">
                        <div class="icon">
                            <img loading="lazy" src="@/assets/images/company_serve/email.svg" alt="tel">
                        </div>
                        <div class="text">
                            <h5>E-Mail</h5>
                            <p>聯絡我們</p>
                            <a href="mailto:df.waste@df-recycle.com">df.waste@df-recycle.com</a>
                        </div>
                    </div>
                </div>
                <div id="more" class="an fu">
                    <router-link to="/pcr-materials">
                        <span>再生循環產品</span>
                        <img loading="lazy" src="@/assets/images/company_serve/more_arrow.svg" alt="arrow">
                    </router-link>
                </div>
            </div>
        </div>
    </main>
    
    <vfooter />
  </div>
</template>
