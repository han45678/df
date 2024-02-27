<script setup>
import vheader from "@/components/header.vue";
import vfooter from "@/components/footer.vue";
import { ref, onMounted } from "vue";
import axios from "axios";

// const googleMapsScript = document.createElement('script');
// googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCgqDzQUEz5y1vxK46m-UXpVO_AD2jSO6Q&callback=initMap`;
// googleMapsScript.defer = true;
// document.head.appendChild(googleMapsScript);

async function loadScript(url) {
  return new Promise((res) => {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
      // only required for IE <9
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          res();
        }
      };
    } else {
      //Others
      script.onload = function () {
        res();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  });
}

const mapView = ref(null);

// 縣市資料
const area_info = ref([]);
const area = ref("台中市");

//地址
const keywords = ref("");

// 型態
const business_type = ref("經營型態");
const business_type_no = ref(null);
const business_type_info = ref([]);
const locations = ref([]);

function openMap() {
  const map = new window.google.maps.Map(mapView.value, {
    center: {
      lat: parseFloat(filterLocations.value[0].latitude - 0.075),
      lng:
        window.innerWidth > 1024
          ? parseFloat(filterLocations.value[0].longitude - 0.15)
          : parseFloat(filterLocations.value[0].longitude),
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
      position: {
        lat: parseFloat(location.latitude),
        lng: parseFloat(location.longitude),
      },
      map,
      title: location.name,
      icon: customIcon,
    });

    const infoWindow = new window.google.maps.InfoWindow({
      content: `<div><strong>${location.title}</strong><br>${location.address}<br>Tel: ${location.phone}<br>Hours: ${location.btime}</div>`,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  }
}

function type_switch(data) {
  console.log(data);
  business_type.value = business_type_info.value[data].name;
  business_type_no.value = business_type_info.value[data].id;
}

const filterLocations = ref(null);

//沒有定位下篩選
function filterLocationsFilter() {
  filterLocations.value = locations.value
    .filter((item) => {
      // Check if area.value is not the default value
      const isAreaMatch = item.regionsname === area.value;

      // Check if business_type.value is not the default value
      const isBusinessTypeMatch = business_type.value !== "經營型態" ? item.type == business_type_no.value : true;

      // Check if keywords are included in name or address
      const isKeywordMatch =
        (item.name && item.name.includes(keywords.value)) ||
        (item.address && item.address.includes(keywords.value));

      // Include the item in the filtered result only if all conditions are met
      return isAreaMatch && isBusinessTypeMatch && isKeywordMatch;
    })
    .slice(0, 5);

  openMap();
}

// 計算距離的函數
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // 地球半徑（單位：公里）
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // 距離（單位：公里）
  return distance;
}

// 點擊事件處理函數
const handleFilterClick = () => {
  filterLocationsFilter();
};

function getMap() {
  // 使用 Promise.all 等待所有完成
  Promise.all([
    axios.get("http://34.81.192.108:13000/api/v1/locations/list"),
    axios.get("http://34.81.192.108:13000/api/v1/locations/business"),
    axios.get("http://34.81.192.108:13000/api/v1/locations/regions"),
  ])
    .then((responses) => {
      const [locationsResponse, businessResponse, regionsResponse] = responses;

      // 資料列表
      locations.value = locationsResponse.data.result.locations;

      // 資料型態
      business_type_info.value = businessResponse.data.result.business;

      // 縣市資料
      area_info.value = regionsResponse.data.result.regions;

      // load.value = true;

      navigator.geolocation.getCurrentPosition(
        function (position) {
          // 獲取經緯度
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;

          // 在控制台顯示座標
          console.log("緯度：" + latitude + ", 經度：" + longitude);

          const currentLatitude = latitude; // 你的緯度
          const currentLongitude = longitude; // 你的經度

          // 找到最接近的位置
          let closestLocation = null;
          let closestDistance = Infinity;

          locations.value.forEach((location) => {
            const distance = calculateDistance(
              currentLatitude,
              currentLongitude,
              location.latitude,
              location.longitude
            );
            if (distance < closestDistance) {
              closestDistance = distance;
              closestLocation = location;
            }
          });

          filterLocations.value = closestLocation;

          // 這裡可以根據獲得的座標進一步處理
        },
        function (error) {
          // 如果無法獲取座標，可以處理錯誤
          switch (error.code) {
            case error.PERMISSION_DENIED:
              // 觸發地圖
              handleFilterClick();
              console.error("使用者拒絕提供座標");
              break;
            case error.POSITION_UNAVAILABLE:
              // 觸發地圖
              handleFilterClick();
              console.error("無法獲取座標資訊");
              break;
            case error.TIMEOUT:
              // 觸發地圖
              handleFilterClick();
              console.error("獲取座標資訊逾時");
              break;
            case error.UNKNOWN_ERROR:
              // 觸發地圖
              handleFilterClick();
              console.error("發生未知錯誤");
              break;
          }
        }
      );
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

onMounted(async () => {
  await loadScript(
    `https://maps.googleapis.com/maps/api/js?key=AIzaSyCgqDzQUEz5y1vxK46m-UXpVO_AD2jSO6Q&callback=initMap`
  );
  getMap();
});
</script>
<template>
  <div>
    <vheader :logo_color="true" />

    <main id="locations">
      <div id="banner">
        <div id="banner_pic">
          <img
            loading="lazy"
            class="pc"
            src="@/assets/images/locations/banner.jpg"
            alt="banner"
          />
          <img
            loading="lazy"
            class="m"
            src="@/assets/images/locations/banner_m.jpg"
            alt="banner"
          />
        </div>
      </div>
      <div id="banner_title">
        <h2 class="an fd">服務據點</h2>
        <h3 class="an fd">
          <span><router-link class="color" to="/">大豐環保</router-link></span>
          / 服務據點
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
                    @click="type_switch(index)"
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
                  src="@/assets/images/locations/map_icon01.png"
                  alt="icon"
                />
                <span>大豐環保</span>
              </div>
              <div class="item">
                <img
                  src="@/assets/images/locations/map_icon02.png"
                  alt="icon"
                />
                <span>合作據點</span>
              </div>
              <div class="item">
                <img
                  src="@/assets/images/locations/map_icon03.png"
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
                    <p>{{ item.address }}　<br />​{{ item.phone }}​</p>
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
          <img
            loading="lazy"
            src="@/assets/images/company_serve/more_arrow.svg"
            alt="arrow"
          />
        </router-link>
      </div>
    </main>

    <vfooter />
  </div>
</template>
