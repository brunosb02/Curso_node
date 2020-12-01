<html lang="pt-br">
	<head>
		<meta charset="UTF-8">

		<title>Portal de notícias</title>
		
		<!-- JQuery -->
		<script src="js/jquery-2.2.1.js"></script>

		<!-- bootstrap - link cdn -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	
		<!-- incluindo css -->
		<link href="css/style.css" rel="stylesheet">

		<!-- favicon -->
		<link rel="shortcut icon" href="images/favicon.ico" />
	</head>

	<body>

		<nav class="navbar navbar-default navbar-static-top">
			<div class="container">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					
					<img src="images/logo.png" />
				</div>

				<div id="navbar" class="navbar-collapse collapse">
					<ul class="nav navbar-nav navbar-right">
						<li><a href="index.html">HOME</a></li>
					</ul>
				</div>
			</div>
		</nav>


	    <div class="container">
	    	<div class="row">
	    		<div class="col-md-8">
	    			<div class="noticia_wrapper">
		    			<span class="noticia_autor"> <%= noticia[0].autor   %></span>
		    			<a href="noticia.html" class="noticia_titulo"> <%= noticia[0].titulo   %></a>
		    			<span class="noticia_data"> <%= noticia[0].data_noticia   %></span>
		    			<br />
		    			<p class="noticia_resumo">
		    				Aqui fica o resumo da notícia principal da página com um limite de 100 caracteres!
		    			</p>
		    		</div>
		    	</div>

	    		<div class="col-md-4">
	    			<div class="noticia_wrapper">
		    			<span class="noticia_autor">Por Jorge</span>
		    			<a href="noticia.html" class="noticia_titulo">Título da notícia</a>
		    			<span class="noticia_data">07/09/2016</span>

		    			<br />
		    			<p class="noticia_resumo">
		    				Aqui fica o resumo da notícia com um limite de 100 caracteres!
		    			</p>
		    		</div>
		    	</div>
	    	</div>

	    	<div class="row">
	    		<div class="col-md-4">
	    			<div class="noticia_wrapper">
		    			<span class="noticia_autor">Por Jorge</span>
		    			<a href="noticia.html" class="noticia_titulo">Título da notícia</a>
		    			<span class="noticia_data">07/09/2016</span>
		    			<br />
		    			<p class="noticia_resumo">
		    				Aqui fica o resumo da notícia com um limite de 100 caracteres!
		    			</p>
		    		</div>
		    	</div>

	    		<div class="col-md-4">
	    			<div class="noticia_wrapper">
		    			<span class="noticia_autor">Por Jorge</span>
		    			<a href="noticia.html" class="noticia_titulo">Título da notícia</a>
		    			<span class="noticia_data">07/09/2016</span>

		    			<br />
		    			<p class="noticia_resumo">
		    				Aqui fica o resumo da notícia com um limite de 100 caracteres!
		    			</p>
		    		</div>
		    	</div>

	    		<div class="col-md-4">
	    			<div class="noticia_wrapper">
		    			<span class="noticia_autor">Por Jorge</span>
		    			<a href="noticia.html" class="noticia_titulo">Título da notícia</a>
		    			<span class="noticia_data">07/09/2016</span>

		    			<br />
		    			<p class="noticia_resumo">
							<%= noticia[0].resumo   %>
		    			</p>
		    		</div>
		    	</div>
	    	</div>

	    	<div class="row ver_mais">
	    		<button type="button" class="btn btn-default"><a href="noticias.html">Ver todas as notícias</a></button>
	    	</div>

	    </div>
	
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
	
	</body>
</html>
