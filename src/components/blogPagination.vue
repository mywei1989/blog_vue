<script>
export default {
  props:{
    pageIndex:Number,
    pageCount:Number,
    prefix:String
  },
  render(createElement){
    var pageList = [];
    if(this.pageIndex > 1){
      if(this.pageIndex-1===1){
        pageList.push(createElement('router-link',{class:'extend prev',attrs:{to:this.prefix + '/'},domProps:{innerHTML:'«'}}));
      }else{
        pageList.push(createElement('router-link',{class:'extend prev',attrs:{to:this.prefix + '/page/' + (this.pageIndex - 1) + '/'},domProps:{innerHTML:'«'}}));
      }
    }
    if(this.pageIndex === 2){
      pageList.push(createElement('router-link',{class:'page-number',attrs:{to:this.prefix + '/'},domProps:{innerHTML:'1'}}));
    }else if(this.pageIndex===3){
      pageList.push(createElement('router-link',{class:'page-number',attrs:{to:this.prefix + '/'},domProps:{innerHTML:'1'}}));
      pageList.push(createElement('router-link',{class:'page-number',attrs:{to:this.prefix + '/page/2/'},domProps:{innerHTML:'2'}}));
    }else if(this.pageIndex===4){
      pageList.push(createElement('router-link',{class:'page-number',attrs:{to:'/'},domProps:{innerHTML:'1'}}));
      pageList.push(createElement('router-link',{class:'page-number',attrs:{to:this.prefix + '/page/2/'},domProps:{innerHTML:'2'}}));
      pageList.push(createElement('router-link',{class:'page-number',attrs:{to:this.prefix + '/page/3/'},domProps:{innerHTML:'3'}}));
    }else if(this.pageIndex>=5){
      pageList.push(createElement('router-link',{class:'page-number',attrs:{to:'/'},domProps:{innerHTML:'1'}}));
      pageList.push(createElement('span',{class:'space',domProps:{innerHTML:'…'}}));

      for(let i=this.pageIndex-2;i<this.pageIndex;i++){
        pageList.push(createElement('router-link',{class:'page-number',attrs:{to:this.prefix + i +'/'},domProps:{innerHTML:i}}));
      } 
    }
    pageList.push(createElement('span',{class:'page-number current',domProps:{innerHTML:this.pageIndex}}));
    if(this.pageCount - this.pageIndex >= 4){
      pageList.push(createElement('router-link',{class:'page-number',attrs:{to:this.prefix + '/page/' + (this.pageIndex + 1) + '/'},domProps:{innerHTML:this.pageIndex + 1}}));
      pageList.push(createElement('router-link',{class:'page-number',attrs:{to:this.prefix + '/page/' + (this.pageIndex + 2) + '/'},domProps:{innerHTML:this.pageIndex + 2}}));
      pageList.push(createElement('span',{class:'space',domProps:{innerHTML:'…'}}));
      pageList.push(createElement('router-link',{class:'page-number',attrs:{to:this.prefix +'/page/' + this.pageCount + '/'},domProps:{innerHTML:this.pageCount}}));
    }else{
      for(let i=this.pageIndex+1;i<=this.pageCount;i++){
        pageList.push(createElement('router-link',{class:'page-number',attrs:{to:this.prefix + '/page/' + i +'/'},domProps:{innerHTML:i}}));
      }
    }
    if(this.pageIndex!==this.pageCount){
      pageList.push(createElement('router-link',{class:'extend next',attrs:{to:this.prefix + '/page/' + (this.pageIndex + 1) + '/'},domProps:{innerHTML:'»'}}));
    }
    return createElement(
      'nav',{class:'pagination'},pageList
    );
  }
}
</script>
