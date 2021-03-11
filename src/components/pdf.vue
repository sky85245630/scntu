<template>
  <div class="pdf">
    <b-row style="margin:0px">
      <b-col class="col-12 col-lg-6 py-5">
        <h1 style="color:#5fc4a9">研究通訊</h1>
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
        <iframe class="iframe" :src="selected">
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
      selected: "https://scntu.s3-ap-southeast-1.amazonaws.com/pdf/092020.pdf",
      options: [
        {
          value: "https://scntu.s3-ap-southeast-1.amazonaws.com/pdf/092020.pdf",
          text: "Sep2020"
        },
        {
          value: "https://scntu.s3-ap-southeast-1.amazonaws.com/pdf/102020.pdf",
          text: "Oct2020"
        },
        {
          value: "https://scntu.s3-ap-southeast-1.amazonaws.com/pdf/112020.pdf",
          text: "Nov2020"
        },
        {
          value: "https://scntu.s3-ap-southeast-1.amazonaws.com/pdf/122020.pdf",
          text: "Dec2020"
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
