<template>
  <header id="header" class="header" itemscope itemtype="http://schema.org/WPHeader">
    <div class="header-inner">
      <div class="site-meta">
        <div class="site-meta-headline">
          <a>
            <img class="custom-logo-image" src=""alt=""/>
          </a>
        </div>
        <div class="custom-logo-site-title">
          <a href="/"  class="brand" rel="start">
            <span class="logo-line-before"><i></i></span>
            <span class="site-title">null</span>
            <span class="logo-line-after"><i></i></span>
          </a>
        </div>
        <p class="site-subtitle"></p>
      </div>
      <div class="site-nav-toggle">
        <button v-on:click="isShow = !isShow">
          <span class="btn-bar"></span>
          <span class="btn-bar"></span>
          <span class="btn-bar"></span>
        </button>
      </div>
      <transition name="slide">
      <nav class="site-nav" v-show="isShow">
        <ul id="menu" class="menu">
          <router-link tag="li" active-class="menu-item-active" to="/" class="menu-item menu-item-home" exact>
            <a><i class="menu-item-icon fa fa-fw fa-home"></i> <br>首页</a>
          </router-link>
          <router-link tag="li" active-class="menu-item-active" to="/about" class="menu-item menu-item-home" exact>
            <a><i class="menu-item-icon fa fa-fw fa-user"></i> <br>关于我</a>
          </router-link>
          <router-link tag="li" active-class="menu-item-active" to="/profile" class="menu-item menu-item-home" exact>
            <a><i class="menu-item-icon fa fa-fw fa-sticky-note"></i> <br>简历</a>
          </router-link>
          <router-link tag="li" active-class="menu-item-active" to="/links" class="menu-item menu-item-home" exact>
            <a><i class="menu-item-icon fa fa-fw fa-link"></i> <br>链接</a>
          </router-link>
          <router-link tag="li" active-class="menu-item-active" to="/booklist" class="menu-item menu-item-home" exact>
            <a><i class="menu-item-icon fa fa-fw fa-book"></i> <br>书单</a>
          </router-link>
        </ul>
      </nav>
    </transition>
    </div>
  </header>
</template>

<script>
  export default {
    data(){
      return {
        isShow:0
      }
    }
  }
</script>

<style>
.site-nav{
  height: 200px;
}
.slide-enter-active {
  transition: all .5s ease;
}
.slide-leave-active {
  transition: all .5s ease;
}
.slide-enter,
.slide-leave-active {
  height: 0;
}
</style>