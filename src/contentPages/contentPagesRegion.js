﻿import { Region } from 'marionette';

export default Region.extend({
  initialize() {
    this.listenTo(App.channels.content, 'region:showView', this._showView);
  },

  _showView(View, viewOptions) {
    this.show(new View(viewOptions));
  }
});