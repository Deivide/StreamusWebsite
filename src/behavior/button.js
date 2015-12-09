﻿import { Behavior } from 'marionette';

export default Behavior.extend({
  events: {
    'click': '_onClick'
  },

  modelEvents: {
    'change:enabled': '_onChangeEnabled',
    'change:text': '_onChangeText'
  },

  onRender() {
    this._setDisabled(!this.view.options.model.get('enabled'));
    this._setText(this.view.options.model.get('text'));
  },

  _onChangeEnabled(model, enabled) {
    this._setDisabled(!enabled);
  },

  _onChangeText(model, text) {
    this.view.$el.text(text);
  },

  _onClick() {
    if (!this.view.model.get('disabled')) {
      this.view.triggerMethod('click');
    }
  },

  _setDisabled(disabled) {
    this.view.$el.attr('disabled', disabled);
  },

  _setText(text) {
    this.$el.text(text);
  }
});