import { createRouter, createWebHistory } from "vue-router";
import $ from "jquery";

import home from "@/views/home.vue";
import aboutdafon from "@/views/aboutdafon.vue";
import certificate from "@/views/certificate.vue";
import contact from "@/views/contact.vue";
import docdestroy from "@/views/docdestroy.vue";
import enterprise from "@/views/enterprise.vue";
import history from "@/views/history.vue";

import industrialwaste from "@/views/industrialwaste.vue";
import locations from "@/views/locations.vue";
import news_page from "@/views/news_page.vue";
import news from "@/views/news.vue";
import pcrMaterials from "@/views/pcr-materials.vue";
import scrap from "@/views/scrap.vue";
import wood from "@/views/wood.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/aboutdafon",
    name: "aboutdafon",
    component: aboutdafon,
  },
  {
    path: "/certificate",
    name: "certificate",
    component: certificate,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/docdestroy",
    name: "docdestroy",
    component: docdestroy,
  },
  {
    path: "/enterprise",
    name: "enterprise",
    component: enterprise,
  },
  {
    path: "/history",
    name: "history",
    component: history,
  },
  {
    path: "/industrialwaste",
    name: "industrialwaste",
    component: industrialwaste,
  },
  {
    path: "/locations",
    name: "locations",
    component: locations,
  },
  {
    path: "/news_page",
    name: "news_page",
    component: news_page,
  },
  {
    path: "/news",
    name: "news",
    component: news,
  },
  {
    path: "/pcr-materials",
    name: "pcr-materials",
    component: pcrMaterials,
  },
  {
    path: "/scrap",
    name: "scrap",
    component: scrap,
  },
  {
    path: "/wood",
    name: "wood",
    component: wood,
  }
];

const router = createRouter({
  history: createWebHistory("/demo/df_vue/"),
  routes,
});

function handleScroll() {
    let wh = $(window).height();
    let ws = $(window).scrollTop();
    let m = wh / 2 + ws;

    // Add 'an_go' class to elements in view
    $(".an").each(function () {
        if ($(this).offset().top < m - $(this).height() / 2 + 400) {
            $(this).addClass("an_go");
        } else {
            $(this).removeClass("an_go");
        }
    });

    // Remove 'lazy_img' class from images already loaded
    $(".lazy_img").each(function () {
        if ($(this).offset().top < m + wh / 4) {
            $(this).attr('src', $(this).data('src')).removeClass('lazy_img');
        }
    });
}

router.beforeEach((to, from, next) => {

  document.querySelector("#transitions").classList.remove("active");

  setTimeout(()=>{
    next();
  },300)
  
})

router.afterEach(() => {
  setTimeout(()=>{
    handleScroll();
  },500)
  setTimeout(()=>{
    document.querySelector("#transitions").classList.add("active");
  },600)
})



export default router;
