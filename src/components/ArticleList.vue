<template>
  <div>
    <Acticel
      v-for="(item,index) in list"
      v-bind:articleModel="item"
      v-bind:index="index">
    </Acticel>
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
import Acticel from './Articel';
import Pagination from './Pagination';

export default {
  data(){
    return {
      list:[{name:1}],
      pageIndex:1,
      pageCount:1,
      prefix:'/'
    };
  },
  mounted(){
    console.log(this.$route.params);
    this.getArticleList();
  },
  methods:{
    getArticleList(){
      var self = this;
      axios.get('http://blog_api.nullcn.com').then(function(result){
        console.log(result.data);
        console.log(self.list);
        self.list = result.data.list;
        self.pageIndex = result.data.pagination.pageIndex;
        self.pageCount = result.data.pagination.pageCount;
        console.log(self.list);
      });
    }
  },
  components: {Acticel,Pagination},
  render(createElement){
    console.log('render');
    //console.log(this.list)
    return createElement(
      'div',
      'aaa',
      [
        createElement(Acticel),
        createElement(Acticel)
      ]
    );
  }
}
</script>

<style>

</style>
