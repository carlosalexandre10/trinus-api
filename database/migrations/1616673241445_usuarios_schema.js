'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuariosSchema extends Schema {
  up() {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('nome', 100).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('senha', 60).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('usuarios')
  }
}

module.exports = UsuariosSchema
