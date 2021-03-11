<template>
  <div class="api bgGray">
    <h1 class="textColorG">環境舒適度資料儀表板</h1>
    <p>假字</p>
    <p>假字</p>
    <b-row>
      <b-col>
        <div class="row">
          <div class="apiBox">
            <iframe
              src="https://scplus.ipcs.ntu.edu.tw/portal/apps/opsdashboard/index.html"
              frameborder="0"
              style="width:100%;height:100%"
            ></iframe>
          </div>
        </div>
      </b-col>
    </b-row>
    <a class="moreBT">more</a>
  </div>
</template>

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
