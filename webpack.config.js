const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");
const { extendDefaultPlugins } = require("svgo");

const { loader } = require('mini-css-extract-plugin')

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const dirApp = path.join(__dirname, 'app')
const dirShared = path.join(__dirname, 'shared')
const dirStyles = path.join(__dirname, 'styles')
const dirNode = 'node_modules'

module.exports = {
  entry: [        
      path.join(dirApp, 'index.js'),
      path.join(dirStyles, 'index.scss')
  ],

  resolve: {
      alias : {
          dirApp,
          dirShared,
          dirStyles,
          dirNode
      }
  },

  plugins: [
      new webpack.DefinePlugin({
          IS_DEVELOPMENT
      }),

      new CopyWebpackPlugin({
          patterns: [
              {
                  from: './shared',
                  to:''
              }
          ]
      }),

      new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css'
      })
  ],

  module: {
      rules: [
          {
              test: /\.js$/,
              use: {
                  loader: 'babel-loader'
              }
          }, 
          
          {
              test: /\.scss$/,
              use: [
                  {
                      loader : MiniCssExtractPlugin.loader,
                      options: {
                          publicPath:''                         
                      }                        
                  },
                  {
                      loader: 'css-loader'
                  }, 
                  {                        
                      loader: 'postcss-loader',
                  },
                  {                        
                      loader: 'sass-loader',
                  },                
              ]       
          },
          {
              test: /\.(jpe?g|png|gif|svg|woff2?|fnt|webp)$/,
              loader: 'file-loader',
              options: {
                  name (file) {
                      return '[hash].[ext]'
                  }
              }                    
          },

          {
            test: /\.(jpe?g|png|gif|svg|webp)$/i,
            use: [
              {
                loader: ImageMinimizerPlugin.loader,
                options: {
                  minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                      plugins: [
                        "imagemin-gifsicle",
                        "imagemin-svgo",
                      ],
                    },
                  },
                },
              },
            ],
          },

          {
            test:/\.(glsl|frag|vert)$/i,
            loader: 'raw-loader',
            exclude:/node_modules/
          },  

          {
            test:/\.(glsl|frag|vert)$/i,
            loader:'glslify-loader',
            exclude:/node_modules/
          }
      ]
  },

  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              // Svgo configuration here https://github.com/svg/svgo#configuration
              [
                "svgo",
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      // customize options
                      builtinPluginName: {
                        optionName: 'optionValue',
                      },
                      // or disable plugins
                      anotherBuiltinPlugin: false,
                    },
                  },
                },
              ],
            ],
          },
        },
      }),
    ],
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}