import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('order_id').notNullable()
      table.integer('service_id').notNullable()
      table.integer('user_id').notNullable()
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
      table.timestamp('transaction_date', { useTz: true }).nullable().defaultTo(this.now())
      table.timestamp('created_at', { useTz: true }).nullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).nullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
