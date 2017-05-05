import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  type_: belongsTo('codeable-concept', { async: false }),
  allowedUnsignedInt: attr('number'),
  allowedString: attr('string'),
  allowedMoney: belongsTo('money', { async: false }),
  usedUnsignedInt: attr('number'),
  usedMoney: belongsTo('money', { async: false })
});