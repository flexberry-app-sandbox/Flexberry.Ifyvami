import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  тип: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-ifyvami-тип-т-п.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-ifyvami-тип-т-п.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('типТПE', 'i-i-s-ifyvami-тип-т-п', {
    код: attr('Код', { index: 0 }),
    тип: attr('Тип', { index: 1 })
  });

  modelClass.defineProjection('типТПL', 'i-i-s-ifyvami-тип-т-п', {
    код: attr('Код', { index: 0 }),
    тип: attr('тип', { index: 1 })
  });
};
