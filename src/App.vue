<template>
  <div id="app">
    <Navbar @setLang="toSetLang" />
    <Main />
    <Radius :EN_CSS="Lang" />
    <PDF />
    <Avator />
    <Product />
    <Api />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Main from "./components/main.vue";
import PDF from "./components/pdf.vue";
import Radius from "./components/radius.vue";
import Avator from "./components/avator.vue";
import Product from "./components/product.vue";
import Api from "./components/api.vue";
import Footer from "./components/footer.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {
    Navbar,
    Main,
    PDF,
    Radius,
    Avator,
    Product,
    Api,
    Footer
  },
  data() {
    return {
      Lang: ""
    };
  },
  methods: {
    toSetLang(e) {
      this.Lang = e;
    }
  }
};
</script>

<style>
.textColorG {
  color: #5fc4a9;
}
.bgGray {
  background-color: #fff;
}
.bgGreen {
  background-color: #5ac7a8;
}
.bgOrange {
  background-color: #dd776f;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.top,
.radiusBox,
.pdf,
.avator,
.api {
  padding: 100px 0;
  overflow: hidden;
}
.contentStyle {
  line-height: 2.6;
  font-size: 18px;
  padding: 120px 20px;
  text-align: center;
}
.imgBox {
  position: relative;
  width: 100%;
  height: 700px;
}
@media (min-width: 0px) and (max-width: 1200px) {
  .wapper {
    height: 400px;
    overflow: hidden;
    width: 40%;
  }
  .Boxdetail,
  .wapper {
    display: inline-block;
    position: static;
    padding: 70px 20px 0 20px;
  }
  .Boxdetail {
    width: 60%;
    overflow: hidden;
    padding-left: 0;
    padding-right: 0;
  }
  div[class^="detail"] {
    position: static;
    width: 50%;
    min-height: 200px;
    float: left;
  }
  div[class^="detail"] ul {
    position: relative;
  }
  div[class^="detail"] ul li {
    padding-left: 100px;
  }
  div[class^="detail"] ul::before {
    left: 20px;
  }
  .textBox {
    padding: 0 30px;
  }
  .title {
    width: 300px;
    height: 300px;
    left: 100px;
    bottom: 100px;
    padding: 80px 0 0 0px;
  }
  .title::after {
    left: -25px;
    bottom: -25px;
    width: 350px;
    height: 350px;
  }
  .imgLeft,
  .imgRight {
    width: 100%;
    position: static;
  }
  .apiBox {
    width: 90%;
  }
}
@media (min-width: 923px) and (max-width: 1100px) {
  div[class^="detail"] ul {
    font-size: 15px;
  }
  div[class^="detail"] ul::before {
    left: 65px;
    width: 70px;
    height: 70px;
    line-height: 70px;
    font-size: 15px;
  }
}
@media (min-width: 0px) and (max-width: 922px) {
  .iframe {
    height: 400px;
  }
  .scntuIMG {
    width: 80%;
  }

  .contentStyle {
    padding: 20px 0;
  }
  .Boxdetail,
  .wapper {
    width: 100%;
  }
  .wapper {
    position: relative;
  }
  .title {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  h4 {
    margin-top: 50px !important;
  }
  .scntuIMG {
    width: 100%;
  }
}
@media (min-width: 0px) and (max-width: 680px) {
  div[class^="detail"] {
    width: 100%;
  }
}
@media (min-width: 0px) and (max-width: 500px) {
  .imgBox {
    height: 500px;
  }
}
</style>
