<template>
  <div id="app">
    <div class="container">
      <div class="columns page-header">
        <div>
          <h1>null的博客</h1>
        </div>
      </div>
      <div class="columns">
        <Navigation></Navigation>
      </div>
      <div class="columns">
        <div class="block-body column three-fourths">
          <router-view></router-view>
        </div>
        <div class="block-sidebar column one-fourth">
          <Information></Information>
          <TagList></TagList>
          <ArchiveList></ArchiveList>
          <Copyright></Copyright>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Information from './components/Information';
import Navigation from './components/Navigation';
import TagList from './components/TagList';
import ArchiveList from './components/ArchiveList';
import Copyright from './components/Copyright';

export default {
  name: 'app',
  components: {
    Navigation,
    Information,
    TagList,
    ArchiveList,
    Copyright
  }
}
</script>

<style>
@import './assets/css/normalize.css';
@import './assets/css/sunburst.css';
*{
  box-sizing: border-box
}

ol,pre,ul {
  margin-top: 0;
  margin-bottom: 0
}


body{
  font-family: Lato, "PingFang SC", "Microsoft YaHei", sans-serif;
  /*Georgia,'Source Han Sans CN','Xin Gothic','Hiragino Sans GB','Microsoft YaHei',sans-serif*/
  background: #F4F4F4;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.8
}

.columns:after,.columns:before,.container:after,.container:before,.rule:after,.rule:before,hr:after,hr:before {
  display: table;
  content: "";
}
.clearfix:after,.clearfix:before {
  display: table;
  content: "";
  clear:both;
}
.clearfix:after,
.columns:after,
.container:after,
.rule:after,
.navigation
hr:after{
  clear:both;
}


a{
  color: #4078c0;
  text-decoration: none;
}
a:active,a:hover {
  outline: 0;
  text-decoration: underline;
}

h1,h2,h3,h4,h5,h6 {
  margin-top: 15px;
  margin-bottom: 15px;
  line-height: 1.1;
}

.markdown-body,body {
  font-family: Lato, "PingFang SC", "Microsoft YaHei", sans-serif;
}

.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6,body h1,body h2,body h3,body h4,body h5,body h6 {
  font-weight: 500;
}



.container {
  width: 980px;
  margin-right: auto;
  margin-left: auto;
}

.columns {
  margin-right: -10px;
  margin-left: -10px;
}

.column {
  float: left;
}

.one-third {
  width: 33.333333%;
}

.two-thirds {
  width: 66.666667%;
}

.one-fourth {
  width: 25%;
}

.one-half {
  width: 50%;
}

.three-fourths {
  width: 75%;
}

.one-fifth {
  width: 20%;
}

.four-fifths {
  width: 80%;
}

.table-column {
  display: table-cell;
  width: 1%;
  vertical-align: top;
}



.right{
  float: right;
}

.left{
  float: left;
}


.container {
  width: auto;
}

.columns {
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 992px) {
  .container {
  width:970px
  }
}

@media (min-width: 1200px) {
  .container {
  width:1170px
  }
}

@media (max-width: 768px) {
  .column {
  width:100%
  }
  .menus-right {
  float: none
  }
}

@media (max-width: 992px) {
  .container {
  width:100%
  }
}


.block-body,.block-sidebar {
  padding: 0;
}

.page-header{
  margin:40px 0 10px;
  padding-bottom:9px;

}
.page-header>div{
  margin:0 10px;
  border-bottom:1px solid #eee;
}

.page-header h1{
  font-size: 36px;
  padding-left: 40px;
  font-weight:500;
}








.navigation{
  border: 1px solid #E7E7E7;
  margin: 10px
}

.navigation .menus-main,.navigation .menus-right {
  display: inline;
}

.navigation a{
  display: inline-block;
  color: #777;
  padding: 15px;
  text-decoration: none;
  line-height: 20px;
  vertical-align: top
}

.navigation a:hover {
  color: #333;
}

.navigation a.favicon {
  line-height:0.5em;
  padding: 10px;
}

.navigation img {
  width: 30px;
  height: 30px;
}

.archive-title,article {
  /*background-color: #fff;*/
  border: 1px solid #E7E7E7;
  margin: 10px 10px 20px;
  padding: 15px 20px;
}

article header {
  margin-bottom: 20px;
}

article header h2 {
  font-size: 30px;
  font-weight: 500;
  line-height: 1.1;
}

article .article-meta {
  color: #999;
  border-bottom: 1px solid #DDD;
  margin-bottom: 20px;
}

article .article-meta ul {
  list-style: none;
}

article .article-meta ul li {
  margin: 0 .2em;
  display: inline-block;
}

article .markdown-body {
  margin-bottom: 15px;
}

article .markdown-body img{
  max-width:100%;
}


.archive-pagination {
  border: 1px solid #E7E7E7;
  margin: 10px 10px 20px;
  padding: 15px 20px;
  text-align: center
}

.archive-pagination .paginator {
  margin: 0 auto;
  display: inline-block
}

.archive-pagination .paginator .extend,.archive-pagination .paginator .page-number,.archive-pagination .paginator space {
  display: inline-block;
  padding: .5em 1em;
  text-align: center;
  margin-right: .5em
}

.block-sidebar .widget {
  border: 1px solid #E7E7E7;
  margin: 10px 10px 20px;
  padding: 10px 15px;
}

.block-sidebar .widget p {
  margin-top: 0.4em;
  margin-bottom: 0.4em;
}

.block-sidebar .widget.text-content ul {
  padding-left: 10px;
  font-size: 13px;
}

