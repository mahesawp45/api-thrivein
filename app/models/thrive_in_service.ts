import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ThriveInService extends BaseModel {
  @column({ isPrimary: true })
  declare service_id: number

  @column()
  declare title: string

  @column()
  declare price: number

  @column()
  declare description: string

  @column()
  declare icon_url: string

  @column()
  declare category: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
