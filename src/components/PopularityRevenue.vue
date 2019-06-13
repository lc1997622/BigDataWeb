<template>
    <div class="container">
      <div class="row">
        <div class="col s12 m12 l12">
           <div class="card">
         <div id="chart2" style="width:1000px;height:800px;"></div>
      </div>
        </div>
        
      </div>
     
        
    </div>
</template>

<script>

import axios from "axios";
import echarts from "echarts";


export default {
  name: "PopularityRevenue",
  components:{
      
  },
  props: {
    category: String,

  },
  data() {
    return {
      option:{},
      myChart:{}
    };
  },
  created(){
  },
  mounted()
  {
      this.option={
        title:{
          text:'热度与票房的关系'
        },
                   xAxis: {},
                   yAxis: {},
         series: [{
             symbolSize: 2,
             data: [],
        type: 'scatter'
    }]
             };
 this.getDrawData()
        .then(Response=>{
          console.log(Response)
            this.option.series[0].data = []
            for( var i = 0 ; i < Response.length;i++)
            {
                this.option.series[0].data.push(Response[i].popularity) 
                this.option.series[0].data.push(Response[i].revenue) 
            }
            var myChart = echarts.init(document.getElementById('chart2'));
            myChart.setOption(this.option);
            
            window.onresize = function () {
                myChart.resize();
            }
        })
  },
  watch:{
    category:function()
    {
     
    },
  },
  methods:{
       getDrawData(){
         var kind;
         kind="/api/getPopularity_revenue"
         return axios
         .get(kind)
         .then(Response=>{
           let json=Response.data
           return json
         })
         .catch(error=>{
            console.log(error)
         });
         
       }
  }
};    

</script>

<style scoped>
.video-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.video-list-enter {
  opacity: 0;
  transform: translateY(-30px);
}
.video-list-item {
  transition: all 0.4s ease;
}

.video-list-enter-active {
  transition: all 0.4s ease 0.4s;
}

.video-list-leave-active {
  transition: all 0.4s ease;
}
</style>