import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  validityPeriod: belongsTo('period', { async: false }),
  numberOfRepeatsAllowed: attr('number'),
  quantity: belongsTo('quantity', { async: false }),
  expectedSupplyDuration: belongsTo('duration', { async: false }),
  performer: belongsTo('reference', { async: false })
});