import ArticleList from '../components/ArticleList';
import Article from '../components/Article';

const routes = [
  {path: '/', name: 'ArticleList',component: ArticleList,meta:{queryType:'/'}},
  {path: '/page/:pageIndex', name: 'ArticleList',component: ArticleList,meta:{queryType:'/'}},
  {path: '/tag/:tag', name: 'ArticleList',component: ArticleList,meta:{queryType:'tag'}},
  {path: '/tag/:tag/', name: 'ArticleList',component: ArticleList,meta:{queryType:'tag'}},
  {path: '/tag/:tag/page/pageIndex', name: 'ArticleList',component: ArticleList,meta:{queryType:'tag'}},
  {path: '/tag/:tag/page/pageIndex/', name: 'ArticleList',component: ArticleList,meta:{queryType:'tag'}},
  {path: '/:year/:month', name: 'ArticleList',component: ArticleList,meta:{queryType:'archive'}},
  {path: '/:year/:month/', name: 'ArticleList',component: ArticleList,meta:{queryType:'archive'}},
  {path: '/:year/:month/page/:pageIndex', name: 'ArticleList',component: ArticleList,meta:{queryType:'archive'}},
  {path: '/:year/:month/page/:pageIndex/', name: 'ArticleList',component: ArticleList,meta:{queryType:'archive'}},
  {path: '/:year/:month/:name', name: 'Article',component: Article,meta:{queryType:'article'}},
  {path: '/:info', name: 'Article',component: Article,meta:{queryType:'info'}}
].map(route => {
  route.path = route.path;
  return route
});

export default routes;
