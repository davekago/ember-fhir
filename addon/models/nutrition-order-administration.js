import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  schedule: belongsTo('timing', { async: false }),
  quantity: belongsTo('quantity', { async: false }),
  rateSimpleQuantity: belongsTo('quantity', { async: false }),
  rateRatio: belongsTo('ratio', { async: false })
});