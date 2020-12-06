<template>
  <div>
    <div class="wapper">
        <div class="title">
            <p>11</p>
            <p>11</p>
            <p>11</p>
        </div>
        <div class="detail_1">
            <ul>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
            </ul>
        </div>
        <div class="detail_2">
            <ul>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
            </ul>
        </div>
        <div class="detail_3">
            <ul>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
            </ul>
        </div>
        <div class="detail_4">
            <ul>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
            </ul>
        </div>

    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style>
        * {
            margin: 0;
            padding: 0;
        }
        
        .wapper {
            position: relative;
            background-color: #dedede;
            width: 100vw;
            height: 100vh
        }
        
        p {
            color: #ffffff;
        }
        
        .title {
            width: 300px;
            height: 400px;
            background-color: #f0f;
            border-radius: 50%;
            position: absolute;
            left: -155px;
            bottom: -200px;
            border: 10px solid #333;
            padding: 100px 0 0 200px;
        }
        
        .detail {
            width: 80px;
            height: 80px;
            background-color: #00f;
        }
        
        .detail,
        .title {
            border-radius: 50%;
            color: #ffffff;
        }
        
        .detail::before {
            content: '';
            display: block;
            width: 20px;
            height: 20px;
            border: 50%;
        }
        
        .detail {}
        
        div[class*="detail"] {
            position: absolute;
            left: 10px;
            bottom: 50px;
        }
        
        .detail_1 ul {
            position: absolute;
            left: 180px;
            bottom: 350px;
        }
        
        .detail_1 ul::before {
            content: "text1";
            background-color: #f0f;
        }
        
        .detail_2 ul {
            position: absolute;
            left: 350px;
            bottom: 286px;
        }
        
        .detail_2 ul::before {
            content: "text2";
            background-color: #983ca9;
        }
        
        .detail_3 ul {
            position: absolute;
            left: 475px;
            bottom: 160px;
        }
        
        .detail_3 ul::before {
            content: "text3";
            background-color: #964096;
        }
        
        .detail_4 ul {
            position: absolute;
            left: 530px;
            bottom: 0px;
        }
        
        .detail_4 ul::before {
            content: "text4";
            background-color: #5f345f;
        }
        
        .detail_1 ul,
        .detail_2 ul,
        .detail_3 ul,
        .detail_4 ul {
            position: absolute;
        }
        
        .detail_1 ul::before,
        .detail_2 ul::before,
        .detail_3 ul::before,
        .detail_4 ul::before {
            display: block;
            position: absolute;
            width: 100px;
            height: 100px;
            left: -130px;
            top: -10px;
            line-height: 100px;
            border-radius: 50%;
            text-align: center;
        }
    </style>
