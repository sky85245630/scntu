<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="header_fixed">
      <b-navbar-brand href="#"
        ><img
          src="@/assets/logo.png"
          class="d-inline-block align-top"
          alt="Kitten"
          style="height:80px"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#1">{{ $t("Navbar.title1") }}</b-nav-item>
          <b-nav-item href="#2">{{ $t("Navbar.title2") }}</b-nav-item>
          <b-nav-item href="#3">{{ $t("Navbar.title3") }}</b-nav-item>
          <b-nav-item href="#4">{{ $t("Navbar.title4") }}</b-nav-item>
          <li>
            <b-form-select
              style="width:120px"
              v-model="Lang"
              :options="options"
              @change="change"
            ></b-form-select>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import i18n from "@/main.js";

export default {
  data() {
    return {
      Lang: "tw",
      options: [
        {
          value: "tw",
          text: "中文"
        },
        {
          value: "en",
          text: "English"
        }
      ]
    };
  },
  methods: {
    change() {
      localStorage.setItem("SCNTU_LANG", this.Lang);
      i18n.locale = this.Lang;
      this.$emit("setLang", this.Lang);
    }
  },
  watch: {}
};
</script>

<style lang="css">
.header_fixed {
  padding: 0 60px 0 30px;
  position: fixed !important;
  width: 100%;
  top: 0;
  z-index: 9999;
}
.bg-light {
  background-color: #ffffff !important;
}

.nav-link {
  padding: 5px 20px !important;
}
</style>
