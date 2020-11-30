module.exports = function(app) {
	
	app.get('/noticias', function(req, res){
		app.app.controllers.noticia.noticias(app,req,res)
	});
	app.get('/noticia', function(req, res){
		app.app.controllers.noticia.noticias(app,req,res)
	
	});


};
