<template>
  <div>
    <Acticle_
      v-for="(item,index) in list"
      v-bind:articleModel="item"
      v-bind:index="index">
    </Acticle_>
    <Pagination
      onChange={this.onChange}
      v-bind:pageIndex="pageIndex"
      v-bind:pageCount="pageCount"
      v-bind:prefix="prefix">
    </Pagination>
  </div>

</template>

<script>
import axios from 'axios';
import config from '../../serviceConfig.json';
import Acticle_ from './Article';
import Pagination from './Pagination';

export default {
  data(){
    return {
      list:[{name:1}],
      pageIndex:1,
      pageCount:1,
      prefix:''
    };
  },
  mounted(){
    //console.log(this.$route.params);
    this.getArticleList();
  },
  watch:{
    '$route':function(to,from){
      let self = this;
      let url = config.serviceUrl;
      let queryType = to.meta.queryType;
      switch(queryType){
        case '/':
          if(to.params.pageIndex){
            url = url + '/page/' + to.params.pageIndex + '/';
          }
        break;
        case 'tag':
          let keyword = to.params.tag;
          url = url + '/tag/' + keyword + '/';
          if(to.params.pageIndex){
            url = url + 'page/' + to.params.pageIndex + '/';
          }
        break;
        case 'archive':
          url = url + '/' + to.params.year + '/' + to.params.month + '/';
          if(to.params.pageIndex){
            url = url + 'page/' + to.params.pageIndex + '/';
          }
        break;
      }
      axios.get(url).then(function(result){
        self.list = result.data.list;
        self.pageIndex = result.data.pagination.pageIndex;
        self.pageCount = result.data.pagination.pageCount;
        self.prefix = result.data.pagination.prefix||'';
      });
    }
  },
  methods:{
    getArticleList(){
      let self = this;
      let url = config.serviceUrl;
      let queryType = self.$route.meta.queryType;
      switch(queryType){
        case '/':
          if(self.$route.params.pageIndex){
            url = url + '/page/' + self.$route.params.pageIndex + '/';
          }
        break;
        case 'tag':
          let keyword = self.$route.params.tag;
          url = url + '/tag/' + keyword + '/';
          if(self.$route.params.pageIndex){
            url = url + 'page/' + self.$route.params.pageIndex + '/';
          }
        break;
        case 'archive':
          url = url + '/' + self.$route.params.year + '/' + self.$route.params.month + '/';
          if(self.$route.params.pageIndex){
            url = url + 'page/' + self.$route.params.pageIndex + '/';
          }
        break;
      }
      axios.get(url).then(function(result){
        self.list = result.data.list;
        self.pageIndex = result.data.pagination.pageIndex;
        self.pageCount = result.data.pagination.pageCount;
        self.prefix = result.data.pagination.prefix||'';
      });
    }
  },
  components: {Acticle_,Pagination},
  /*render(createElement){
    console.log('render');
    return createElement(
      'div',
      'aaa',
      [
        createElement(Acticel),
        createElement(Acticel)
      ]
    );
  }*/
}
</script>

<style>

</style>
