SystemJS.config({
    transpiler: "plugin-babel",
    babelOptions: {
        "moduleName": true
    },
    meta: {
        "*.css": {
            "loader": "jspm/css.js"
        },
        "*.trait": {
            "loader": "jspm/trait.js"
        },
        "*.hbs": {
            "loader": "hbs"
        }
    },
    packages: {}
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "backbone.radio": "npm:backbone.radio@1.0.4",
        "marionette": "npm:backbone.marionette@3.0.0-pre.2",
        "postcss-color-function": "npm:postcss-color-function@2.0.1",
        "postcss-conditionals": "npm:postcss-conditionals@2.0.2",
        "jspm-loader-css": "github:MeoMix/jspm-loader-css@master",
        "postcss-import": "github:MeoMix/postcss-import@master",
        "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
        "autoprefixer": "npm:autoprefixer@6.3.4",
        "babel-runtime": "npm:babel-runtime@5.8.35",
        "backbone": "npm:backbone@1.2.3",
        "backbone.base-router": "npm:backbone.base-router@1.3.0",
        "backbone.intercept": "npm:backbone.intercept@0.4.2",
        "backbone.syphon": "npm:backbone.syphon@0.6.3",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
        "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
        "core-js": "npm:core-js@1.2.6",
        "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
        "events": "github:jspm/nodelibs-events@0.2.0-alpha",
        "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
        "handlebars": "github:components/handlebars.js@4.0.5",
        "hbs": "github:davis/plugin-hbs@1.2.1",
        "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
        "jquery": "github:components/jquery@2.2.1",
        "jquery.browser": "npm:jquery.browser@0.1.0",
        "lodash": "npm:lodash@3.10.1",
        "module": "github:jspm/nodelibs-module@0.2.0-alpha",
        "net": "github:jspm/nodelibs-net@0.2.0-alpha",
        "os": "github:jspm/nodelibs-os@0.2.0-alpha",
        "path": "github:jspm/nodelibs-path@0.2.0-alpha",
        "plugin-babel": "npm:systemjs-plugin-babel@0.0.2",
        "postcss": "npm:postcss@5.0.19",
        "postcss-inline-trait": "npm:postcss-inline-trait@0.2.0",
        "postcss-mixin-from": "npm:postcss-mixin-from@0.5.4",
        "postcss-mixins": "npm:postcss-mixins@4.0.1",
        "postcss-nesting": "npm:postcss-nesting@2.3.0",
        "postcss-url": "npm:postcss-url@5.1.1",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
        "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
        "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
        "text": "github:systemjs/plugin-text@0.0.7",
        "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
        "uglify-js": "npm:uglify-js@2.3.6",
        "url": "github:jspm/nodelibs-url@0.2.0-alpha",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha",
        "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
        "webcomponents.js": "npm:webcomponents.js@0.7.21"
    },
    packages: {
        "github:MeoMix/jspm-loader-css@master": {
            "map": {
                "css-modules-loader-core": "npm:css-modules-loader-core@1.0.0",
                "node-cssnano": "npm:cssnano@3.5.2"
            }
        },
        "github:MeoMix/postcss-import@master": {
            "map": {
                "object-assign": "npm:object-assign@4.0.1",
                "postcss": "npm:postcss@5.0.19",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
                "read-cache": "npm:read-cache@1.0.0",
                "resolve": "npm:resolve@1.1.7"
            }
        },
        "github:davis/plugin-hbs@1.2.1": {
            "map": {
                "handlebars": "github:components/handlebars.js@4.0.5"
            }
        },
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.5.0"
            }
        },
        "github:jspm/nodelibs-crypto@0.2.0-alpha": {
            "map": {
                "crypto-browserify": "npm:crypto-browserify@3.11.0"
            }
        },
        "github:jspm/nodelibs-os@0.2.0-alpha": {
            "map": {
                "os-browserify": "npm:os-browserify@0.2.0"
            }
        },
        "github:jspm/nodelibs-punycode@0.2.0-alpha": {
            "map": {
                "punycode-browserify": "npm:punycode@1.3.2"
            }
        },
        "github:jspm/nodelibs-stream@0.2.0-alpha": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
            "map": {
                "string_decoder-browserify": "npm:string_decoder@0.10.31"
            }
        },
        "github:jspm/nodelibs-url@0.2.0-alpha": {
            "map": {
                "url-browserify": "npm:url@0.11.0"
            }
        },
        "npm:amdefine@1.0.0": {
            "map": {}
        },
        "npm:ansi-styles@2.2.0": {
            "map": {
                "color-convert": "npm:color-convert@1.0.0"
            }
        },
        "npm:argparse@1.0.7": {
            "map": {
                "sprintf-js": "npm:sprintf-js@1.0.3"
            }
        },
        "npm:array-union@1.0.1": {
            "map": {
                "array-uniq": "npm:array-uniq@1.0.2"
            }
        },
        "npm:asn1.js@4.5.1": {
            "map": {
                "bn.js": "npm:bn.js@4.10.5",
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:async@0.2.10": {
            "map": {}
        },
        "npm:autoprefixer@6.3.4": {
            "map": {
                "browserslist": "npm:browserslist@1.3.0",
                "caniuse-db": "npm:caniuse-db@1.0.30000435",
                "normalize-range": "npm:normalize-range@0.1.2",
                "num2fraction": "npm:num2fraction@1.2.2",
                "postcss": "npm:postcss@5.0.19",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
            }
        },
        "npm:babel-runtime@5.8.35": {
            "map": {}
        },
        "npm:backbone.babysitter@0.1.11": {
            "map": {
                "backbone": "npm:backbone@1.3.2",
                "underscore": "npm:underscore@1.8.3"
            }
        },
        "npm:backbone.base-router@1.3.0": {
            "map": {
                "backbone": "npm:backbone@1.2.3",
                "underscore": "npm:underscore@1.8.3"
            }
        },
        "npm:backbone.intercept@0.4.2": {
            "map": {
                "backbone": "npm:backbone@1.2.3",
                "underscore": "npm:underscore@1.8.3"
            }
        },
        "npm:backbone.marionette@3.0.0-pre.2": {
            "map": {
                "backbone": "npm:backbone@1.2.3",
                "backbone.babysitter": "npm:backbone.babysitter@0.1.11",
                "backbone.radio": "npm:backbone.radio@1.0.4",
                "underscore": "npm:underscore@1.8.3"
            }
        },
        "npm:backbone.radio@1.0.4": {
            "map": {
                "backbone": "npm:backbone@1.3.2",
                "underscore": "npm:underscore@1.8.3"
            }
        },
        "npm:backbone.syphon@0.6.3": {
            "map": {
                "backbone": "npm:backbone@1.2.3",
                "jquery": "npm:jquery@2.2.1",
                "underscore": "npm:underscore@1.8.3"
            }
        },
        "npm:backbone@1.2.3": {
            "map": {
                "underscore": "npm:underscore@1.8.3"
            }
        },
        "npm:backbone@1.3.2": {
            "map": {
                "underscore": "npm:underscore@1.8.3"
            }
        },
        "npm:balanced-match@0.3.0": {
            "map": {}
        },
        "npm:brace-expansion@1.1.3": {
            "map": {
                "balanced-match": "npm:balanced-match@0.3.0",
                "concat-map": "npm:concat-map@0.0.1"
            }
        },
        "npm:browserify-aes@1.0.6": {
            "map": {
                "buffer-xor": "npm:buffer-xor@1.0.3",
                "cipher-base": "npm:cipher-base@1.0.2",
                "create-hash": "npm:create-hash@1.1.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:browserify-cipher@1.0.0": {
            "map": {
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "browserify-des": "npm:browserify-des@1.0.0",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
            }
        },
        "npm:browserify-des@1.0.0": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.2",
                "des.js": "npm:des.js@1.0.0",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:browserify-rsa@4.0.1": {
            "map": {
                "bn.js": "npm:bn.js@4.10.5",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:browserify-sign@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.10.5",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "elliptic": "npm:elliptic@6.2.3",
                "inherits": "npm:inherits@2.0.1",
                "parse-asn1": "npm:parse-asn1@5.0.0"
            }
        },
        "npm:browserslist@1.3.0": {
            "map": {
                "caniuse-db": "npm:caniuse-db@1.0.30000435"
            }
        },
        "npm:buffer-xor@1.0.3": {
            "map": {}
        },
        "npm:buffer@4.5.0": {
            "map": {
                "base64-js": "npm:base64-js@1.1.1",
                "ieee754": "npm:ieee754@1.1.6",
                "isarray": "npm:isarray@1.0.0"
            }
        },
        "npm:chalk@1.1.1": {
            "map": {
                "ansi-styles": "npm:ansi-styles@2.2.0",
                "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
                "has-ansi": "npm:has-ansi@2.0.0",
                "strip-ansi": "npm:strip-ansi@3.0.1",
                "supports-color": "npm:supports-color@2.0.0"
            }
        },
        "npm:cipher-base@1.0.2": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:clap@1.1.0": {
            "map": {
                "chalk": "npm:chalk@1.1.1"
            }
        },
        "npm:coa@1.0.1": {
            "map": {
                "q": "npm:q@1.4.1"
            }
        },
        "npm:color-string@0.3.0": {
            "map": {
                "color-name": "npm:color-name@1.1.1"
            }
        },
        "npm:color@0.11.1": {
            "map": {
                "color-convert": "npm:color-convert@0.5.3",
                "color-string": "npm:color-string@0.3.0"
            }
        },
        "npm:colormin@1.1.0": {
            "map": {
                "color": "npm:color@0.11.1",
                "css-color-names": "npm:css-color-names@0.0.3"
            }
        },
        "npm:core-js@1.2.6": {
            "map": {}
        },
        "npm:core-util-is@1.0.2": {
            "map": {}
        },
        "npm:create-ecdh@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.10.5",
                "elliptic": "npm:elliptic@6.2.3"
            }
        },
        "npm:create-hash@1.1.2": {
            "map": {
                "cipher-base": "npm:cipher-base@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "ripemd160": "npm:ripemd160@1.0.1",
                "sha.js": "npm:sha.js@2.4.5"
            }
        },
        "npm:create-hmac@1.1.4": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:crypto-browserify@3.11.0": {
            "map": {
                "browserify-cipher": "npm:browserify-cipher@1.0.0",
                "browserify-sign": "npm:browserify-sign@4.0.0",
                "create-ecdh": "npm:create-ecdh@4.0.0",
                "create-hash": "npm:create-hash@1.1.2",
                "create-hmac": "npm:create-hmac@1.1.4",
                "diffie-hellman": "npm:diffie-hellman@5.0.2",
                "inherits": "npm:inherits@2.0.1",
                "pbkdf2": "npm:pbkdf2@3.0.4",
                "public-encrypt": "npm:public-encrypt@4.0.0",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:css-color-converter@1.0.2": {
            "map": {
                "color-convert": "npm:color-convert@0.5.3",
                "color-name": "npm:color-name@1.1.1"
            }
        },
        "npm:css-color-function@1.3.0": {
            "map": {
                "balanced-match": "npm:balanced-match@0.1.0",
                "color": "npm:color@0.11.1",
                "debug": "npm:debug@0.7.4",
                "rgb": "npm:rgb@0.1.0"
            }
        },
        "npm:css-modules-loader-core@1.0.0": {
            "map": {
                "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
                "postcss": "npm:postcss@5.0.10",
                "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.0.0",
                "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.0.0",
                "postcss-modules-scope": "npm:postcss-modules-scope@1.0.0",
                "postcss-modules-values": "npm:postcss-modules-values@1.1.0"
            }
        },
        "npm:css-selector-tokenizer@0.5.4": {
            "map": {
                "cssesc": "npm:cssesc@0.1.0",
                "fastparse": "npm:fastparse@1.1.1"
            }
        },
        "npm:cssnano@3.5.2": {
            "map": {
                "autoprefixer": "npm:autoprefixer@6.3.4",
                "decamelize": "npm:decamelize@1.2.0",
                "defined": "npm:defined@1.0.0",
                "indexes-of": "npm:indexes-of@1.0.1",
                "object-assign": "npm:object-assign@4.0.1",
                "postcss": "npm:postcss@5.0.19",
                "postcss-calc": "npm:postcss-calc@5.2.0",
                "postcss-colormin": "npm:postcss-colormin@2.2.0",
                "postcss-convert-values": "npm:postcss-convert-values@2.3.4",
                "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
                "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.0.1",
                "postcss-discard-empty": "npm:postcss-discard-empty@2.0.1",
                "postcss-discard-unused": "npm:postcss-discard-unused@2.2.1",
                "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.0",
                "postcss-merge-idents": "npm:postcss-merge-idents@2.1.5",
                "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.1",
                "postcss-merge-rules": "npm:postcss-merge-rules@2.0.6",
                "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.3",
                "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.1",
                "postcss-minify-params": "npm:postcss-minify-params@1.0.4",
                "postcss-minify-selectors": "npm:postcss-minify-selectors@2.0.4",
                "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.0",
                "postcss-normalize-url": "npm:postcss-normalize-url@3.0.7",
                "postcss-ordered-values": "npm:postcss-ordered-values@2.1.0",
                "postcss-reduce-idents": "npm:postcss-reduce-idents@2.3.0",
                "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.3",
                "postcss-svgo": "npm:postcss-svgo@2.1.2",
                "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
                "postcss-zindex": "npm:postcss-zindex@2.0.1"
            }
        },
        "npm:csso@1.6.4": {
            "map": {
                "clap": "npm:clap@1.1.0",
                "source-map": "npm:source-map@0.5.3"
            }
        },
        "npm:des.js@1.0.0": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
            }
        },
        "npm:diffie-hellman@5.0.2": {
            "map": {
                "bn.js": "npm:bn.js@4.10.5",
                "miller-rabin": "npm:miller-rabin@4.0.0",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:directory-encoder@0.7.2": {
            "map": {
                "fs-extra": "npm:fs-extra@0.23.1",
                "handlebars": "npm:handlebars@1.3.0",
                "img-stats": "npm:img-stats@0.5.2"
            }
        },
        "npm:elliptic@6.2.3": {
            "map": {
                "bn.js": "npm:bn.js@4.10.5",
                "brorand": "npm:brorand@1.0.5",
                "hash.js": "npm:hash.js@1.0.3",
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:evp_bytestokey@1.0.0": {
            "map": {
                "create-hash": "npm:create-hash@1.1.2"
            }
        },
        "npm:fs-extra@0.23.1": {
            "map": {
                "graceful-fs": "npm:graceful-fs@4.1.3",
                "jsonfile": "npm:jsonfile@2.2.3",
                "path-is-absolute": "npm:path-is-absolute@1.0.0",
                "rimraf": "npm:rimraf@2.5.2"
            }
        },
        "npm:glob@6.0.4": {
            "map": {
                "inflight": "npm:inflight@1.0.4",
                "inherits": "npm:inherits@2.0.1",
                "minimatch": "npm:minimatch@3.0.0",
                "once": "npm:once@1.3.3",
                "path-is-absolute": "npm:path-is-absolute@1.0.0"
            }
        },
        "npm:glob@7.0.3": {
            "map": {
                "inflight": "npm:inflight@1.0.4",
                "inherits": "npm:inherits@2.0.1",
                "minimatch": "npm:minimatch@3.0.0",
                "once": "npm:once@1.3.3",
                "path-is-absolute": "npm:path-is-absolute@1.0.0"
            }
        },
        "npm:globby@4.0.0": {
            "map": {
                "array-union": "npm:array-union@1.0.1",
                "arrify": "npm:arrify@1.0.1",
                "glob": "npm:glob@6.0.4",
                "object-assign": "npm:object-assign@4.0.1",
                "pify": "npm:pify@2.3.0",
                "pinkie-promise": "npm:pinkie-promise@2.0.0"
            }
        },
        "npm:graceful-fs@4.1.3": {
            "map": {}
        },
        "npm:handlebars@1.3.0": {
            "map": {
                "optimist": "npm:optimist@0.3.7"
            }
        },
        "npm:has-ansi@2.0.0": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.0.0"
            }
        },
        "npm:has-flag@1.0.0": {
            "map": {}
        },
        "npm:hash.js@1.0.3": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:img-stats@0.5.2": {
            "map": {
                "xmldom": "npm:xmldom@0.1.22"
            }
        },
        "npm:inflight@1.0.4": {
            "map": {
                "once": "npm:once@1.3.3",
                "wrappy": "npm:wrappy@1.0.1"
            }
        },
        "npm:inherits@2.0.1": {
            "map": {}
        },
        "npm:isarray@1.0.0": {
            "map": {}
        },
        "npm:jquery.browser@0.1.0": {
            "map": {}
        },
        "npm:js-base64@2.1.9": {
            "map": {}
        },
        "npm:js-yaml@3.5.5": {
            "map": {
                "argparse": "npm:argparse@1.0.7",
                "esprima": "npm:esprima@2.7.2"
            }
        },
        "npm:jsonfile@2.2.3": {
            "map": {}
        },
        "npm:lodash@3.10.1": {
            "map": {}
        },
        "npm:miller-rabin@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.10.5",
                "brorand": "npm:brorand@1.0.5"
            }
        },
        "npm:mime@1.3.4": {
            "map": {}
        },
        "npm:minimatch@3.0.0": {
            "map": {
                "brace-expansion": "npm:brace-expansion@1.1.3"
            }
        },
        "npm:mkdirp@0.5.1": {
            "map": {
                "minimist": "npm:minimist@0.0.8"
            }
        },
        "npm:normalize-url@1.4.1": {
            "map": {
                "object-assign": "npm:object-assign@4.0.1",
                "prepend-http": "npm:prepend-http@1.0.3",
                "query-string": "npm:query-string@3.0.3",
                "sort-keys": "npm:sort-keys@1.1.1"
            }
        },
        "npm:once@1.3.3": {
            "map": {
                "wrappy": "npm:wrappy@1.0.1"
            }
        },
        "npm:optimist@0.3.7": {
            "map": {
                "wordwrap": "npm:wordwrap@0.0.3"
            }
        },
        "npm:parse-asn1@5.0.0": {
            "map": {
                "asn1.js": "npm:asn1.js@4.5.1",
                "browserify-aes": "npm:browserify-aes@1.0.6",
                "create-hash": "npm:create-hash@1.1.2",
                "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
                "pbkdf2": "npm:pbkdf2@3.0.4"
            }
        },
        "npm:path-is-absolute@1.0.0": {
            "map": {}
        },
        "npm:pbkdf2@3.0.4": {
            "map": {
                "create-hmac": "npm:create-hmac@1.1.4"
            }
        },
        "npm:pify@2.3.0": {
            "map": {}
        },
        "npm:pinkie-promise@2.0.0": {
            "map": {
                "pinkie": "npm:pinkie@2.0.4"
            }
        },
        "npm:postcss-calc@5.2.0": {
            "map": {
                "postcss": "npm:postcss@5.0.19",
                "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
                "reduce-css-calc": "npm:reduce-css-calc@1.2.1"
            }
        },
        "npm:postcss-color-function@2.0.1": {
            "map": {
                "css-color-function": "npm:css-color-function@1.3.0",
                "postcss": "npm:postcss@5.0.19",
                "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
            }
        },
        "npm:postcss-colormin@2.2.0": {
            "map": {
                "colormin": "npm:colormin@1.1.0",
                "postcss": "npm:postcss@5.0.19",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
            }
        },
        "npm:postcss-conditionals@2.0.2": {
            "map": {
                "css-color-converter": "npm:css-color-converter@1.0.2",
                "css-unit-converter": "npm:css-unit-converter@1.0.0",
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-convert-values@2.3.4": {
            "map": {
                "postcss": "npm:postcss@5.0.19",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
            }
        },
        "npm:postcss-discard-comments@2.0.4": {
            "map": {
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-discard-duplicates@2.0.1": {
            "map": {
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-discard-empty@2.0.1": {
            "map": {
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-discard-unused@2.2.1": {
            "map": {
                "flatten": "npm:flatten@1.0.2",
                "postcss": "npm:postcss@5.0.19",
                "uniqs": "npm:uniqs@2.0.0"
            }
        },
        "npm:postcss-filter-plugins@2.0.0": {
            "map": {
                "postcss": "npm:postcss@5.0.19",
                "uniqid": "npm:uniqid@1.0.0"
            }
        },
        "npm:postcss-inline-trait@0.2.0": {
            "map": {
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-js@0.1.2": {
            "map": {
                "camelcase-css": "npm:camelcase-css@1.0.1",
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-merge-idents@2.1.5": {
            "map": {
                "has-own": "npm:has-own@1.0.0",
                "postcss": "npm:postcss@5.0.19",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
            }
        },
        "npm:postcss-merge-longhand@2.0.1": {
            "map": {
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-merge-rules@2.0.6": {
            "map": {
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-minify-font-values@1.0.3": {
            "map": {
                "object-assign": "npm:object-assign@4.0.1",
                "postcss": "npm:postcss@5.0.19",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
                "uniqs": "npm:uniqs@2.0.0"
            }
        },
        "npm:postcss-minify-gradients@1.0.1": {
            "map": {
                "postcss": "npm:postcss@5.0.19",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
            }
        },
        "npm:postcss-minify-params@1.0.4": {
            "map": {
                "alphanum-sort": "npm:alphanum-sort@1.0.2",
                "postcss": "npm:postcss@5.0.19",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
                "uniqs": "npm:uniqs@2.0.0"
            }
        },
        "npm:postcss-minify-selectors@2.0.4": {
            "map": {
                "alphanum-sort": "npm:alphanum-sort@1.0.2",
                "postcss": "npm:postcss@5.0.19",
                "postcss-selector-parser": "npm:postcss-selector-parser@1.3.3"
            }
        },
        "npm:postcss-mixin-from@0.5.4": {
            "map": {
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-mixins@4.0.1": {
            "map": {
                "globby": "npm:globby@4.0.0",
                "postcss": "npm:postcss@5.0.19",
                "postcss-js": "npm:postcss-js@0.1.2",
                "postcss-simple-vars": "npm:postcss-simple-vars@1.2.0"
            }
        },
        "npm:postcss-modules-extract-imports@1.0.0": {
            "map": {
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-modules-local-by-default@1.0.0": {
            "map": {
                "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-modules-scope@1.0.0": {
            "map": {
                "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-modules-values@1.1.0": {
            "map": {
                "icss-replace-symbols": "npm:icss-replace-symbols@1.0.2",
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-nesting@2.3.0": {
            "map": {
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-normalize-charset@1.1.0": {
            "map": {
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-normalize-url@3.0.7": {
            "map": {
                "is-absolute-url": "npm:is-absolute-url@2.0.0",
                "normalize-url": "npm:normalize-url@1.4.1",
                "postcss": "npm:postcss@5.0.19",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
            }
        },
        "npm:postcss-ordered-values@2.1.0": {
            "map": {
                "postcss": "npm:postcss@5.0.19",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
            }
        },
        "npm:postcss-reduce-idents@2.3.0": {
            "map": {
                "postcss": "npm:postcss@5.0.19",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
            }
        },
        "npm:postcss-reduce-transforms@1.0.3": {
            "map": {
                "postcss": "npm:postcss@5.0.19",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
            }
        },
        "npm:postcss-selector-parser@1.3.3": {
            "map": {
                "flatten": "npm:flatten@1.0.2",
                "indexes-of": "npm:indexes-of@1.0.1",
                "uniq": "npm:uniq@1.0.1"
            }
        },
        "npm:postcss-simple-vars@1.2.0": {
            "map": {
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-svgo@2.1.2": {
            "map": {
                "is-svg": "npm:is-svg@1.1.1",
                "postcss": "npm:postcss@5.0.19",
                "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
                "svgo": "npm:svgo@0.6.3"
            }
        },
        "npm:postcss-unique-selectors@2.0.2": {
            "map": {
                "alphanum-sort": "npm:alphanum-sort@1.0.2",
                "postcss": "npm:postcss@5.0.19",
                "uniqs": "npm:uniqs@2.0.0"
            }
        },
        "npm:postcss-url@5.1.1": {
            "map": {
                "directory-encoder": "npm:directory-encoder@0.7.2",
                "js-base64": "npm:js-base64@2.1.9",
                "mime": "npm:mime@1.3.4",
                "minimatch": "npm:minimatch@3.0.0",
                "mkdirp": "npm:mkdirp@0.5.1",
                "path-is-absolute": "npm:path-is-absolute@1.0.0",
                "postcss": "npm:postcss@5.0.19"
            }
        },
        "npm:postcss-zindex@2.0.1": {
            "map": {
                "postcss": "npm:postcss@5.0.19",
                "uniqs": "npm:uniqs@2.0.0"
            }
        },
        "npm:postcss@5.0.10": {
            "map": {
                "js-base64": "npm:js-base64@2.1.9",
                "source-map": "npm:source-map@0.5.3",
                "supports-color": "npm:supports-color@3.1.2"
            }
        },
        "npm:postcss@5.0.19": {
            "map": {
                "js-base64": "npm:js-base64@2.1.9",
                "source-map": "npm:source-map@0.5.3",
                "supports-color": "npm:supports-color@3.1.2"
            }
        },
        "npm:public-encrypt@4.0.0": {
            "map": {
                "bn.js": "npm:bn.js@4.10.5",
                "browserify-rsa": "npm:browserify-rsa@4.0.1",
                "create-hash": "npm:create-hash@1.1.2",
                "parse-asn1": "npm:parse-asn1@5.0.0",
                "randombytes": "npm:randombytes@2.0.3"
            }
        },
        "npm:punycode@1.3.2": {
            "map": {}
        },
        "npm:query-string@3.0.3": {
            "map": {
                "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
            }
        },
        "npm:read-cache@1.0.0": {
            "map": {
                "pify": "npm:pify@2.3.0"
            }
        },
        "npm:readable-stream@2.0.6": {
            "map": {
                "core-util-is": "npm:core-util-is@1.0.2",
                "inherits": "npm:inherits@2.0.1",
                "isarray": "npm:isarray@1.0.0",
                "process-nextick-args": "npm:process-nextick-args@1.0.6",
                "string_decoder": "npm:string_decoder@0.10.31",
                "util-deprecate": "npm:util-deprecate@1.0.2"
            }
        },
        "npm:reduce-css-calc@1.2.1": {
            "map": {
                "balanced-match": "npm:balanced-match@0.1.0",
                "reduce-function-call": "npm:reduce-function-call@1.0.1"
            }
        },
        "npm:reduce-function-call@1.0.1": {
            "map": {
                "balanced-match": "npm:balanced-match@0.1.0"
            }
        },
        "npm:rimraf@2.5.2": {
            "map": {
                "glob": "npm:glob@7.0.3"
            }
        },
        "npm:ripemd160@1.0.1": {
            "map": {}
        },
        "npm:sha.js@2.4.5": {
            "map": {
                "inherits": "npm:inherits@2.0.1"
            }
        },
        "npm:sort-keys@1.1.1": {
            "map": {
                "is-plain-obj": "npm:is-plain-obj@1.1.0"
            }
        },
        "npm:source-map@0.1.43": {
            "map": {
                "amdefine": "npm:amdefine@1.0.0"
            }
        },
        "npm:source-map@0.5.3": {
            "map": {}
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.0.6"
            }
        },
        "npm:string_decoder@0.10.31": {
            "map": {}
        },
        "npm:strip-ansi@3.0.1": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.0.0"
            }
        },
        "npm:supports-color@3.1.2": {
            "map": {
                "has-flag": "npm:has-flag@1.0.0"
            }
        },
        "npm:svgo@0.6.3": {
            "map": {
                "coa": "npm:coa@1.0.1",
                "colors": "npm:colors@1.1.2",
                "csso": "npm:csso@1.6.4",
                "js-yaml": "npm:js-yaml@3.5.5",
                "mkdirp": "npm:mkdirp@0.5.1",
                "sax": "npm:sax@1.1.6",
                "whet.extend": "npm:whet.extend@0.9.9"
            }
        },
        "npm:uglify-js@2.3.6": {
            "map": {
                "async": "npm:async@0.2.10",
                "optimist": "npm:optimist@0.3.7",
                "source-map": "npm:source-map@0.1.43"
            }
        },
        "npm:url@0.11.0": {
            "map": {
                "punycode": "npm:punycode@1.3.2",
                "querystring": "npm:querystring@0.2.0"
            }
        },
        "npm:xmldom@0.1.22": {
            "map": {}
        }
    }
});