import Order from '#models/order'
import ThriveInService from '#models/thrive_in_service'
import OrderRequest from '#models/request/order_request'
import { DateTime } from 'luxon'
import { randomUUID } from 'node:crypto'
import ItemService from '#models/item_service'
import User from '#models/user'

export default class OrderService {
  getOrder = async (service_id: number): Promise<any> => {
    try {
      const items: ItemService[] | null = await ItemService.query().where('service_id', service_id)

      let totalOrder = 0

      items.map((item) => {
        totalOrder += item.price
      })

      const orderData = {
        item: items,
        totalOrder: totalOrder,
      }

      return orderData
    } catch (error) {
      console.log('====================================')
      console.log('ERROR ORDER -> ', error)
      console.log('====================================')
      throw error
    }
  }

  orderNow = async (order_request: OrderRequest): Promise<Order> => {
    try {
      const service: ThriveInService | null = await ThriveInService.findBy(
        'service_id',
        order_request.service_id
      )

      const rand = `${new Date().getMilliseconds()}-${randomUUID()}`

      const user = await User.findBy('user_id', 1)

      const orderData = {
        title: service?.title ?? '-',
        payment_method: order_request.payment_method,
        total_order: order_request.total_order,
        discount: order_request.discount,
        total_pay: order_request.total_pay,
        is_order_now: true,
        address: user?.address,
        status: 'baru',
        user_id: user?.user_id,
        service_id: order_request.service_id,
        name: user?.name,
        invoice: `INV-${rand}`,
      }

      const order: Order = await Order.create({
        address: orderData.address,
        discount: orderData.discount,
        invoice: orderData.invoice,
        is_order_now: orderData.is_order_now,
        total_order: orderData.total_order,
        name: orderData.name,
        payment_method: orderData.payment_method,
        service_id: orderData.service_id,
        status: orderData.status,
        title: orderData.title,
        total_pay: orderData.total_pay,
        user_id: orderData.user_id,
      })

      return order
    } catch (error) {
      console.log('====================================')
      console.log('ERROR ORDER -> ', error)
      console.log('====================================')
      throw error
    }
  }
}
