import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  collector: belongsTo('reference', { async: false }),
  collectedDateTime: attr('date'),
  collectedPeriod: belongsTo('period', { async: false }),
  quantity: belongsTo('quantity', { async: false }),
  method: belongsTo('codeable-concept', { async: false }),
  bodySite: belongsTo('codeable-concept', { async: false })
});