import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ThriveInPorfolioService extends BaseModel {
  @column({ isPrimary: true })
  declare service_id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare imageUrl: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
