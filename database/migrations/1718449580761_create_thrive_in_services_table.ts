import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'thrive_in_services'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('service_id').notNullable()
      table.string('title').notNullable()
      table.integer('price').notNullable()
      table.string('description').notNullable()
      table.string('category').notNullable()
      table.string('icon_url').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
