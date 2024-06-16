// import type { HttpContext } from '@adonisjs/core/http'

import OrderService from '#services/order_service'
import { HttpContext } from '@adonisjs/core/http'

export default class OrdersController {
  constructor(protected orderService: OrderService) {}

  getOrder = async ({ response, params }: HttpContext) => {
    try {
      const order = await this.orderService.getOrder(params.service_id)
      return response.status(200).json({ order })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  orderNow = async ({ request, response }: HttpContext) => {
    try {
      const item = await this.orderService.orderNow(request.body() as any)
      return response.status(201).json(item)
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
}
