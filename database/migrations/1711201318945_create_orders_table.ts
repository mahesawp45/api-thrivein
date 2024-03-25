import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('order_id').notNullable()
      table.string('service_id').notNullable()
      table.string('user_id').notNullable()
      table.string('name').notNullable()
      table.string('invoice').notNullable()
      table.string('address').notNullable()
      table.integer('discount').nullable()
      table.boolean('is_order_now').notNullable()
      table.string('payment_method').notNullable()
      table.string('status').notNullable()
      table.string('title').notNullable()
      table.integer('total_order').notNullable()
      table.integer('total_pay').notNullable()
      table.dateTime('transaction_date').notNullable()
      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
