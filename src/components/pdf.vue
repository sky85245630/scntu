<template>
<div class="pdf">
  <b-row style="margin:0px">
    
      
    <b-col class="col-12 col-lg-6">
      <h1 style="color:#5fc4a9">研究通訊</h1><br>
      <span style="color:gray">計劃最新進展都在這裡！<br>每月月底定期發佈</span><br><br>
      <b-form-select v-model="selected" :options="options" style="width:70%"></b-form-select>
    </b-col>

    <b-col class="col-12 col-lg-6 contentStyle" style="padding: 90px 20px 40px ;">
      <!-- <iframe :src="'@/assets/'+selected+'.pdf'" style="width:100%;height:100%">
  你的瀏覽器不支援 iframe
</iframe> -->
    </b-col>
  </b-row>

</div>
        
    
</template>

<script>
  export default {
    data() {
      return {
        selected: 'Oct2020',
        options: [
          { value: null, text: '請選擇月份' },
          { value: 'Oct2020', text: 'Oct2020' },
          { value: 'Sep2020', text: 'Sep2020' },
        ]
      }
    }
  }
</script>

<style lang="css" >
    .pdf{
      color: black;
      height: 100%;
      width:100%;
      background-color:#fff
    }
</style>