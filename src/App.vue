<template>
  <div id="app">
    <div class="container one-collumn sidebar-position-left page-home ">
      <blogHeader></blogHeader>
      <main class="main">
        <div class="main-inner">
          <div class="content-wrap">
            <div class="content">
              <section class="posts-expand">
                <router-view></router-view>
              </section>
            </div>
          </div>
          <div class="sidebar-toggle">
            <div class="sidebar-toggle-line-wrap">
              <span class="sidebar-toggle-line sidebar-toggle-line-first"></span>
              <span class="sidebar-toggle-line sidebar-toggle-line-middle"></span>
              <span class="sidebar-toggle-line sidebar-toggle-line-last"></span>
            </div>
          </div>
          <blogSidebar></blogSidebar>
        </div>
      </main>
      <blogFooter></blogFooter>
    </div>
  </div>
</template>

<script>
import blogHeader from './components/blogHeader';
import blogArticleList from './components/blogArticleList';
import blogFooter from './components/blogFooter';
import blogSidebar from './components/blogSidebar';

export default {
  name: 'app',
  components: {
    blogHeader,
    blogArticleList,
    blogFooter,
    blogSidebar
  }
}
</script>

<style>

@import './assets/css/normalize.css';
@import './assets/css/font-awesome.css';
@import './assets/css/style.css';

/*自定义修改*/
@media (max-width: 767px) {
  .site-nav {
    display: block;
    margin: 0 -10px;
    padding: 0 10px;
    clear: both;
    border-top: 1px solid #ddd;
  }
}

.tags{
  padding-right: 2px;
}
</style>
