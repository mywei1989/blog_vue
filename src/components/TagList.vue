<template>
  <div id="tags" class="widget tags">
    <span v-if="tagList.length <= 0">Loading...</span>
    <ul class="tag-list" v-if="tagList.length > 0">
      <li class="tag-list-item" v-for="(tag,index) in tagList"> 
        <router-link class="tag-list-link" v-bind:to="'/tag/' + tag.tag + '/'">{{tag.tagName}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
import config from '../../serviceConfig.json';

export default {
  data(){
    return {
      tagList:[]
    };
  },
  mounted(){
    let self = this;
    axios.get(config.serviceUrl+'/getAllTag').then(function(result){
      self.tagList = result.data;
    });
  }
}
</script>