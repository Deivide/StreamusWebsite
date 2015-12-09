﻿import { Region } from 'marionette';
import HeaderView from './headerView';

export default Region.extend({
  initialize() {
    this.listenTo(App.channels.body.vent, 'rendered', this._onBodyRendered);
  },

  _onBodyRendered() {
    this.show(new HeaderView());
  }
});