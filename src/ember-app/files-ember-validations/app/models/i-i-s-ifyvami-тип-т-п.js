import {
  defineNamespace,
  defineProjections,
  Model as типТПMixin
} from '../mixins/regenerated/models/i-i-s-ifyvami-тип-т-п';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(типТПMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
