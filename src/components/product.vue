<template>
  <div id="4" class="top">
    <b-container>
      <b-row style="margin:0px">
        <b-col
          style="line-height: 2.6;
    font-size: 18px;
    padding: 90px 20px;
    text-align: left;"
        >
          <h1>NTU4AQ</h1>
          <li class="NTU4AQLI">{{ $t("product.NTU4AQ1") }}</li>
          <li class="NTU4AQLI">{{ $t("product.NTU4AQ2") }}</li>
          <li class="NTU4AQLI">{{ $t("product.NTU4AQ3") }}</li>
          <li class="NTU4AQLI">{{ $t("product.NTU4AQ4") }}</li>
          <li class="NTU4AQLI">
            {{ $t("product.NTU4AQ5") }}
          </li>
          <!-- <img
            src="@/assets/QQ.png"
            alt="main"
            style="width:100%;padding:60px 20px"
          /> -->
          <div class="imgBox mt-5">
            <img
              src="@/assets/NTU4AQ_1.png"
              alt="main"
              style="max-width:100%;width:300px;position:absolute;top:0;left:0"
            />
            <img
              src="@/assets/NTU4AQ_2.png"
              alt="main"
              style="max-width:100%;width:700px;position:absolute;bottom:0;right:0"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row style="margin:0px">
        <b-col
          style="
    line-height: 2.6;
    font-size: 18px;
    padding: 90px 20px;
    text-align: left;

    "
        >
          <!-- 先刪掉上面屬性text-align: right; -->
          <h1>MAPS 6.0</h1>
          <li class="NTU4AQLI">
            {{ $t("product.MAPS1") }}
          </li>
          <li class="NTU4AQLI">{{ $t("product.MAPS2") }}</li>
          <li class="NTU4AQLI">{{ $t("product.MAPS3") }}</li>
          <li class="NTU4AQLI">
            {{ $t("product.MAPS4") }}
          </li>
        </b-col>
      </b-row>
      <b-row style="margin:0px">
        <b-col
          style="
    font-size: 18px;
    padding: 0px 20px;
    text-align: right;"
        >
          <!-- <div class="imgBox">
            <img
              src="@/assets/NTU4AQ_1.png"
              alt="main"
              style="max-width:100%;width:300px;position:absolute;top:0;left:0"
            />
            <img
              src="@/assets/NTU4AQ_2.png"
              alt="main"
              style="max-width:100%;width:700px;position:absolute;bottom:0;right:0"
            />
          </div> -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="css" scope>
.top {
  color: white;
  height: 100%;
  width: 100%;
  background-color: #5fc4a9;
}
.NTU4AQLI {
  font-size: 24px;
}
</style>
