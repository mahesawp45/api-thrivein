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
