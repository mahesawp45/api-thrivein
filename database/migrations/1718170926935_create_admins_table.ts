import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'admins'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('user_id').notNullable()
      table.string('admin_name').notNullable()
      table.boolean('is_admin').defaultTo(true)
      table.string('password').notNullable()
      table.string('token').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
