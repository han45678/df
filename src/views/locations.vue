<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

const googleMapsScript = document.createElement('script');
googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCgqDzQUEz5y1vxK46m-UXpVO_AD2jSO6Q&callback=initMap`;
googleMapsScript.defer = true;
document.head.appendChild(googleMapsScript);


const mapView = ref(null);

// 縣市資料
const area_info = ref([]);
const area = ref("台中市");

//地址
const keywords = ref("");

// 型態
const business_type = ref("大豐環保");
const business_type_info = ref([]);
const locations = ref([]);


function openMap() {
  
  const map = new window.google.maps.Map(mapView.value, {

    center: { 
      lat:parseFloat(filterLocations.value[0].latitude - 0.075), 
      lng: window.innerWidth > 1024 ? parseFloat(filterLocations.value[0].longitude - 0.15) : parseFloat(filterLocations.value[0].longitude)
    },
    zoom: 12,
    styles: [
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#e9e9e9",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#dedede",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#ffffff",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#333333",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#f2f2f2",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#fefefe",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#fefefe",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
    ],
  });

  // Add markers to the map
  for (const location of filterLocations.value) {
    const customIcon = {
      url: require("@/assets/images/icon/map_icon.svg"),
      scaledSize: new window.google.maps.Size(30, 38),
    };

    const marker = new window.google.maps.Marker({
      position: { lat: parseFloat(location.latitude), lng: parseFloat(location.longitude) },
      map,
      title: location.name,
      icon: customIcon,
    });

    const infoWindow = new window.google.maps.InfoWindow({
      content: `<div><strong>${location.name}</strong><br>${location.address}<br>Tel: ${location.tel}<br>Hours: ${location.hours}</div>`,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  }
}

const filterLocations = ref(null);

// 點擊事件處理函數
const handleFilterClick = () => {
    filterLocations.value = locations.value.slice(0, 5);

    // .filter((item) => {
    //     // Check if area.value is not the default value
    //     const isAreaMatch = area.value !== "縣市地區" ? item.name === area.value : true;
        
    //     // Check if business_type.value is not the default value
    //     const isBusinessTypeMatch = business_type.value !== "經營型態" ? item.name === business_type.value : true;

    //     // Check if keywords are included in name or address
    //     const isKeywordMatch = (item.name && item.name.includes(keywords.value)) || (item.address && item.address.includes(keywords.value));

    //     // Include the item in the filtered result only if all conditions are met
    //     return isAreaMatch && isBusinessTypeMatch && isKeywordMatch;
    // })

    openMap();
};


// 使用 Promise.all 等待所有请求完成
Promise.all([
  axios.get("http://34.81.192.108:13000/api/v1/locations/list"),
  axios.get("http://34.81.192.108:13000/api/v1/locations/business"),
  axios.get("http://34.81.192.108:13000/api/v1/locations/regions")
])
  .then((responses) => {
    
    const [locationsResponse, businessResponse, regionsResponse] = responses;

    // 資料列表
    locations.value = locationsResponse.data.result.locations;

    // 資料型態
    business_type_info.value = businessResponse.data.result.business;

    // 縣市資料
    area_info.value = regionsResponse.data.result.regions;
    
    console.log("1");

    // 执行处理地图的函数
    googleMapsScript.onload = handleFilterClick;

  })
  .catch((error) => {
    console.error("Error:", error);
  });

onMounted(() => {
  // googleMapsScript.onload = handleFilterClick;
});
</script>
<template>
  <div>
    <vheader :logo_color="true" />

    <main id="locations">
      <div id="banner">
        <div id="banner_pic">
          <img loading="lazy" src="@/assets/images/locations/banner.jpg" alt="banner" />
        </div>
      </div>
      <div id="banner_title">
        <h2 class="an fd">服務據點</h2>
        <h3 class="an fd">
          <span><router-link to="/">大豐環保</router-link></span>/服務據點
        </h3>
      </div>
      <div id="locations_content">
        <div id="locations_wrapper">
          <div id="locations_m">服務據點</div>
          <div id="locations_filters">
            <div class="form">
              <div class="select">
                <input type="text" :value="area" disabled />
                <img
                  class="arrow"
                  src="@/assets/images/locations/arrow.svg"
                  alt="icon"
                />
                <ul>
                  <li
                    v-for="(item, index) in area_info"
                    :key="index"
                    @click="area = item.name"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>

              <div class="input">
                <input
                  type="text"
                  placeholder="請輸入站名或地址查詢"
                  v-model="keywords"
                />
              </div>

              <div class="select">
                <input type="text" :value="business_type" disabled />
                <img
                  class="arrow"
                  src="@/assets/images/locations/arrow.svg"
                  alt="icon"
                />
                <ul>
                  <li
                    v-for="(item, index) in business_type_info"
                    :key="index"
                    @click="business_type = index"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>

              <button @click="handleFilterClick()">查詢據點</button>
            </div>
            <div id="locations_icon">
              <div class="item">
                <img
                  src="@/assets/images/locations/map_icon01.svg"
                  alt="icon"
                />
                <span>大豐環保</span>
              </div>
              <div class="item">
                <img
                  src="@/assets/images/locations/map_icon02.svg"
                  alt="icon"
                />
                <span>合作據點</span>
              </div>
              <div class="item">
                <img
                  src="@/assets/images/locations/map_icon03.svg"
                  alt="icon"
                />
                <span>zero zero</span>
              </div>
            </div>
            <div id="locations_list">
              <div class="locations_title">離最近的站區</div>
              <ul>
                <li v-for="(item, index) in filterLocations" :key="index">
                  <div class="icon">
                    <img
                      src="@/assets/images/locations/coordinate_w.svg"
                      alt="icon"
                    />
                  </div>
                  <div class="name" v-html="item.title" />
                  <div class="address">
                    <p>{{ item.address }}　​{{ item.phone }}​</p>
                    <p>{{ item.btime }}​</p>
                  </div>
                  <div class="type">
                    <img
                      v-if="item.type == 1"
                      src="@/assets/images/locations/map_icon01.svg"
                      alt="icon"
                    />
                    <img
                      v-else-if="item.type == 2"
                      src="@/assets/images/locations/map_icon02.svg"
                      alt="icon"
                    />
                    <img
                      v-else-if="item.type == 3"
                      src="@/assets/images/locations/map_icon03.svg"
                      alt="icon"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="title">
            <h3>營業據點</h3>
            <p>
              站區營業狀況可能因節日、工程或其他事項臨時調整，如有回收等需求建議請先致電確認營業狀況!
            </p>
          </div>
        </div>
        <div id="map" ref="mapView"></div>
      </div>
      <div id="more" class="an fu">
        <router-link to="/locations">
          <span>資源回收站</span>
          <img loading="lazy" src="@/assets/images/company_serve/more_arrow.svg" alt="arrow" />
        </router-link>
      </div>
    </main>

    <vfooter />
  </div>
</template>
