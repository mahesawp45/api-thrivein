// import type { HttpContext } from '@adonisjs/core/http'

import OrderRequest from '#models/request/order_request'
import OrderService from '#services/order_service'
import { HttpContext } from '@adonisjs/core/http'

export default class OrdersController {
  constructor(protected orderService: OrderService) {}

  orderNow = ({ request }: HttpContext) => {
    const data = this.orderService.orderNow(request.body() as OrderRequest)
    return data
  }
}
