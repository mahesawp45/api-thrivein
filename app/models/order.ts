import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  declare order_id: number

  @column()
  declare address: string

  @column()
  declare service_id: number

  @column()
  declare discount: number

  @column()
  declare is_order_now: boolean

  @column()
  declare payment_method: string

  @column()
  declare status: string

  @column()
  declare title: string

  @column()
  declare total_order: number

  @column()
  declare total_pay: number

  @column()
  declare transaction_date: DateTime

  @column()
  declare user_id: number

  @column()
  declare name: string

  @column()
  declare invoice: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
