<template>
  <div id="1" class="radiusBox bgOrange">
    <!-- <h3>氣候服務產業</h3>
    <h3>治理轉型倡議</h3>
    <h3>IPCS、環境資料監測與分析</h3>
    <h3>模式校正與預測</h3> -->
    <h3>{{ $t("radius.title1") }}</h3>
    <h3>{{ $t("radius.title2") }}</h3>
    <h3>{{ $t("radius.title3") }}</h3>
    <b-row>
      <b-col class=" col-12 col-xl-6 col-xs-12">
        <div class="row">
          <div class="wapper col-xs-12">
            <ul class="title radiusD">
              <li>1.{{ $t("radius.circle1") }}</li>
              <li>2.{{ $t("radius.circle2") }}</li>
              <li>3.{{ $t("radius.circle3") }}</li>
            </ul>
          </div>
          <div class="Boxdetail col-xs-12">
            <div class="detail_1 ">
              <ul class="radiusD">
                <li class="bold">{{ $t("radius.social_title") }}</li>
                <li>{{ $t("radius.social_des1") }}</li>
                <li>{{ $t("radius.social_des2") }}</li>
                <li>{{ $t("radius.social_des3") }}</li>
                <li>{{ $t("radius.social_des4") }}</li>
              </ul>
            </div>
            <div class="detail_2 ">
              <ul class="radiusD">
                <li class="bold">{{ $t("radius.service_title") }}</li>
                <li>{{ $t("radius.service_des1") }}</li>
                <li>{{ $t("radius.service_des2") }}</li>
                <li>{{ $t("radius.service_des3") }}</li>
              </ul>
            </div>
            <div class="detail_3">
              <ul class="radiusD">
                <li class="bold">{{ $t("radius.education_title") }}</li>
                <li>{{ $t("radius.education_des1") }}</li>
                <li>{{ $t("radius.education_des2") }}</li>
                <li>{{ $t("radius.education_des3") }}</li>
              </ul>
            </div>
            <div class="detail_4 ">
              <ul class="radiusD">
                <li class="bold">{{ $t("radius.research_title") }}</li>
                <li>{{ $t("radius.research_des1") }}</li>
                <li>{{ $t("radius.research_des2") }}</li>
                <li>{{ $t("radius.research_des3") }}</li>
              </ul>
            </div>
          </div>
        </div>
      </b-col>

      <b-col class=" col-12 col-xl-6 col-md-12 mt-5">
        <div class="row textBox">
          <h4 class="textColorG">{{ $t("radius.right_title1") }}</h4>
          <ul>
            <li>{{ $t("radius.right_des1") }}</li>
            <li>
              {{ $t("radius.right_des2") }}
            </li>
            <li>
              {{ $t("radius.right_des3") }}
            </li>
            <li>
              {{ $t("radius.right_des4") }}
            </li>
          </ul>
          <h4 class="textColorG">{{ $t("radius.right_title2") }}</h4>
          <ul>
            <li>{{ $t("radius.right_des5") }}</li>
            <li>{{ $t("radius.right_des6") }}</li>
            <li>{{ $t("radius.right_des7") }}</li>
          </ul>
          <h4 class="textColorG">{{ $t("radius.right_title3") }}</h4>
          <ul>
            <li>{{ $t("radius.right_des8") }}</li>
            <li>{{ $t("radius.right_des9") }}</li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="css">
.bold {
  font-weight: bold;
  font-size: 18px;
}
ul {
  list-style: none;
}
.radiusBox {
  color: white;
}
.titleBox {
  margin-bottom: 50px;
}
.wapper {
  position: relative;
  height: 620px;
}
.title {
  font-size: 20px;
  width: 500px;
  height: 500px;
  background-color: #5fc4a9;
  position: absolute;
  left: -170px;
  bottom: -250px;
  padding: 130px 0 0 90px;
  color: #ffffff;
}
.title li {
  line-height: 2;
}
.title::after {
  content: "";
  display: block;
  position: absolute;
  left: -20px;
  bottom: -20px;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  border: 10px solid #ffffff;
}
.radiusD {
  border-radius: 50%;
}
.Boxdetail {
  position: absolute;
  bottom: 0;
  left: 0;
}

.detail_1 ul::before {
  content: "社群";
}

.detail_2 ul::before {
  content: "服務";
}

.detail_3 ul::before {
  content: "教學";
}

.detail_4 ul::before {
  content: "研究";
}
.detail_1 {
  left: 60px;
  width: 300px;
  bottom: 370px;
}
.detail_2 {
  left: 320px;
  width: 300px;
  bottom: 300px;
}
.detail_3 {
  left: 435px;
  width: 300px;
  bottom: 155px;
}
.detail_4 {
  left: 500px;
  width: 300px;
  bottom: 0px;
}
div[class^="detail"] {
  position: absolute;
}
div[class^="detail"] ul::before {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  left: -50px;
  top: -20px;
  line-height: 100px;
  border-radius: 50%;
  text-align: center;
  background-color: #5fc4a9;
}
div[class^="detail"] ul li {
  text-align: left;
  padding-left: 20px;
}
h4 {
  margin-top: 35px !important;
  display: block;
  width: 100%;
}
.textBox {
  text-align: left;
}
.textBox ul li {
  position: relative;
}
.textBox ul li::before {
  content: "";
  display: block;
  position: absolute;
  left: -20px;
  top: 5px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: hsl(180deg 100% 50% / 0%);
  border: 3px solid #ffffff;
}
</style>
