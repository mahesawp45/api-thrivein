import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare address: string

  @column()
  declare service_id: string

  @column()
  declare discount: number

  @column()
  declare is_order_now: boolean

  @column()
  declare order_id: string

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
  declare user_id: string

  @column()
  declare name: string

  @column()
  declare invoice: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
