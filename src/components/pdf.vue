<template>
  <div id="2" class="pdf">
    <b-row style="margin:0px">
      <b-col class="col-12 col-lg-6 py-5">
        <h1 style="color:#5fc4a9">{{ $t("pdf.title") }}</h1>
        <br />
        <span style="color:gray"
          >計劃最新進展都在這裡！<br />每月月底定期發佈</span
        ><br /><br />
        <b-form-select
          v-model="selected"
          :options="options"
          style="width:70%"
        ></b-form-select>
      </b-col>

      <b-col class="col-12 col-lg-6 contentStyle" style="padding: 0px 20px ;">
        <iframe
          class="iframe"
          :src="
            'https://storage.googleapis.com/scplus-ntu/Newsletter/' +
              selected +
              '.pdf'
          "
        >
          你的瀏覽器不支援 iframe
        </iframe>
        <!-- <iframe class="iframe"
          src="https://scntu.s3-ap-southeast-1.amazonaws.com/pdf/092020.pdf"
          style=""
        >
          你的瀏覽器不支援 iframe
        </iframe> -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //預設第一個看到的pdf
      selected: "202009_Newsletter",
      //最新消息的下拉式選單
      //value放自己檔案的名字
      //text是上面顯示的字
      options: [
        {
          value: "202s009_Newsletter",
          text: "202009_Newsletter"
        },
        {
          value: "202010_Newsletter",
          text: "202010_Newsletter"
        },
        {
          value: "202011_Newsletter",
          text: "202011_Newsletter"
        },
        {
          value: "202012_Newsletter",
          text: "202012_Newsletter"
        },
        {
          value: "202101_Newsletter-Eng",
          text: "202101_Newsletter-Eng"
        },
        {
          value: "202101_Newsletter",
          text: "202101_Newsletter"
        },
        {
          value: "202102_Newsletter-Eng",
          text: "202102_Newsletter-Eng"
        },
        {
          value: "202102_Newsletter",
          text: "202102_Newsletter"
        },
        {
          value: "202103_Newsletter-Eng",
          text: "202103_Newsletter-Eng"
        },
        {
          value: "202103_Newsletter",
          text: "202103_Newsletter"
        },
        {
          value: "202104_Newsletter-Eng",
          text: "202104_Newsletter-Eng"
        },
        {
          value: "202104_Newsletter",
          text: "202104_Newsletter"
        },
        {
          value: "新增的檔案名稱",
          text: "在網頁上所顯示的名字"
        }
      ]
    };
  }
};
</script>

<style lang="css">
.pdf {
  color: black;
  height: 100%;
  width: 100%;
  background-color: #fff;
}
.iframe {
  width: 100%;
  height: 760px;
}
</style>
