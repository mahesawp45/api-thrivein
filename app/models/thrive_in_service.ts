import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ThriveInService extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare service_id: string

  @column()
  declare title: string

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
