module.exports = function(aplicacao){
    aplicacao.get('/engenheiro', function(requisicao, resposta){
        if(requisicao.session.autenticado)
             aplicacao.app.controllers.engenheiro.index(resposta);
        else
          resposta.redirect('/login');
    });

    aplicacao.get('/novoengenheiro', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.engenheiro.novo(resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.get('/alterarengenheiro', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.engenheiro.alterar(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.get('/detalheengenheiro', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.engenheiro.detalhe(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.get('/excluirengenheiro', function(requisicao, resposta){
       if(requisicao.session.autenticado)
            aplicacao.app.controllers.engenheiro.excluir(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.post('/cadastrarEngenheiro', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.engenheiro.cadastrarEngenheiro(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

    aplicacao.post('/atualizarEngenheiro', function(requisicao, resposta){
        if(requisicao.session.autenticado)
            aplicacao.app.controllers.engenheiro.atualizarEngenheiro(requisicao, resposta);
        else
            resposta.redirect('/login');
    });

}