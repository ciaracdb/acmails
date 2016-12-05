/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    System.config({
        defaultJSExtensions: true,
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': 'app',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
            // other libraries
            'rxjs': 'npm:rxjs',
            'forge': 'npm:node-forge/js',

            'emailjs-tcp-socket-tls': 'npm:emailjs-tcp-socket/src/emailjs-tcp-socket-tls.js',
            'emailjs-tcp-socket': 'npm:emailjs-tcp-socket/src/emailjs-tcp-socket.js',

            'emailjs-stringencoding': 'npm:/emailjs-stringencoding/src/emailjs-stringencoding.js',

            'emailjs-imap-client': 'npm:emailjs-imap-client/src/emailjs-imap-client.js',
            'emailjs-imap-client-compression': 'npm:emailjs-imap-client/src/emailjs-imap-client-compression.js',
            'emailjs-imap-client-compression-worker': 'npm:emailjs-imap-client/src/emailjs-imap-client-compression-worker.js',
            'emailjs-imap-client-imap': 'npm:emailjs-imap-client/src/emailjs-imap-client-imap.js',
            'emailjs-imap-client-pako': 'npm:emailjs-imap-client/src/emailjs-imap-client-pako.js',

            'emailjs-smtp-client': 'npm:emailjs-smtp-client/src/emailjs-smtp-client.js',
            'emailjs-smtp-client-response-parser': 'npm:emailjs-smtp-client/src/emailjs-smtp-client-response-parser.js',

            'emailjs-addressparser': 'npm:emailjs-addressparser/src/emailjs-addressparser.js',

            'emailjs-imap-handler': 'npm:emailjs-imap-handler/src/emailjs-imap-handler.js',
            'emailjs-imap-compiler': 'npm:emailjs-imap-handler/src/emailjs-imap-compiler.js',
            'emailjs-imap-parser': 'npm:emailjs-imap-handler/src/emailjs-imap-parser.js',
            'emailjs-imap-formal-syntax': 'npm:emailjs-imap-handler/src/emailjs-imap-formal-syntax.js',

            'emailjs-utf7': 'npm:emailjs-utf7/src/emailjs-utf7.js',

            'emailjs-mime-codec': 'npm:emailjs-mime-codec/src/emailjs-mime-codec.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            forge: {
                main: './forge.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);

System.import('app').catch(function(err) {
    console.error(err);
});