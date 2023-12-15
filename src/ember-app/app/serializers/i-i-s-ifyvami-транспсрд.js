import { Serializer as транспсрдSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ifyvami-транспсрд';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(транспсрдSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
