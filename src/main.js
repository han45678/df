import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $ from "jquery";
import Cotton from 'cottonjs';

// console.log(Cotton);
// or using DOM element
const cursor = document.querySelector('#cotton-cursor');
const cottonCursor = new Cotton(cursor);
console.log(cottonCursor);

// Function to handle scroll and image loading logic
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
    $(".lazy_img").each(function (index) {
        
        var $img = $(this);
    
        // 延迟执行，每个元素相隔一秒
        setTimeout(function () {
            if ($img.offset().top < m + wh / 4) {
                // 更新为使用background-image样式
                console.log("重載圖片");
                $img.css('background-image', 'url(' + $img.data('src') + ')');
            }
        }, index * 1000); // index乘以1000毫秒，即一秒
    });
    
}

// Execute once when the page is loaded
$(document).ready(function () {
    handleScroll(); // Initial execution

    if ($(".slick_an")) {
        $(".slick_an").addClass("slick_an_go");
    }

    // Add scroll event listener
    $(window).scroll(handleScroll);
});

console.log(router);



// Create and mount the Vue app
createApp(App).use(store).use(router).mount("#app");




