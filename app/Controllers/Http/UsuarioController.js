'use strict'

const Usuario = use('App/Models/Usuario.js')

class UsuarioController {

  async logar({ request, auth }) {
    const { email, senha } = request.all();

    const token = await auth.attempt(email, senha);
    const usuario = await Usuario.findByOrFail('email', email)

    return { token, usuario };
  }

  async incluir({ request }) {
    const dadosParaInclusao = request.only(['nome', 'email', 'senha']);

    return await Usuario.create(dadosParaInclusao);
  }
}

module.exports = UsuarioController
