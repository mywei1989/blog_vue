<template >
  <div v-if="isSingleUse">
    <article>
      <header>
        <h2 v-if="articleModelData && articleModelData.time">
          <router-link v-bind:to="{path: '/' + articleModelData.time.year + '/' + articleModelData.time.month + '/' + articleModelData.name}">{{articleModelData.title}}</router-link>
        </h2>
      </header>
      <div class="article-meta clearfix">
        <time class="left" v-if="articleModelData && articleModelData.time">{{articleModelData.timeStr}}</time>
        <ul class="tags left"></ul>
        <ul class="tags right">
          <li v-for="(item,index) in articleModelData.tags">
            <router-link v-bind:to="{path:'/tag/'+item.tag + '/'}">{{item.tagName}}</router-link>
          </li>
        </ul>
      </div>
      <div class="markdown-body" v-html="articleModelData.post"></div>
    </article>
  </div>
  <div v-else>
    <article>
    <header>
      <h2 v-if="articleModel && articleModel.time">
        <router-link v-bind:to="{path: '/' + articleModel.time.year + '/' + articleModel.time.month + '/' + articleModel.name}">{{articleModel.title}}</router-link>
      </h2>
    </header>
    <div class="article-meta clearfix">
      <time class="left" v-if="articleModel && articleModel.time">{{articleModel.timeStr}}</time>
      <ul class="tags left"></ul>
      <ul class="tags right">
        <li v-for="(item,index) in articleModel.tags">
          <router-link v-bind:to="{path:'/tag/'+item.tag + '/'}">{{item.tagName}}</router-link>
        </li>
      </ul>
    </div>
    <div class="markdown-body" v-html="articleModel.post"></div>
  </article>
  </div>  
</template>
<script>
import axios from 'axios';
import config from '../../serviceConfig.json';
export default {
  data(){
    return {
      isSingleUse:false,
      articleModelData:{}
    };
  },
  props:{
    articleModel:{
      type:Object,
      default:function(){
        return {
          time:{
            year:1989,
            month:9,
            name:'null'
          },
          timeStr:'年月日',
          tags:[]
        }
      }
    }
  },
  watch:{
    '$route':function(to,from){
      let self = this;
      let name = to.name;
      if(name === 'Article'){
        let url = config.serviceUrl;
        let queryType = to.meta.queryType;
        if(queryType !== 'info'){
          url = url + '/' + to.params.year + '/' + to.params.month + '/' + to.params.name;
        }else{
          url = url + '/' + to.params.info;
        }
        axios.get(url).then(function(result){
          if(result.data.article){
            self.isSingleUse = true;
            self.articleModelData = result.data.article;
          }
        });  
      }
    }
  },
  mounted(){
    let self = this;
    let name = self.$route.name;
    if(name === 'Article'){
      let url = config.serviceUrl;
      let queryType = self.$route.meta.queryType;
      if(queryType !== 'info'){
        url = url + '/' + self.$route.params.year + '/' + self.$route.params.month + '/' + self.$route.params.name;
      }else{
        url = url + '/' + self.$route.params.info;
      }
      axios.get(url).then(function(result){
        if(result.data.article){
          self.isSingleUse = true;
          self.articleModelData = result.data.article;
        }
      });  
    }
  }
}
</script>
