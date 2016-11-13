<template >
  <div v-if="isSingleUse">
    <article class="post post-type-normal">
      <header class="post-header">
        <h1 class="post-title" itemprop="name headline" v-if="articleModelData && articleModelData.time">
          <router-link class="post-title-link" v-bind:to="{path: '/' + articleModelData.time.year + '/' + articleModelData.time.month + '/' + articleModelData.name}">{{articleModelData.title}}</router-link>
          </h1>
      </header>
      <div class="post-meta">
        <span class="post-time" v-if="articleModelData && articleModelData.time">
          <span class="post-meta-item-icon">
            <i class="fa fa-calendar-o"></i>
          </span>
          <span class="post-meta-item-text">发表于</span>
          <time itemprop="dateCreated" datetime="">
              {{articleModelData.timeStr}}
          </time>
        </span>
        <span class="post-category">
              &nbsp; | &nbsp;
          <span class="post-meta-item-icon">
            <i class="fa fa-folder-o"></i>
          </span>
          <span class="post-meta-item-text">标签</span>
          <span class="tags" v-for="(item,index) in articleModelData.tags">
            <router-link v-bind:to="{path:'/tag/'+item.tag + '/'}"><span>{{item.tagName}}</span></router-link>
          </span>
        </span>
      </div>
      <div class="post-body" v-html="articleModelData.post">
      </div>
    </article>
  </div>
  <div v-else>
    <article class="post post-type-normal">
      <header class="post-header">
        <h1 class="post-title" itemprop="name headline" v-if="articleModel && articleModel.time">
          <router-link class="post-title-link" v-bind:to="{path: '/' + articleModel.time.year + '/' + articleModel.time.month + '/' + articleModel.name}">{{articleModel.title}}</router-link>
          </h1>
      </header>
      <div class="post-meta">
        <span class="post-time" v-if="articleModel && articleModel.time">
          <span class="post-meta-item-icon">
            <i class="fa fa-calendar-o"></i>
          </span>
          <span class="post-meta-item-text">发表于</span>
          <time itemprop="dateCreated" datetime="">
              {{articleModel.timeStr}}
          </time>
        </span>
        <span class="post-category">
              &nbsp; | &nbsp;
          <span class="post-meta-item-icon">
            <i class="fa fa-folder-o"></i>
          </span>
          <span class="post-meta-item-text">标签</span>
          <span class="tags" v-for="(item,index) in articleModel.tags">
            <router-link v-bind:to="{path:'/tag/'+item.tag + '/'}"><span>{{item.tagName}}</span></router-link>
          </span>
        </span>
      </div>
      <div class="post-body" v-html="articleModel.post">
      </div>
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
      console.log(to)
      if(name === 'blogArticle'){
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
    if(name === 'blogArticle'){
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
