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
          <b-nav-item href="#1">計畫簡介</b-nav-item>
          <b-nav-item href="#2">最新消息</b-nav-item>
          <b-nav-item href="#3">團隊成員</b-nav-item>
          <b-nav-item href="#4">學研成果</b-nav-item>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">中文</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

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
