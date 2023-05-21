import { BuildOptions } from './types/config';
import webpack from 'webpack';
import path from 'path';
import { buildResolvers } from './buildResolvers';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { paths, mode } = options;
	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolvers(),
	};
}