<template>
  <div class="api bgGray">
    <h1 class="textColorG">環境舒適度資料儀表板</h1>
    <br />
    <b-row>
      <b-col>
        <div class="row">
          <div class="apiBox">
            <iframe
              src="https://scplus.ipcs.ntu.edu.tw/portal/apps/opsdashboard/index.html?fbclid=IwAR00vDi8pUseUtw3hDYn62iaOZvT5rvEiEBXBEreumWsG1ZF_ecu0sCCoQo#/0d405e50700a49989025568e75e81c52"
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
        "https://scplus.ipcs.ntu.edu.tw/portal/apps/opsdashboard/index.html?fbclid=IwAR00vDi8pUseUtw3hDYn62iaOZvT5rvEiEBXBEreumWsG1ZF_ecu0sCCoQo#/0d405e50700a49989025568e75e81c52"
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
