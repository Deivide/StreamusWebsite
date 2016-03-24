﻿import { Behavior } from 'marionette';
import { remove, contains, filter } from 'lodash';

// Lazy load images which are not currently in the viewport to save on bandwidth.
export default Behavior.extend({
  defaults: {
    // An amount (in px) to trigger showing an image before it is in the viewport.
    threshold: 200
  },

  ui: {
    lazyImage: 'lazyImage'
  },

  _unloadedImages: null,
  _windowHeight: 0,
  _windowEvents: {
    'scroll': '_onWindowScroll',
    'resize': '_onWindowResize'
  },

  initialize() {
    this._windowHeight = window.innerHeight;
    this.bindEntityEvents(App.channels.window, this._windowEvents);
  },

  onRender() {
    // Cache a copy of the images to load so processing a subset is simple.
    this._unloadedImages = Array.from(this.ui.lazyImage);

    // It's possible to be scrolled down the page on initial load (i.e. Firefox preserves scroll location)
    this._loadImages();
  },

  _onWindowScroll() {
    this._loadImages();
  },

  _onWindowResize(event) {
    this._windowHeight = event.height;
    this._loadImages();
  },

  _loadImages() {
    // Determine which images (if any) need to be loaded.
    const imagesInThreshold = filter(this._unloadedImages, (image) => {
      return image.getBoundingClientRect().top <= this._windowHeight + this.options.threshold;
    });

    // Load images which are within the allowed threshold.
    for (const image of imagesInThreshold) {
      image.setAttribute('src', image.getAttribute('data-src'));
    }

    // Stop considering images which have been loaded.
    remove(this._unloadedImages, (image) => contains(imagesInThreshold, image));
  }
});