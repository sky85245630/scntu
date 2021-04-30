<template>
  <div id="3" class="avator bgOrange">
    <b-container>
      <b-row class="avator_row" style="margin:0px;" align-h="center">
        <!-- row1 -->
        <!-- slot1 -->
        <b-col class="text-center col-12 col-md-6 col-lg-4">
          <h4 class="white">計畫主持人</h4>
          <br />
          <b-avatar
            class="circle"
            :src="require('@/assets/member/CH.png')"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">簡旭伸</h5>
          <h5 class="white">Shiuh-Shen, Chien</h5>
          <h6 class="white">臺大氣候變遷與永續發展國際學位學程主任</h6>
        </b-col>

        <!-- slot2 -->
        <b-col class="text-center col-12 col-md-6 col-lg-4">
          <h4 class="white">計畫執行顧問</h4>
          <br />
          <b-avatar
            class="circle"
            :src="require('@/assets/member/MK.png')"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">鍾明光</h5>
          <h5 class="white">Ming-Kung, Chung</h5>
          <h6 class="white">中研院資訊科學研究所</h6>
        </b-col>

        <!-- slot3-->
        <b-col class="text-center col-12 col-md-6 col-lg-4">
          <h4 class="white">計畫執行顧問</h4>
          <br />
          <b-avatar
            class="circle"
            :src="require('@/assets/member/FB.png')"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">謝宜桓</h5>
          <h5 class="white">Yi-Huan, Hsieh</h5>
          <h6 class="white">臺大氣候變遷與永續發展國際學位學程</h6>
        </b-col>
        <!-- /row1 -->

        <!-- row2 -->
        <!-- slot4 -->
        <b-col class="text-center col-12 col-md-6 col-lg-3">
          <h4 class="white">計畫顧問</h4>
          <br />
          <b-avatar class="circle" src="" size="10rem"></b-avatar><br /><br />
          <h5 class="white">陳正平</h5>
          <h5 class="white">SJen-Ping, Chen</h5>
          <h6 class="white">臺大大氣科學系</h6>
        </b-col>

        <!-- slot5 -->
        <b-col class="text-center col-12 col-md-6 col-lg-3">
          <h4 class="white">計畫顧問</h4>
          <br />
          <b-avatar class="circle" src="" size="10rem"></b-avatar><br /><br />
          <h5 class="white">林博雄</h5>
          <h5 class="white">Po-Hsiung, Lin</h5>
          <h6 class="white">臺大大氣科學系</h6>
        </b-col>

        <!-- slot6 -->
        <b-col class="text-center col-12 col-md-6 col-lg-3">
          <h4 class="white">計畫顧問</h4>
          <br />
          <b-avatar class="circle" src="" size="10rem"></b-avatar><br /><br />
          <h5 class="white">莊振義</h5>
          <h5 class="white">Jehn-Yih, Juang</h5>
          <h6 class="white">臺大地理環境資源學系</h6>
        </b-col>

        <!-- slot7 -->
        <b-col class="text-center col-12 col-md-6 col-lg-3">
          <h4 class="white">計畫顧問</h4>
          <br />
          <b-avatar class="circle" src="" size="10rem"></b-avatar><br /><br />
          <h5 class="white">陳伶志</h5>
          <h5 class="white">Ling-Jyh, Chen</h5>
          <h6 class="white">中研院資訊科學研究所</h6>
        </b-col>

        <!-- /row2 -->

        <!-- <b-col class="text-center col-12 col-md-6 col-lg-4">
          <h4 class="white">計畫共同主持人</h4>
          <br />
          <b-avatar class="circle" :src="require('@/assets/member/CH.png')" size="10rem"></b-avatar
          ><br /><br />
          <h5 class="white">Jen-Ping, Chen（陳正平）</h5>
          <h6 class="white">台大大氣科學系</h6>
        </b-col>
        <b-col class="text-center col-12 col-md-6 col-lg-4">
          <h4 class="white">計畫共同主持人</h4>
          <br />
          <b-avatar
            class="circle"
            :src="require('@/assets/member/LJ.png')"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">Ling-Jyh, Chen（陳伶志）</h5>
          <h6 class="white">中研院資訊科學研究所</h6>
        </b-col>
        <b-col class="text-center  col-12 col-md-6 col-lg-3">
          <h4 class="white">計畫共同主持人</h4>
          <br />
          <b-avatar class="circle" src="" size="10rem"></b-avatar><br /><br />
          <h5 class="white">Po-Hsiung, Lin（林博雄）</h5>
          <h6 class="white">臺大大氣科學系</h6>
        </b-col>
        <b-col class="text-center  col-12 col-md-6 col-lg-3">
          <h4 class="white">計畫共同主持人</h4>
          <br />
          <b-avatar
            class="circle"
            src="require('@/assets/member/FS.png')"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">Jehn-Yih, Juang（莊振義）</h5>
          <h6 class="white">台大地理環境資源學系</h6>
        </b-col>
          <h4 class="white">計畫共同主持人</h4>
          <br />
          <b-avatar
            class="circle"
            :src="require('@/assets/member/MK.png')"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">Ming-Kung, Chung（鍾明光）</h5>
          <h6 class="white">中研院資訊科學研究所</h6>
        </b-col>
        <b-col class="text-center  col-12 col-md-6 col-lg-3">
          <h4 class="white">計畫共同主持人</h4>
          <br />
          <b-avatar
            class="circle"
            :src="require('@/assets/member/FB.png')"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">Yi-Huan, Hsieh（謝宜桓）</h5>
          <h6 class="white">台大氣候變遷與永續發展國際學位學程</h6>
        </b-col> -->
      </b-row></b-container
    >

    <!-- row3 -->
    <div class="container">
      <div class="mhn-slide owl-carousel">
        <!-- slot8 -->
        <div class="mhn-item">
          <div class="mhn-inner">
            <strong>工作團隊</strong>
            <img :src="require('@/assets/member/SY.png')" />
            <div class="mhn-img">
              <div class="loader-circle">
                <div class="loader-stroke-left"></div>
                <div class="loader-stroke-right"></div>
              </div>
            </div>
            <div class="mhn-text">
              <h4>劉紹淵</h4>
              <h4>Shao-Yuan, Liu</h4>
              <p>台大生物機電工程博士班</p>
            </div>
          </div>
        </div>

        <!-- slot9 -->
        <div class="mhn-item">
          <div class="mhn-inner">
            <strong>工作團隊</strong>
            <img class="circle" :src="require('@/assets/member/MC.png')" />
            <div class="mhn-img">
              <div class="loader-circle">
                <div class="loader-stroke-left"></div>
                <div class="loader-stroke-right"></div>
              </div>
            </div>
            <div class="mhn-text">
              <h4>簡妙蓉</h4>
              <h4>Miao-Jung, Chien</h4>
              <p>台大系統舒適度+ 計畫專案經理</p>
            </div>
          </div>
        </div>

        <!-- slot10 -->
        <div class="mhn-item">
          <div class="mhn-inner">
            <strong>工作團隊</strong>
            <img :src="require('@/assets/member/FS.png')" />
            <div class="mhn-img">
              <div class="loader-circle">
                <div class="loader-stroke-left"></div>
                <div class="loader-stroke-right"></div>
              </div>
            </div>
            <div class="mhn-text">
              <h4>荊輔翔</h4>
              <h4>Fu-Hsiang, Ching</h4>
              <p>中研院資訊科學所</p>
            </div>
          </div>
        </div>

        <!-- slot11 -->
        <div class="mhn-item">
          <div class="mhn-inner">
            <strong>工作團隊</strong>
            <img class="circle" :src="require('@/assets/member/YS.png')" />
            <div class="mhn-img">
              <div class="loader-circle">
                <div class="loader-stroke-left"></div>
                <div class="loader-stroke-right"></div>
              </div>
            </div>
            <div class="mhn-text">
              <h4>楊鑫</h4>
              <h4>Xin, Yan</h4>
              <p>台大氣候變遷與永續發展國際學位學程碩士班</p>
            </div>
          </div>
        </div>

        <!-- slot12 -->
        <div class="mhn-item">
          <div class="mhn-inner">
            <strong>工作團隊</strong>
            <img class="circle" :src="require('@/assets/member/CN.png')" />
            <div class="mhn-img">
              <div class="loader-circle">
                <div class="loader-stroke-left"></div>
                <div class="loader-stroke-right"></div>
              </div>
            </div>
            <div class="mhn-text">
              <h4>林承恩</h4>
              <h4>Cheng-En, Lin</h4>
              <p>台大地理環境資源研究所碩士班</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /row3 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style lang="css">
.avator {
  color: black;
  height: 100%;
  width: 100%;

  padding: 30px 0;
}
.avator_row {
  padding: 30px 0;
}
.white,
strong {
  color: white;
}
.circle {
  border: 10px solid #5fc4a9;
}

.mhn-slide .owl-next {
  right: -40px;
  margin-top: 80px;
  border-width: 50px 0 50px 40px;
  border-color: transparent transparent transparent #5fc4a9;
}

.mhn-slide .owl-prev {
  left: -40px;
  margin-top: 80px;
  border-width: 50px 40px 50px 0;
  border-color: transparent #5fc4a9 transparent transparent;
}
</style>
