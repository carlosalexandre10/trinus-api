'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArquivosSchema extends Schema {
  up() {
    this.create('arquivos', (table) => {
      table.increments()
      table.integer('usuario_id').unsigned().references('id').inTable('usuarios')
      table.string('nome', 255).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('arquivos')
  }
}

module.exports = ArquivosSchema
