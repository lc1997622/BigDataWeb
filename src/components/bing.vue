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

export default {
  name: "bing",
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
            title : {
                text: '评分前十的电影',
                x:'center'
            },
            legend:{
                 type:'scroll',
                 orient: 'vertical',
                 left: 'left',
                 data:[]
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [
                {
                    name:'面积模式',
                    type:'pie',
                    selectedMode:'single',
                    data:[                                                      
                    ]
                }
            ]
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

