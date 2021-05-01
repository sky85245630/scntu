<template>
  <div class="api bgGray">
    <h1 class="textColorG">{{ $t("api.dashboard") }}</h1>
    <br />
    <b-row>
      <b-col>
        <div class="row">
          <div class="apiBox">
            <iframe
              src="https://scplus.ipcs.ntu.edu.tw/portal/apps/opsdashboard/index.html#/b6627579582c42a99aa66d8cab5dfb63"
              frameborder="0"
              style="width:100%;height:100%"
            ></iframe>
            <!-- <img
              :src="require('@/assets/ipcs.gif')"
              alt=""
              style="width:100%;height:100%"
            /> -->
          </div>
        </div>
      </b-col>
    </b-row>
    <!-- <a class="moreBT">more</a> -->
    <b-button variant="primary" size="lg" @click="toMore">more</b-button>
  </div>
</template>

<script>
export default {
  name: "api",
  methods: {
    toMore() {
      window.open(
        "https://scplus.ipcs.ntu.edu.tw/portal/apps/opsdashboard/index.html#/b6627579582c42a99aa66d8cab5dfb63"
      );
    }
  }
};
</script>

<style lang="css">
ul {
  list-style: none;
}

.apiBox {
  width: 1000px;
  margin: 0 auto;
  height: 500px;
  background-color: #0f0;
}
.moreBT {
  width: 80px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  background-color: #00f; /* 按鈕顏色 */
  display: block;
  border-radius: 20px;
}
</style>
