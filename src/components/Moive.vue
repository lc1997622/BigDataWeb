<template>
<div
    id = "body"
    class="grey lighten-4">
    <header>
    <nav class="black darken-4">
    <div class="nav-wrapper">
      <a class="brand-logo center">电影 </a>
      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>

  <ul id="slide-out" class="sidenav sidenav-fixed">
    <li>
        <div class="user-view">
          <div class="carousel carousel-slider" id = 'carousel'>
            <a class="carousel-item" href="#one!"><img src="../images/11.jpg" /></a>
            <a class="carousel-item" href="#two!"><img src="../images/12.jpg"></a>
            <a class="carousel-item" href="#three!"><img src="../images/13.jpg"></a>
            <a class="carousel-item" href="#four!"><img src="../images/14.jpg"></a>
            <a class="carousel-item" href="#four!"><img src="../images/15.jpg"></a>
            <a class="carousel-item" href="#four!"><img src="../images/16.jpg"></a>
            <a class="carousel-item" href="#four!"><img src="../images/17.jpg"></a>
          </div>          
        </div>
    </li>
    <div style="height:250px"></div>
    <li
      v-for="c in Categories"
      :key="c.Name"
      :class="{active: c.Name == category}">
        <router-link
        :to="categoryLink(c)"
        replace>{{ c.Name }}<li><div class="divider"></div></li></router-link>
    </li>
  </ul>
  </header>

  <main>
      <router-view
        :filter="filter"
        @video="switchVideo($event)"
      />
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
           <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a class="modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
  </main>
</div>
</template>

<script>
</script>
<script>
import jQuery from "jquery";
import axios from "axios";
import { categoryLink } from "../router/link.js";
import store from '@/store';


export default {
  name: "Moive",
  components: {},
  props: {
    category: String
  },
  data() {
    return {
      navBtn: null,
      background:"http://119.57.75.134:8080/my/images/ba.png",
      filter: "",
      Categories: [{
          Name: "首页"
        },
        {
          Name: "评分前十电影"
        },
        {
          Name: "票房前十电影"
        },
        {
          Name: "投票前十计数"
        }
      ,
        {
          Name: "电影种类"
        },
        {
          Name:"评分段统计"
        },
        {
          Name:"历年发行电影趋势"
        },
        {
          Name:"电影语言统计"
        },
        {
          Name:"历年总票房"
        },
        {
          Name:"热度与票房的关系"
        },
        {
          Name:"未来十年票房预测"
        },
        {
          Name:"将上映电影票房预测"
        },
        {
          Name:'投票数量与票房的关系'
        },
        {
          Name:'词云图'
        },
        {
          Name:'电影投票预计'
        },
        {
          Name:'电影预算与收入'
        }
      ],
      instances: null,
      instances2:null
    };
  },
  watch:{

  },
  mounted() {
      var elems = document.querySelectorAll(".sidenav");
      this.instances = M.Sidenav.init(elems);
      
      var elems = document.querySelectorAll('.carousel');
      this.instances2 = M.Carousel.init(elems,{fullWidth : true,indicators:true});

  },
  beforeDestroy() {
      this.instances.destroy();
      this.instances2.destroy();
  },
  methods: {
    categoryLink,
    index(){
    }
  },
  store,
};
</script>

<style>
header,
main,
footer {
  padding-left: 300px;
}

@media only screen and (max-width: 992px) {
  header,
  main,
  footer {
    padding-left: 0;
  }
}

main {
  padding-top: 10px;
}
.container {
  width: 93%;
}
.user-view{
  height: 26vh;
}
.loginbtn{
 width: 16vh;
 height: 6vh;
 margin-top: 5vh;
 margin-left: 5vh;
 opacity: 0.8;
}
.text{
  margin-top: 0.5vh;
  font-size: 130%;
}
.carousel-item{
  z-index: 1000;
}
</style>