
<script>
export default {
  props:{
    pageIndex:Number,
    pageCount:Number,
    prefix:String
  },
  render(createElement){
    var self = this;
    var pageList = [];
    console.log('Pagination');
    console.log(self);
    if(self.props > 1){
      pageList.push(createElement('a',{class:'extend prev',attrs:{href:'#'},domProps:{innerHTML:'«'}}));
    }
    return createElement(
      'div',{class:'archive-pagination'},
      createElement('div',{class:'paginator'},pageList)
    );
  }
}
</script>
