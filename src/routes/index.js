import blogArticleList from '../components/blogArticleList';
import blogArticle from '../components/blogArticle';
import blogTagList from '../components/blogTagList';

const routes = [
  {path: '/', name: 'blogArticleList',component: blogArticleList,meta:{queryType:'/'}},
  {path: '/page/:pageIndex', name: 'blogArticleList',component: blogArticleList,meta:{queryType:'/'}},
  {path: '/tag/:tag', name: 'blogArticleList',component: blogArticleList,meta:{queryType:'tag'}},
  {path: '/tag/:tag/', name: 'blogArticleList',component: blogArticleList,meta:{queryType:'tag'}},
  {path: '/tag/:tag/page/pageIndex', name: 'blogArticleList',component: blogArticleList,meta:{queryType:'tag'}},
  {path: '/tag/:tag/page/pageIndex/', name: 'blogArticleList',component: blogArticleList,meta:{queryType:'tag'}},
  {path: '/:year/:month', name: 'blogArticleList',component: blogArticleList,meta:{queryType:'archive'}},
  {path: '/:year/:month/', name: 'blogArticleList',component: blogArticleList,meta:{queryType:'archive'}},
  {path: '/:year/:month/page/:pageIndex', name: 'blogArticleList',component: blogArticleList,meta:{queryType:'archive'}},
  {path: '/:year/:month/page/:pageIndex/', name: 'blogArticleList',component: blogArticleList,meta:{queryType:'archive'}},
  {path: '/:year/:month/:name', name: 'blogArticle',component: blogArticle,meta:{queryType:'article'}},
  {path: '/tags', name: 'blogTagList',component: blogTagList},
  {path: '/:info', name: 'blogArticle',component: blogArticle,meta:{queryType:'info'}}
].map(route => {
  route.path = route.path;
  return route
});

export default routes;
