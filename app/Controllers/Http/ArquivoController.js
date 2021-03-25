'use strict'

const Helpers = use('Helpers')
const Arquivo = use('App/Models/Arquivo.js')

class ArquivoController {
  async incluir({ request, auth }) {
    const file = request.file('arquivo')
    const usuarioLogado = await auth.getUser();

    const fileName = `${new Date().getTime()}_${file.clientName}`
    await file.move(Helpers.tmpPath('temp'), { name: fileName })

    if (!file.moved()) {
      return file.errors()
    }

    const arquivo = { nome: `${fileName}`, usuario_id: usuarioLogado.id };

    return await Arquivo.create(arquivo);
  }

  async listar() {
    return await Arquivo.all();
  }
}

module.exports = ArquivoController