.block-sidebar .widget.archives ul,.block-sidebar .widget.tags ul {
  list-style: none;
  padding-left: 0;
}

.block-sidebar .widget.tags ul li {
  margin: 0 .2em;
  display: inline-block;
}

.block-sidebar .widget.archives ul .archive-list-count:before {
  content: ' (';
}

.block-sidebar .widget.archives ul .archive-list-count:after {
  content: ')';
}


/******login******/

body.login .wrapper{
  background: #434343;
  background: -webkit-linear-gradient(top left, #434343 0%, #787878 100%);
  background: linear-gradient(to bottom right, #434343 0%, #787878 100%);
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 400px;
  margin-top: -200px;
  overflow: hidden;
}
body.login .wrapper.form-success .container h1 {
  -webkit-transform: translateY(85px);
      -ms-transform: translateY(85px);
          transform: translateY(85px);
}
body.login .container{
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 0;
  height: 400px;
  text-align: center;
}
body.login .container h1{
  font-size: 40px;
  -webkit-transition-duration: 1s;
          transition-duration: 1s;
  -webkit-transition-timing-function: ease-in-put;
          transition-timing-function: ease-in-put;
  font-weight: 200;
}
body.login form{
  padding: 20px 0;
  position: relative;
  z-index: 2;
}
body.login form input{
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 250px;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: white;
  -webkit-transition-duration: 0.25s;
          transition-duration: 0.25s;
  font-weight: 300;
}
body.login form input:hover{
  background-color: rgba(255, 255, 255, 0.4);
}
body.login form input:focus{
  background-color: white;
  width: 300px;
  color: #1C1C1C;
}
body.login form button{
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #1C1C1C;
  border-radius: 3px;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  -webkit-transition-duration: 0.25s;
          transition-duration: 0.25s;
}
body.login form button:hover{
  background-color: #f5f7f9;
}
body.login .bg-bubbles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
body.login .bg-bubbles li{
  position: absolute;
  list-style: none;
  display: block;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  bottom: -160px;
  -webkit-animation: square 25s infinite;
  animation: square 25s infinite;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
body.login .bg-bubbles li:nth-child(1){
  left: 10%;
}
body.login .bg-bubbles li:nth-child(2){
  left: 20%;
  width: 80px;
  height: 80px;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
  -webkit-animation-duration: 17s;
          animation-duration: 17s;
}
body.login .bg-bubbles li:nth-child(3){
  left: 25%;
  -webkit-animation-delay: 4s;
          animation-delay: 4s;
}
body.login .bg-bubbles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  -webkit-animation-duration: 22s;
          animation-duration: 22s;
  background-color: rgba(255, 255, 255, 0.25);
}
body.login .bg-bubbles li:nth-child(5){
  left: 70%;
}
body.login .bg-bubbles li:nth-child(6){
  left: 80%;
  width: 120px;
  height: 120px;
  -webkit-animation-delay: 3s;
          animation-delay: 3s;
  background-color: rgba(255, 255, 255, 0.2);
}
body.login .bg-bubbles li:nth-child(7){
  left: 32%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 7s;
          animation-delay: 7s;
}
body.login .bg-bubbles li:nth-child(8){
  left: 55%;
  width: 20px;
  height: 20px;
  -webkit-animation-delay: 15s;
          animation-delay: 15s;
  -webkit-animation-duration: 40s;
          animation-duration: 40s;
}
body.login .bg-bubbles li:nth-child(9){
  left: 25%;
  width: 10px;
  height: 10px;
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
  -webkit-animation-duration: 40s;
          animation-duration: 40s;
  background-color: rgba(255, 255, 255, 0.3);
}
body.login .bg-bubbles li:nth-child(10){
  left: 90%;
  width: 160px;
  height: 160px;
  -webkit-animation-delay: 11s;
          animation-delay: 11s;
}
@-webkit-keyframes square{
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
  }
}
@keyframes square{
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
            transform: translateY(-700px) rotate(600deg);
  }
}
/******login end******/

/********post start********/
.post input,
.post select{
  height:100%;
  line-height: 100%;
}

.post input[type="text"],
.post .textarea,
.post textarea,
.post select{
  border:1px solid #E7E7E7;
}

.post .textarea,
.post textarea{
  width:100%;
  min-height:500px;
  background:#787878;
  color:#000;
  outline:0;
}

.post button{
  width: 250px;
  height:50px;
}

/*.post input[type="checkbox"]{
  display:block;
}*/



.post .tags label{
  position: relative;
  float:left;
  margin-left:10px;
}


.post .tags label>input[type="checkbox"]{
  position: absolute;
  width: 16px;
  height: 16px;
  top:50%;
  margin-top:-8px;
}

.post .tags label>span{
  padding-left:16px;
}

.post .tags>input[type="text"]{
  width: 100%;
}

/********post end********/


/******blog theme start*****/
body{
  background-color:#434343;  /*消炭*/
  color:#000;
}

.archive-pagination,
.block-sidebar .widget,
.border,
article,
.navigation{
  background-color: #787878;  /*铅*/
}


.navigation a,
a{
  /*color:#A5DEE4 !important;*/  /*瓶覗*/
  color:#F1F5F2 !important;
}

pre{
  background-color:#1C1C1C;  /*墨*/
  color:#fff;
  padding:10px 15px;

}

code{
  font-family:Consolas,"Courier New",Courier,FreeMono,monospace
}

/******blog theme end*****/


/*MusicBox*/
.block-sidebar .widget.musicbox{
  padding:10px 5px;
}
</style>
