import { DateTime } from 'luxon'
import { withAuthFinder } from '@adonisjs/auth'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'
import { BaseModel, beforeSave, column } from '@adonisjs/lucid/orm'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['admin_name'],
  passwordColumnName: 'password',
})

export default class Admin extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare user_id: number

  @column()
  declare admin_name: string

  @column()
  declare is_admin: boolean

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare token?: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  static accessTokens = DbAccessTokensProvider.forModel(Admin, {
    expiresIn: '120 days',
    prefix: 'oat_',
    table: 'auth_admin_access_tokens',
    type: 'auth_token',
    tokenSecretLength: 40,
  })

  @beforeSave()
  static async hashPassword(admin: Admin) {
    if (admin.$dirty.password) {
      admin.password = await hash.make(admin.password)
    }
  }
}
