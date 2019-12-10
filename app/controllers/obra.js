const models = require('../../models');

module.exports.index = function (resposta) {
  models.obra.findAll({
    include: {
      attributes: ['eng_nome'],
      required: true,
      model: models.engenheiro
    }
  }).then(function (obras) {
    resposta.render('obra', { obras: obras });

  });
}

module.exports.novo = function (resposta) {
  resposta.render('obra/novo');
}

module.exports.alterar = function (requisicao, resposta) {
  var id_obra = requisicao.query.id;
  models.obra.findByPk(id_obra).then((obra) => {
    models.engenheiro.findAll().then((engenheiros) => {
      obra.engenheiros = engenheiros;
      resposta.render('obra/alterar', { obra: obra });
    });
  }).catch(err => console.log(err));
}

module.exports.detalhe = function (requisicao, resposta) {
  var id_obra = requisicao.query.id;
  var obra = models.obra.findByPk(id_obra)
  models.obra.findByPk(id_obra).then(
    obra => {
      resposta.render('obra/detalhe', { obra: obra });
    }
  ).catch(err => console.log(err));
}

module.exports.excluir = function (requisicao, resposta) {
  models.obra.destroy({
    where: {
      id: requisicao.query.id
    }
  }).then(function () {
    resposta.redirect('/obra');
  }).catch(err => console.log(err));
}

module.exports.cadastrarObra = function (requisicao, resposta) {
  var formulario = requisicao.body;
  models.obra.create(formulario).then(function () {
    resposta.redirect('/obra');
  }).catch(err => console.log(err));
}

module.exports.atualizarObra = function (requisicao, resposta) {

  var formulario = requisicao.body;
  console.log(formulario);
  models.obra.update(formulario, {
    where: { id: formulario.id }
  })
  resposta.redirect('/obra');
}