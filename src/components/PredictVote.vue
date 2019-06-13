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
  name: "PredictVote",
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
                     text:'电影评分预测',
                 },
                 tooltip:{
                     trigger: 'axis'
                 },
                 legend:{
                     x: 'right',
                     y: 'bottom',
                     data: []
                 },
                 toolbox:{
                     show: true,
                     feature:{
                         mark: {show: true},
                         dataView: {show: true,readOnly: false},
                         restore: {show: true},
                         saveAsImage:{show: true}
                     }
                 },
                 grid: {
                       left: '3%',
                       right: '4%',
                       bottom: '3%',
                       containLabel: true
                        },
                xAxis:[{
                  type:'category',
                  data:[],
                  axisTick: {
                alignWithLabel: true
            },
                axisLabel:{
                  interval:0,
                  rotate:45,
                  margin:2
                }
                  }],
                yAxis:{
                    type:'value'
                },
                 calculable: true,
                 series:[
                   {
                     data:[],
                        itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                }
            },
                     type:'bar'
                   }
                 ]
             };
 this.getDrawData()
        .then(Response=>{
          console.log(Response)
            this.option.series[0].data = []
            for( var i = 0 ; i < Response.length;i++)
            {
                this.option.series[0].data.push(Response[i].vote) 
                this.option.xAxis[0].data.push(Response[i].title) 
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
         kind="/api/getPredictVote"
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