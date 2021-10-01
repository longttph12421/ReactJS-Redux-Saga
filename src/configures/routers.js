import React from 'react';
import HomePage from '../components/page/HomePage';
import ProductBox from '../containers/product/ProductBox';
import CategoryBox from '../containers/category/CategoryBox';
import LoginPage from '../components/page/LoginPage';
import Page404 from '../components/page/Page404';
const routes = [
  { path: '/Home', exact: true, name: 'Home', main: () => <HomePage /> },
  {
    path: '/Product',
    exact: true,
    name: 'Product',
    main: () => <ProductBox />,
  },
  {
    path: '/Category',
    exact: true,
    name: 'Category',
    main: () => <CategoryBox />,
  },
  {
    path: '/Login',
    exact: true,
    name: 'Login',
    main: () => <LoginPage />,
  },
  { path: '', exact: false, name: 'Page404', main: () => <Page404 /> },
];

export default routes;
