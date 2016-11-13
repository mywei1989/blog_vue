<template>
  <aside id="sidebar" class="sidebar">
    <div class="sidebar-inner">
      <section class="site-overview sidebar-panel  sidebar-panel-active ">
        <div class="site-author motion-element" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
          <img class="site-author-image" itemprop="image" src="../assets/images/favicon.png" alt="null">
          <p class="site-author-name" itemprop="name">null</p>
          <p class="site-description motion-element" itemprop="description"></p>
        </div>
        <nav class="site-state motion-element">
          <div class="site-state-item site-state-posts">
            <router-link to="/">
              <span class="site-state-item-count">{{articleCount}}</span>
              <span class="site-state-item-name">日志</span>
            </router-link>
          </div>
          <div class="site-state-item site-state-categories">
            <span class="site-state-item-count">NaN</span>
            <span class="site-state-item-name">分类</span>
          </div>
          <div class="site-state-item site-state-tags">
            <router-link to="/tags">
              <span class="site-state-item-count">{{tagCount}}</span>
              <span class="site-state-item-name">标签</span>
            </router-link>
          </div>
        </nav>
        <div class="links-of-author motion-element">  </div>
        <div class="links-of-author motion-element">
          <span class="links-of-author-item">
            <a href="https://github.com/mywei1989/blog_vue" target="_blank" title="GitHub">
              <i class="fa fa-fw fa-github"></i>
              GitHub
            </a>
          </span>
          <span class="links-of-author-item">
            <a href="http://git.oschina.net/mywei1989" target="_blank" title="GitHub">
              <i class="fa fa-fw fa-github"></i>
              GitOSC
            </a>
          </span>
          <span class="links-of-author-item">
            <a href="https://twitter.com/mywei1989" target="_blank" title="Twitter">
              <i class="fa fa-fw fa-twitter"></i>
              Twitter
            </a>
          </span>
          <span class="links-of-author-item">
            <a href="http://www.zhihu.com/people/lin-zhi-wei-92" target="_blank" title="知乎">
                <i class="fa fa-fw fa-globe"></i>
              知乎
            </a>
          </span>
        </div>
      </section>
    </div>
  </aside>
</template>
<script>
import axios from 'axios';
import config from '../../serviceConfig.json';
export default {
  data(){
    return {
      articleCount:0,
      tagCount:0
    };
  },
  mounted(){
    var self = this;
    let url = config.serviceUrl + '/getBlogInfo';
    axios.get(url).then(function(result){
      self.articleCount = result.data.blogInfo.articleCount;
      self.tagCount = result.data.blogInfo.tagCount;
    });
  }
}
</script>
<style>
.sidebar{
  margin-top: 305px; 
  display: block;
}
</style>