<template>
  <div id="3" class="api bgGreen">
    <h4>合作單位</h4>
    <b-row>
      <div class="col-6 col-lg-3">
        <img src="@/assets/vendor/LASS.png" alt="main" class="scntuIMGFooter" />
      </div>
      <div class="col-6 col-lg-3">
        <img
          src="@/assets/vendor/123.png"
          style="height:150px"
          alt="main"
          class="scntuIMGFooter"
        />
      </div>
      <div class="col-6 col-lg-3">
        <img
          src="@/assets/vendor/taiwan.png"
          alt="main"
          class="scntuIMGFooter"
        />
      </div>
      <!-- <div class="col-6 col-lg-3">
        <img src="@/assets/vendor/NTU.png" alt="main" class="scntuIMGFooter" />
      </div> -->
      <div class="col-12 offset-lg-3  col-lg-3 mt-5">
        <img src="@/assets/vendor/NTU.png" alt="main" class="scntuIMGFooter" />
      </div>
      <div
        class="col-12 col-lg-6 mt-4"
        style="font-size:24px;font-weight:bold;border-left:4px #fff solid"
      >
        <p>{{ $t("footer.address") }}</p>
        <p>{{ $t("footer.section") }}</p>
        <p>{{ $t("footer.tel") }}</p>
        <p>{{ $t("footer.mail") }}</p>
      </div>
    </b-row>
  </div>
</template>

<style lang="css">
.scntuIMGFooter {
  max-width: 300px;
}

h4,
p {
  color: #ffffff;
}
p {
  text-align: left;
}</style
>s
