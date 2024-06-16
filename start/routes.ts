/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const BannersController = () => import('#controllers/banners_controller')
const ThriveInServicesController = () => import('#controllers/thrive_in_services_controller')
const OrdersController = () => import('#controllers/orders_controller')
const AuthController = () => import('#controllers/auth_controller')
const ArticlesController = () => import('#controllers/articles_controller')
const UsersController = () => import('#controllers/users_controller')
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.group(() => {
  router.post('/register', [AuthController, 'registerUser'])
  router.post('/login', [AuthController, 'loginUser'])
})

router.group(() => {
  router.get('/banners', [BannersController, 'getAllBanner'])
  router.get('/articles', [ArticlesController, 'getAllArticle'])
  router.get('/services', [ThriveInServicesController, 'getAllServiceCategory'])
  router.get('/list-services/:category', [ThriveInServicesController, 'getAllServicesByCategory'])
  router.get('/detail-services/:service_id', [ThriveInServicesController, 'getServiceById'])
  router.get('/detail-services/:service_id/portfolio', [
    ThriveInServicesController,
    'getAllServicePorfolio',
  ])
})

router.group(() => {
  router.get('/order-packages/:service_id', [OrdersController, 'getOrder'])
  router.post('/order-now', [OrdersController, 'orderNow'])
  router.get('/history-order', [OrdersController, 'getHistoryOrder'])
  router.get('/history-order/:order_id', [OrdersController, 'getHistoryOrderById'])
})

// Admin
router.group(() => {
  router.post('/register-admin', [AuthController, 'registerAdmin'])
  router.post('/login-admin', [AuthController, 'loginAdmin'])
})

router.group(() => {
  router.get('/users', [UsersController, 'getAllUsers'])
  router.post('/create-category', [ThriveInServicesController, 'createServiceCategory'])
  router.post('/create-banner', [BannersController, 'createBanner'])
  router.post('/create-article', [ArticlesController, 'createArticle'])
  router.post('/create-service', [ThriveInServicesController, 'createService'])
  router.post('/create-item-service', [ThriveInServicesController, 'createItemService'])
})
