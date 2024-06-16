import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'item_services'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('item_id').notNullable()
      table.string('image_url').notNullable()
      table.integer('price').notNullable()
      table.integer('qty').notNullable()
      table.integer('service_id').notNullable()
      table.string('title').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
