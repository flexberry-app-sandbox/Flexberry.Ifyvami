import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  наименование: DS.attr('string'),
  типТП: DS.belongsTo('i-i-s-ifyvami-тип-т-п', { inverse: null, async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-ifyvami-транспсрд.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-ifyvami-транспсрд.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  типТП: {
    descriptionKey: 'models.i-i-s-ifyvami-транспсрд.validations.типТП.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('транспрдE', 'i-i-s-ifyvami-транспсрд', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    типТП: belongsTo('i-i-s-ifyvami-тип-т-п', 'Типтп', {
      тип: attr('ТИптп', { index: 3 })
    }, { index: 2 })
  });

  modelClass.defineProjection('транспсрдE', 'i-i-s-ifyvami-транспсрд', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    типТП: belongsTo('i-i-s-ifyvami-тип-т-п', 'Тип ТП', {
      тип: attr('Тип', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'тип' })
  });

  modelClass.defineProjection('транспсрдL', 'i-i-s-ifyvami-транспсрд', {
    код: attr('Код', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    типТП: belongsTo('i-i-s-ifyvami-тип-т-п', 'Типтп', {
      тип: attr('Типтп', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
