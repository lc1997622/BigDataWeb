<template>
    <div >
      <div class="row">
        <div class="col s12 m12 l12">
          <div class="card">     
            <div class="row">
            <div id="chart1" class="col s12 m12 l12" style="height:600px">

            </div>
            </div>
          </div>
        </div>
      </div>
         
    </div>
</template>

<script>

import axios from "axios";
import echarts from "echarts";
import "echarts/lib/chart/echarts-wordcloud"

export default {
  name: "cloudWord",
  components:{
      
  },
  props: {
    category: String
  },
  data() {
    return {
      option:{},
      data:[]
    };
  },
  created(){
  },
  mounted(){
       this.option = {
         baseOption: {
           tooltip:{},
           legend:{
             orient:'vertical',
             x:'left',
             data:[]
           },
           series:[{
             type:'wordCloud',
              gridSize: 2,
                    sizeRange: [30, 80],
                    rotationRange: [-90, 90],
                    shape: 'pentagon',
                    width: 600,
                    height: 400,
                    drawOutOfBound: true,
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data:[]
           }]
        },
    };
    this.getDrawData()
        .then(Response=>{
            console.log(Response)
            this.option.baseOption.series[0].data = []
            for( var i = 0 ; i < Response.length;i++)
            {
                this.option.baseOption.series[0].data.push({value:Response[i].rating,name:Response[i].title } ) 
                this.option.baseOption.legend.data.push(Response[i].title)
            }
            var myChart = echarts.init(document.getElementById('chart1'));
            myChart.setOption(this.option);
            
            window.onresize = function () {
                myChart.resize();
            }
        })
  },

  methods:{
    getDrawData(){
    var kind;
    kind="/api/getRating_top"
    return axios
            .get(kind)
            .then(Response=>{
                let json= Response.data
                return json
            })
            .catch(error=>{
                console.log(error)
            })
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

