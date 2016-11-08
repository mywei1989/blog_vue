<template>
  <div id="archives" class="widget archives">
    <span v-if="archiveList.length <= 0">Loading...</span>
    <ul class="archive-list" v-if="archiveList.length > 0">
      <li class="archive-list-item" v-for="(archive,index) in archiveList"> 
        <router-link class="tag-list-link" v-bind:to="'/' + archive.year + '/' + archive.month + '/'">{{archive.monthFormat}} {{archive.year}}</router-link>
        <span class="archive-list-count">{{archive.count}}</span>
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
      archiveList:[]
    };
  },
  mounted(){
    let self = this;
    /*axios.get(config.serviceUrl+'/getArchive').then(function(result){
      self.archiveList = result.data;
    });*/
  }
}
</script>