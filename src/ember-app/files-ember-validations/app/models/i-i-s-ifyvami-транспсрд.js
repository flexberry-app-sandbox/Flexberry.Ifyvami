import {
  defineNamespace,
  defineProjections,
  Model as транспсрдMixin
} from '../mixins/regenerated/models/i-i-s-ifyvami-транспсрд';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(транспсрдMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
