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
  name: "radar",
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
            title: {
              text: '各类别每年收入与支出'
            },
            legend:{
                data: ['revenue_sum', 'budget_sum']
            },
            tooltip : {
                trigger: 'item',
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
            radar: {
              name: {
                 textStyle: {
                  color: '#fff',
                  backgroundColor: '#999',
                  borderRadius: 3,
                  padding: [3, 5]
                }
              },
              indicator: [
              ]
            },
            calculable : true,
            series : [
                {
                    name:'revenue & budget',
                    type:'radar',
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
            var j=0
            let revenue_sum=[]
            let budget_sum=[]
            let max = []
            for(let m = 0; m < Response.length;m++)
            {
              revenue_sum.push(Response[m].revenue_sum)
              budget_sum.push(Response[m].budget_sum)
              max.push({max:parseInt(Response[m].revenue_sum)>parseInt(Response[m].budget_sum)?(parseInt(Response[m].revenue_sum)+ m/100*parseInt(Response[m].budget_sum)):(parseInt(Response[m].budget_sum)+m/100*parseInt(Response[m].revenue_sum)),
                        name:Response[m].genre})
            }

            this.option.baseOption.radar.indicator = max;
            this.option.baseOption.series[0].data=[{value:revenue_sum,name:"revenue_sum"},{value:budget_sum,name:"budget_sum"}];
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
    kind="/api/getGenre_revenue_avg"
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

