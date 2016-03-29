var elixir = require('laravel-elixir');

elixir.config.assetsPath = "src/client"
elixir.config.publicPath="dist";

elixir(function(mix){
	var nodemodules = "node_modules/";
	var bower = "bower_components/";
	var sourceJs = "src/client/js/";
	var sourceCss = "src/client/css/";

	var distFile = "dist/";

	mix
		.copy(bower + 'bootstrap/dist/js/bootstrap.min.js', sourceJs + 'bootstrap.min.js')
        .copy(bower + 'jquery/dist/jquery.min.js', sourceJs + 'jquery.min.js')
        // css
        .copy(bower + 'bootstrap/dist/css/bootstrap.min.css', sourceCss + 'bootstrap.min.css')
        .copy(bower + 'font-awesome/css/font-awesome.min.css', sourceCss + 'font-awesome.min.css')
        
        .copy(bower + 'font-awesome/fonts', distFile + '/fonts/font-awesome')

		.styles([
			'bootstrap.min.css',
            'font-awesome.min.css',
            'theme.css',
            'animate.css',
            'style.css',
		],'dist/css/common.min.css')
})