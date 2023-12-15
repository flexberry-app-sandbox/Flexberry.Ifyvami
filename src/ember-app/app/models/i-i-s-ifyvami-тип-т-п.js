import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as типТПMixin
} from '../mixins/regenerated/models/i-i-s-ifyvami-тип-т-п';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(типТПMixin, Validations, {
});

defineProjections(Model);

export default Model;
