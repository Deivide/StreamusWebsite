﻿/*jslint node: true*/
//	Options:
//    * grunt: Lint JavaScript and LESS
//    * grunt build: Build a release
'use strict';
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        //	Read project settings from package.json in order to be able to reference the properties with grunt.
        pkg: grunt.file.readJSON('package.json'),
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true
                },
                expand: true,
                cwd: 'dist',
                dest: 'dist/',
                src: ['**/*.html', '!**/template/**']
            }
        },
        //  Compress image sizes and move to dist folder
        imagemin: {
            files: {
                expand: true,
                cwd: 'dist/img',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'dist/img'
            }
        },
        //  Improve code quality by applying a code-quality check with jshint
        jshint: {
            //  A full list of options and their defaults here: https://github.com/jshint/jshint/blob/master/examples/.jshintrc
            options: {
                camelcase: true,
                immed: true,
                latedef: true,
                newcap: true,
                nonew: true,
                quotmark: 'single',
                jquery: true,
                maxparams: 5,
                maxdepth: 4,
                maxstatements: 15,
                maxcomplexity: 5,
                maxlen: 200,
                //	Don't validate third-party libraries
                ignores: ['src/js/thirdParty/**/*.js']
            },

            files: ['src/js/**/*.js']
        },
        //  Ensure LESS code-quality by comparing it against Twitter's ruleset.
        //  Using a slightly modified version which has support for modern browser properties
        recess: {
            index: {
                src: 'src/less/index.less'
            }
        },
        requirejs: {
            production: {
                //  All r.js options can be found here: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    appDir: 'src',
                    mainConfigFile: 'src/js/main.js',
                    paths: {
                        //  Paths fallbacks not supported in r.js so stub them with their fallbacks.
                        backbone: 'thirdParty/backbone',
                        'backbone.marionette': 'thirdParty/backbone.marionette',
                        bootstrap: 'thirdParty/bootstrap',
                        jquery: 'thirdParty/jquery',
                        'jquery.browser': 'thirdParty/jquery.browser',
                        'jquery.unveil': 'thirdParty/jquery.unveil',
                        lodash: 'thirdParty/lodash',
                        text: 'thirdParty/text'
                    },
                    dir: 'dist',
                    optimize: 'uglify2',
                    //  Skip optimizing CSS here because it is handled when building LESS
                    optimizeCss: 'none',
                    //  Inlines the text for any text! dependencies, to avoid the separate
                    //  async XMLHttpRequest calls to load those dependencies.
                    inlineText: true,
                    useStrict: true,
                    stubModules: ['text'],
                    findNestedDependencies: true,
                    //  List the modules that will be optimized. All their immediate and deep
                    //  dependencies will be included in the module's file when the build is done
                    modules: [{
                        name: 'main'
                    }],
                    //  Don't leave a copy of the file if it has been concatenated into a larger one.
                    removeCombined: true,
                    fileExclusionRegExp: /vsdoc.js$|.less$|.css$/,
                    preserveLicenseComments: false
                }
            }
        },
        //  Compile LESS to minified CSS
        less: {
            options: {
                compress: true,
                strictImports: true,
                strictMath: true,
                strictUnits: true
            },

            files: {
                expand: true,
                cwd: 'src/less',
                src: 'index.less',
                dest: 'src/css',
                ext: '.min.css'
            }
        },
        watch: {
            less: {
                options: {
                    nospawn: true
                },
                files: ['src/less/*'],
                tasks: ['less']
            }
        },
        clean: {
            //  Cleanup the dist folder of files which don't need to be pushed to production.
            dist: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: ['template', 'build.txt']
                }]
            }
        },
        
        useminPrepare: {
            html: 'dist/index.html',
            options: {
                flow: {
                    html: {
                        steps: {
                            css: ['concat']
                        },
                        post: {}
                    }
                }
            }
        },
        usemin: {
            html: 'dist/index.html'
        },
        replace: {
            //  Ensure that the localDebug flag is not set to true when building a release.
            localDebug: {
                src: ['dist/js/main.min.js'],
                overwrite: true,
                replacements: [{
                    //	Find the line that looks like: "localDebug:!0" and set it to !1. Local debugging is for development only.
                    from: 'localDebug:!0',
                    to: 'localDebug:!1'
                }]
            },
            mainReferences: {
                src: ['dist/index.html', 'dist/js/main.min.js'],
                overwrite: true,
                replacements: [{
                    from: 'data-main=js/main',
                    to: 'data-main=js/main.min'
                }, {
                    from: 'define("main"',
                    to: 'define("main.min"'
                }]
            }
        },
        //  Rename main.js to main.min.js since it has been minified by r.js
        rename: {
            main: {
                src: ['dist/js/main.js'],
                dest: ['dist/js/main.min.js']
            }
        },

        'sftp-deploy': {
            build: {
                auth: {
                    host: 's01.lumoushosting.com',
                    port: 2232,
                    authKey: 'key1'
                },
                cache: 'sftpCache.json',
                src: 'dist',
                dest: '/home/stream12/public_html',
                concurrency: 4,
                progress: true
            }
        }
    });

    grunt.registerTask('default', 'An alias task for running tests.', ['test']);

    grunt.registerTask('test', 'Run tests and code-quality analysis', ['jshint', 'recess']);

    grunt.registerTask('build', ['test', 'requirejs', 'less', 'useminPrepare', 'concat:generated', 'usemin', 'htmlmin', 'imagemin', 'rename:main', 'replace:mainReferences', 'replace:localDebug', 'clean:dist']);

    grunt.registerTask('deploy', ['sftp-deploy']);
};