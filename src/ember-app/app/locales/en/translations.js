import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISIfyvamiтипТПLForm from './forms/i-i-s-ifyvami-тип-т-п-l';
import IISIfyvamiтранспсрдLForm from './forms/i-i-s-ifyvami-транспсрд-l';
import IISIfyvamiтипТПEForm from './forms/i-i-s-ifyvami-тип-т-п-e';
import IISIfyvamiтранспсрдEForm from './forms/i-i-s-ifyvami-транспсрд-e';
import IISIfyvamiтипТПModel from './models/i-i-s-ifyvami-тип-т-п';
import IISIfyvamiтранспсрдModel from './models/i-i-s-ifyvami-транспсрд';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-ifyvami-тип-т-п': IISIfyvamiтипТПModel,
    'i-i-s-ifyvami-транспсрд': IISIfyvamiтранспсрдModel
  },

  'application-name': 'Ifyvami',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Ifyvami',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Ifyvami',
          title: 'Ifyvami'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        ifyvami: {
          caption: 'Ifyvami',
          title: 'Ifyvami',
          'i-i-s-ifyvami-транспсрд-l': {
            caption: 'Транспсрд',
            title: ''
          },
          'i-i-s-ifyvami-тип-т-п-l': {
            caption: 'Тип ТП',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-ifyvami-тип-т-п-l': IISIfyvamiтипТПLForm,
    'i-i-s-ifyvami-транспсрд-l': IISIfyvamiтранспсрдLForm,
    'i-i-s-ifyvami-тип-т-п-e': IISIfyvamiтипТПEForm,
    'i-i-s-ifyvami-транспсрд-e': IISIfyvamiтранспсрдEForm
  },

});

export default translations;
