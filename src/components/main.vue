<template>
  <div class="top bgGreen">
    <b-row>
      <b-col class="col-12 col-lg-6">
        <img src="@/assets/main.jpg" alt="main" class="scntuIMG" />
      </b-col>

      <b-col class="col-12 col-lg-6 contentStyle">
        <h1>{{ $t("main.title") }}</h1>
        <h5 class="mb-4">
          {{ $t("main.des") }}
        </h5>
        <span
          >{{ $t("main.des1") }}<br />
          {{ $t("main.des2") }}<br />{{ $t("main.des3") }}<br />
          {{ $t("main.des4") }}<br />
          {{ $t("main.des5") }}</span
        ><br />
      </b-col>
    </b-row>
  </div>
</template>

<style lang="css" scope>
.top {
  color: white;
  height: 100%;
  width: 100%;
}
.scntuIMG {
  width: 100%;
  padding-bottom: 20px;
  margin-top: 60px;
}
.row {
  padding: 20px 30px;
}
</style>
