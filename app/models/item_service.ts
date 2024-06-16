import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ItemService extends BaseModel {
  @column({ isPrimary: true })
  declare item_id: number

  @column()
  declare image_url: string

  @column()
  declare price: number

  @column()
  declare qty: number

  @column()
  declare service_id: number

  @column()
  declare title: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
