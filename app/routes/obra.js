module.exports = function(aplicacao){
    aplicacao.get('/obra', function(requisicao, resposta){
        if(requisicao.session.autenticado)
             aplicacao.app.controllers.obra.index(resposta);
        else
          resposta.redirect('/login');
    });

    aplicacao.get('/novoobra', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.obra.novo(resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.get('/alterarobra', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.obra.alterar(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.get('/detalheobra', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.obra.detalhe(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.get('/excluirobra', function(requisicao, resposta){
       if(requisicao.session.autenticado)
            aplicacao.app.controllers.obra.excluir(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.post('/cadastrarObra', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.obra.cadastrarObra(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.post('/atualizarObra', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.obra.atualizarObra(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

}