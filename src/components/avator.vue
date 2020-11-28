<template>
  <div class="avator">
    <b-container>
      <b-row class="avator_row" style="margin:0px;" align-h="center">
        <b-col class="text-center" md="3">
          <h4 class="white">計畫主持人</h4>
          <br />
          <b-avatar
            class="circle"
            src="https://placekitten.com/300/300"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">Shiuh-Shen, Chien（簡旭伸）</h5>
          <h6 class="white">台大地理環境資源學系</h6>
        </b-col>

        <b-col class="text-center" md="3">
          <h4 class="white">計畫共同主持人</h4>
          <br />
          <b-avatar
            class="circle"
            src="https://placekitten.com/300/300"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">JP, Chen（陳正平）</h5>
          <h6 class="white">台大大氣科學系</h6>
        </b-col>
        <b-col class="text-center" md="3">
          <h4 class="white">計畫共同主持人</h4>
          <br />
          <b-avatar
            class="circle"
            src="https://placekitten.com/300/300"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">LJ, Chen（陳伶志）</h5>
          <h6 class="white">中研院資訊科學研究所</h6>
        </b-col>
      </b-row></b-container
    >
    <b-container>
      <b-row class="avator_row mt-4" style="margin:0px;" align-h="center">
        <b-col class="text-center" md="3">
          <h4 class="white">計畫主持人</h4>
          <br />
          <b-avatar
            class="circle"
            src="https://placekitten.com/300/300"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">Jehn-Yih, Juang（莊振義）</h5>
          <h6 class="white">台大地理環境資源學系</h6>
        </b-col>

        <b-col class="text-center" md="3">
          <h4 class="white">計畫共同主持人</h4>
          <br />
          <b-avatar
            class="circle"
            src="https://placekitten.com/300/300"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">Yi-Huan, Hsieh（謝宜桓）</h5>
          <h6 class="white">台大氣候變遷與永續發展國際學位學程</h6>
        </b-col>
        <b-col class="text-center" md="3">
          <h4 class="white">計畫共同主持人</h4>
          <br />
          <b-avatar
            class="circle"
            src="https://placekitten.com/300/300"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">Ming-Kung, Chung（鍾明光）</h5>
          <h6 class="white">台大地理環境資源學系</h6>
        </b-col>
      </b-row></b-container
    >


<!--
    <b-container>
      <b-row class="text-center"> 
      <b-carousel
      id="carousel-1"
      :interval="4000"
      v-model="slide"
      controls
      indicators
      background="#ababab"
      img-width="100%"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        
      >
      <b-col class="text-center" cols="3">
          <h4 class="white">計畫主持人</h4>
          <br />
          <b-avatar
            class="circle"
            src="https://placekitten.com/300/300"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">Jehn-Yih, Juang（莊振義）</h5>
          <h6 class="white">台大地理環境資源學系</h6>
        </b-col></b-carousel-slide>

      <b-carousel-slide >
        <b-col class="text-center" cols="3">
          <h4 class="white">計畫主持人</h4>
          <br />
          <b-avatar
            class="circle"
            src="https://placekitten.com/300/300"
            size="10rem"
          ></b-avatar
          ><br /><br />
          <h5 class="white">Jehn-Yih, Juang（莊振義）</h5>
          <h6 class="white">台大地理環境資源學系</h6>
        </b-col>
      </b-carousel-slide>

      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>

    </b-row>

    </b-container>-->
    
  </div>
</template>

<script>
export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<style lang="css">
.avator {
  color: black;
  height: 100%;
  width: 100%;
  background-color: #dd776f;
  padding: 30px 0;
}
.avator_row {
  padding: 30px 0;
}
.white {
  color: white;
}
.circle {
  border: 10px solid #5fc4a9;
}
</style>
