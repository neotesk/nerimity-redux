const { build }       = require( "esbuild" );
const { solidPlugin } = require( "esbuild-plugin-solid" );
const { sassPlugin }  = require( "esbuild-sass-plugin" );

build( {
    entryPoints: [ "App.jsx" ],
    bundle: true,
    outfile: "dist/nerimity.app.js",
    minify: true,
    loader: {
        ".svg": "dataurl",
    },
    logLevel: "info",
    plugins: [
        solidPlugin(),
        sassPlugin( {
            filter: /\.mo\.scss$/,
            type: 'local-css'
        } ),
        sassPlugin( {
            filter: /\.scss$/,
            type: 'css'
        } )
    ],
} ).catch( () => process.exit( 1 ) );