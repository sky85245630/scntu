<template>
<div class="radiusBox bgOrange">
    <h3>校園作為一個智慧生活實驗室</h3>
    <h3>讓研究進入真實的生活場域</h3>
    <h3>以協力共創得知識，促進創新治理及產業</h3>
  <b-row >
    <b-col class=" col-12 col-xl-6 ">
      <div class="row">
        <div class="wapper">
          <ul class="title radiusD" >
            <li>1.感測設備研發與佈設</li>
            <li>2.感測數據校準及發佈</li>
            <li>3.氣候資料解析與傳播</li>
          </ul>
        </div> 
        <div class="Boxdetail">
      <div class="detail_1 ">
            <ul class="radiusD">
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
            </ul>
        </div>
        <div class="detail_2 ">
            <ul class="radiusD">
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
            </ul>
        </div>
        <div class="detail_3">
            <ul class="radiusD">
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
            </ul>
        </div>
        <div class="detail_4 ">
            <ul class="radiusD">
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
            </ul>
        </div>
        </div>
      </div>
      
        
    </b-col>
      
    <b-col class=" col-12 col-xl-6">
      <div class="row textBox">
        <h4 class="textColorG">參與式感測</h4>
        <ul>
          <li>以「舒適度+」為概念，建構室外、室內以及移動 等三個模組</li>
          <li>以校園與周邊社區為場域，選出特定的室內外環境及課題，建構微氣候感測網</li>
          <li>推動「感測公民」行動，邀請志工/學生在通勤過程，以移動式感測器協助蒐集環境資料</li>
          <li>開發創客工作坊，邀請周邊的市民/社群共同製作與佈設感測器，拓展環境監測課題與量能</li>
        </ul>
        <h4 class="textColorG">資料解析與再現</h4>
        <ul>
          <li>整合校內現有環境感測基站，建立感測數據的動靜態校準機制</li>
          <li>結合現有學研成果，建立都市微尺度氣候模型</li>
          <li>建構即時資訊展示系統，協助市民理解所處的環境狀況</li>
        </ul>
        <h4 class="textColorG">治理公共倡議</h4>
        <ul>
          <li>以公民參與方式擬定因子 (公衛、社經) 及權重</li>
          <li>建構年度性的氣候風險地圖，以作為城市氣候行動之參考</li>
        </ul>
      </div>
        
    </b-col>
  </b-row>

</div>
        
    
</template>

<style lang="css">
ul{
  list-style: none;
}
.radiusBox{
  color: white;
}
.titleBox{
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
  background-color: #5Fc4A9;
  position: absolute;
  left: -170px;
  bottom: -250px;
  padding: 130px 0 0 90px;
  color: #ffffff;
}
.title li{
  line-height: 2;
}
.title::after{
  content: "";
  display: block;
  position: absolute;
  left: -20px;
  bottom: -20px;
  width: 550px;
  height:  550px;
  border-radius: 50%;
  border: 10px solid #ffffff;
}
.radiusD{
  border-radius: 50%;
}
.Boxdetail{
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
    content: "資料";
}

.detail_4 ul::before {
    content: "研究";
}
.detail_1 {
      left: 130px;
      bottom: 370px;
  }
  .detail_2 {
      left: 350px;
      bottom: 300px;
  }
  .detail_4 {
      left: 530px;
      bottom: 0px;
  }
  .detail_3 {
      left: 490px;
      bottom: 170px;
  }
div[class^="detail"] {
    position: absolute;
}
div[class^="detail"] ul::before{
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    left: -75px;
    top: -20px;
    line-height: 100px;
    border-radius: 50%;
    text-align: center;
    background-color: #5FC4A9;
}
div[class^="detail"] ul li{
  text-align: left;
  padding-left: 20px;
}
h4{
  margin-top: 35px!important;
  display: block;
    width: 100%;
}
.textBox{
  text-align: left;
}
.textBox ul li{
  position: relative;
}
.textBox ul li::before{
  content: '';
  display: block;
  position: absolute;
  left: -20px;
  top: 5px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: hsl(180deg 100% 50% / 0%);
  border:3px solid #ffffff;
}


</style>