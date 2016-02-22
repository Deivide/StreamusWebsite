﻿// NOTE: CSS Minification not supported until jspm v0.17.
// https://github.com/MeoMix/jspm-marionette-boilerplate/issues/12
import { Plugins } from 'jspm-loader-css/lib/plugins'
import { CSSLoader } from 'jspm-loader-css/lib/CSSLoader'
import path from 'path';
import url from 'postcss-url';
import mixins from 'postcss-mixins';
import nesting from 'postcss-nesting';
import autoprefixer from 'autoprefixer';
import mixinFrom from 'postcss-mixin-from/src/index.js';
import inlineTrait from 'postcss-inline-trait';

const composesHelper = (css) => {
  const isBundling = typeof window === 'undefined';
  const rootDir = isBundling ? '/compiled/' : '/';
  const traitPath = `${rootDir}common/css/traits/`;

  css.walkRules(rule => {
    rule.walkDecls(decl => {
      // Allow for omission of full path from composes statements. Assume traits path.
      // Don't assume relative paths are traits.
      if (decl.prop === 'composes' && decl.value.indexOf('.') === -1) {
        decl.value = decl.value.replace(/'(.*)'$/, `'${traitPath}$1.css'`);
      }
    });
  });
};

const getFileText = (filePath, relativeToPath) => {
  const isBundling = typeof window === 'undefined';
  let absolutePath = filePath;

  if (isBundling && filePath[0] === '.') {
    // TODO: I suspect I still need to call toFileURL on these.
    absolutePath = path.resolve(path.dirname(relativeToPath), filePath);
    // css.source.input.from is incorrect when building. Need to convert from relative and then drop root
    // so that when giving the path to SystemJS' fetch it works as expected.
    absolutePath = absolutePath.replace(path.parse(absolutePath).root, '');
  }

  const canonicalParent = relativeToPath.replace(/^\//, '');

  return System.normalize(absolutePath, path.join(System.baseURL, canonicalParent))
    .then((normalizedPath) => {
      return System.fetch({
        address: normalizedPath,
        metadata: {}
      });
    });
};

const plugins = [
  composesHelper,
  inlineTrait({
    getFileText
  }),
  mixinFrom({
    getFileText
  }),
  mixins,
  nesting(),
  url({
    url: function(url) {
      const isBundling = typeof window === 'undefined';
      var transformedUrl = url;

      // urls which reference data: don't need to be transformed since they reference static rather than a path.
      if (!isBundling && !url.includes('data:')) {
        transformedUrl = `${System.baseURL}${url}`;
      }

      return transformedUrl;
    }
  }),
  Plugins.values,
  Plugins.localByDefault,
  Plugins.extractImports,
  Plugins.scope,
  autoprefixer()
];

const { fetch, bundle } = new CSSLoader(plugins);
export { fetch, bundle };