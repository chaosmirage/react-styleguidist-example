module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
	components: './lib/components/**/[A-Z]*.js',
	ignore: [
    './lib/components/Button/index.js',
    './lib/components/Button/Button.js'
  ],
	webpackConfig: {
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader?modules&importLoaders=1',
				}
			]
		}
	},
};
