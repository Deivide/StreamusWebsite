﻿import { LayoutView } from 'marionette';
import template from './contact.hbs';
import styles from './contact.css';
import { serialize } from 'backbone.syphon';
import { invoke } from 'lodash';
import InputType from 'component/input/inputType.js';

// TODO: Should this view swap out with a 'Thanks' message once message has been sent?
export default LayoutView.extend({
  className: styles.contact,
  template,
  templateHelpers: {
    styles,
    InputType
  },

  ui: {
    form: 'form',
    input: 'input',
    submit: 'submit'
  },

  events: {
    'submit @ui.form': '_onFormSubmit'
  },

  modelEvents: {
    'invalid': '_onInvalid',
    'request': '_onRequest'
  },

  _onFormSubmit(event) {
    event.preventDefault();
    this.model.set(serialize(this));
    this.model.save().then(() => {
      this.ui.submit.val('Message sent');
      App.channels.snackbar.commands.trigger('show:snackbar', {
        message: 'Message sent.'
      });
    }, (response) => {
      this.ui.submit.prop('disabled', false);
      App.channels.snackbar.commands.trigger('show:snackbar', {
        message: `Sending failed. ${response.responseText.replace(/"/g, '')}`
      });
    });
  },

  _onInvalid() {
    invoke(this.ui.input, 'validate');
  },

  _onRequest() {
    this.ui.submit.prop('disabled', true);
    App.channels.snackbar.commands.trigger('show:snackbar', {
      message: 'Sending message.'
    });
  }
});