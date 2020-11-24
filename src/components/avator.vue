<template>
<div class="avator">
  <b-row class="avator_row" style="margin:0px;">
    
      
    <b-col style="text-align:center">
      計畫助理
      <b-avatar class="circle" src="https://placekitten.com/300/300" size="12rem"></b-avatar>
    </b-col>

    <b-col style="">
      <b-avatar  class="circle" src="https://placekitten.com/300/300" size="12rem"></b-avatar>
    </b-col>
    <b-col style="">
      <b-avatar class="circle" src="https://placekitten.com/300/300" size="12rem"></b-avatar>
    </b-col>
  </b-row>

</div>
        
    
</template>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="css" >
    .avator{
      color: black;
      height: 100%;
      width:100%;
      background-color:#dd776f;
      padding:30px 0
    }
    .avator_row{
      padding:30px 0
      
    }

    .circle{
      border: 10px solid #5fc4a9;
    }
</style>