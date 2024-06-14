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
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/banners', [BannersController, 'getAllBanner'])

router.group(() => {
  router.get('/services', [ThriveInServicesController, 'getAllServiceCategory'])
  router.get('/list-services/:category', [ThriveInServicesController, 'getAllServicesByCategory'])
  router.get('/detail-services/:service_id', [ThriveInServicesController, 'getServiceById'])
  router.get('/detail-services/:service_id/portfolio', [
    ThriveInServicesController,
    'getAllServicePorfolio',
  ])
})

router.group(() => {
  router.post('/order-now', [OrdersController, 'orderNow'])
})

// Admin
router.group(() => {
  router.post('/register-admin', [AuthController, 'registerAdmin'])
  router.post('/login-admin', [AuthController, 'loginAdmin'])
})

router.group(() => {
  router.post('/create-category', [ThriveInServicesController, 'createServiceCategory'])
})
