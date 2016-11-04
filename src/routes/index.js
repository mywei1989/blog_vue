import ArticleList from '../components/ArticleList';

const routes = [
  {path: '/', name: 'ArticleList',component: ArticleList},
  {path: '/page/:pageIndex', name: 'ArticleList',component: ArticleList},


].map(route => {
  route.path = route.path;
  return route
});

export default routes;
