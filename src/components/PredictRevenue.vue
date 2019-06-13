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
  name: "PredictRevenue",
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
                  text:'未来十年票房预测'
                  },
                   xAxis:{
                     type:'category',
                     data:[]
                   },
                   yAxis:{
                     type:'value',
                     data:[],
                   },
                   series:[{
                     data:[],
                     type:'line'
                   }]
             };
 this.getDrawData()
        .then(Response=>{
          console.log(Response)
            this.option.series[0].data = []
            for(var i=0;i<Response.length-1;i++)
            {
                   for(var j=0;j<Response.length-1-i;j++)
                   {
                     if(Response[j].release_date>Response[j+1].release_date)
                     {
                       var tmp=Response[j+1]
                       Response[j+1]=Response[j]
                       Response[j]=tmp
                     }
                   }
            }
            for( var i = 0 ; i < Response.length;i++)
            {
                this.option.series[0].data.push(Response[i].revenue) 
                this.option.xAxis.data.push(Response[i].year) 
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
         kind="/api/getRevenue10year"
         return axios
         .get(kind)
         .then(Response=>{
           console.log(Response)
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