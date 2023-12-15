import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as транспсрдMixin
} from '../mixins/regenerated/models/i-i-s-ifyvami-транспсрд';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(транспсрдMixin, Validations, {
});

defineProjections(Model);

export default Model;
