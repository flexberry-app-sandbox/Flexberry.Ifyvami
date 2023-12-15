import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.ifyvami.caption'),
          title: i18n.t('forms.application.sitemap.ifyvami.title'),
          children: [{
            link: 'i-i-s-ifyvami-транспсрд-l',
            caption: i18n.t('forms.application.sitemap.ifyvami.i-i-s-ifyvami-транспсрд-l.caption'),
            title: i18n.t('forms.application.sitemap.ifyvami.i-i-s-ifyvami-транспсрд-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-ifyvami-тип-т-п-l',
            caption: i18n.t('forms.application.sitemap.ifyvami.i-i-s-ifyvami-тип-т-п-l.caption'),
            title: i18n.t('forms.application.sitemap.ifyvami.i-i-s-ifyvami-тип-т-п-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})