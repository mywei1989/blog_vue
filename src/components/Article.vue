<template>
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
    <div class="markdown-body" v-html="articleModelData.post1"></div>
  </article>
</template>

<script>
import axios from 'axios';
import config from '../../serviceConfig.json';
export default {
  /*data(){
    console.log('data()');
    
    return {
      articleModelData:this.articleModel
    };
  },*/
  props:{
    articleModel:Object
  },
  mounted(){
    let self = this;
    console.log('mounted');
    let name = self.$route.name;

    if(name === 'Article'){
      let url = config.serviceUrl;
      let queryType = self.$route.meta.queryType;
      if(queryType !== 'info'){
        url = url + '/' + self.$route.params.year + '/' + self.$route.params.month + '/' + self.$route.params.name;
      }else{
        url = url + '/' + self.$route.params.info;
      }
      console.log(url)

      self.articleModelData = {tags:[]}
    }

  }
}
</script>
