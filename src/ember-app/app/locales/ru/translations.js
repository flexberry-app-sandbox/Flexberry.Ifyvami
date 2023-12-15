import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Ifyvami',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Ifyvami',
          title: 'Ifyvami'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-ifyvami-тип-т-п-l': IISIfyvamiтипТПLForm,
    'i-i-s-ifyvami-транспсрд-l': IISIfyvamiтранспсрдLForm,
    'i-i-s-ifyvami-тип-т-п-e': IISIfyvamiтипТПEForm,
    'i-i-s-ifyvami-транспсрд-e': IISIfyvamiтранспсрдEForm
  },

});

export default translations;
