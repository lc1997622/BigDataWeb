<template>
    <div>
  <div id="back" class="img2 note page" :style ="picture">  
  <div id="backimg" class="row">
    <div style="height:25px"></div>
  <div class="container col l5 m8 s12 offset-s2  offset-l3 offset-m0 offset-s0">

  </div>
  </div> 
</div>
  </div>
</template>

<style scoped lang="scss">
#backimg
{
  height: 87vh;
}
#lunbo
{
 width:100%;
  
}

</style>

<script>

import axios from "axios";


export default {
  name: "bing",
  components:{
      
  },
  props: {
    category: String
  },
  data() {
    return {
      picture:{
          backgroundImage: "url(" + require("../images/background.jpg") + ") ",
          backgroundPosition: "top right",
          backgroundRepeat: "no-repeat",
          backgroundSize:"1250px 710px",
          backgroundAttachment:"fixed",  
      },
    };
  },
  created(){
  },
  mounted(){

  },
   beforeDestroy() {
     
  },
  watch:{
    category:function()
    {
     
    }
  },
  methods:{
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