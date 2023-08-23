import express from 'express';
import { PCRouter } from '../modules/PC/pc.route';
import { cartRouter } from '../modules/CART/cart.rout';
import { CategoryRouter } from '../modules/CATEGORY/category.route';

const router = express.Router();

const modulesRoutes = [
  {
    path: '/pc',
    route: PCRouter,
  },
  {
    path: '/pc-cart',
    route: cartRouter,
  },
  {
    path: '/category',
    route:CategoryRouter,
  },
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;
