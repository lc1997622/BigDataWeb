<template>
    <div class="container">
      <div class="row">
        <div class="col s12 m12 l12">
           <div class="card">
         <div id="chart5" style="width:1000px;height:800px;"></div>
      </div>
        </div>
        
      </div>
     
        
    </div>
</template>

<script>

import axios from "axios";
import echarts from "echarts";


export default {
  name: "RatingProportion",
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
             title: {
        text: '各评分段电影数量统计',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}部"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: []
    },
    calculable: true,
    series: [
        {
            name:'漏斗图',
            type:'funnel',
            left: '10%',
            top: 60,
            //x2: 80,
            bottom: 60,
            width: '80%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max:3200,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: {
                show: true,
                position: 'inside'
            },
            labelLine: {
                length: 10,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 20
                }
            },
            data: []
        }
    ]
             };
 this.getDrawData()
        .then(Response=>{
          console.log(Response)
            this.option.series[0].data = []
            for( var i = 0 ; i < Response.length;i++)
            { 
                this.option.series[0].data.push({value:Response[i].count,name:Response[i].rating } ) 
                this.option.legend.data.push(Response[i].rating)
            }
            var myChart = echarts.init(document.getElementById('chart5'));
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
         kind="/api/getRating_proportion"
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