<template>
  <div class="tag-cloud">
    <div class="tag-cloud-title">
      目前共计 {{tagListLength}} 个标签
    </div>
    <div class="tag-cloud-tags" v-html="tagListHtml"></div>
  </div>
</template>

<script>
import axios from 'axios';
import config from '../../serviceConfig.json';
import tagcloud from '../helper/tagcloud';
export default {
  data(){
    return {
      tagListLength:[],
      tagListHtml:''
    };
  },
  mounted(){
    let self = this;
    axios.get(config.serviceUrl+'/getAllTag').then(function(result){
      self.tagListLength = result.data.length;
      let tagsObject = [];
      result.data.map(function(tag){
        tagsObject.push({path:tag.tag,name:tag.tagName,length:1});
      });
      self.tagListHtml = tagcloud(tagsObject,{min_font: 12, max_font: 30, amount: 200, color: true, start_color: '#ccc', end_color: '#111'});
    });    
  }
}
</script>