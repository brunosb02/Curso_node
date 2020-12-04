module.exports.noticias = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result){
        res.render('noticias/noticias', { noticias : result });
    });
}

module.exports.noticia = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    var id = req.query;
    console.log(id)

    console.log(id.id_noticia)

    noticiasModel.getNoticia(id, function(error, result){
        res.render('noticias/noticia', { noticia : result });
    });
}
