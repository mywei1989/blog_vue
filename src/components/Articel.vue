<template>
  <article>
    <header>
      <h2>
        <router-link v-bind:to="{path: '/' + articleModel.time.year + '/' + articleModel.time.month + '/' + articleModel.name}">{{articleModel.title}}</router-link>
      </h2>
    </header>
    <div class="article-meta clearfix">
      <time class="left">{{articleModel.timeStr}}</time>
      <ul class="tags left"></ul>
      <ul class="tags right">
        <li v-for="(item,index) in articleModel.tags">
          <router-link v-bind:to="{path:'/tag/'+item.tag + '/'}">{{item.tagName}}</router-link>
        </li>
      </ul>
    </div>
    <div class="markdown-body" v-html="articleModel.post1"></div>
  </article>
</template>

<script>

export default {
  props:{
    articleModel:Object
  }
}
</script>
