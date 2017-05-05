import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  sequence: attr('number'),
  category: belongsTo('codeable-concept', { async: false }),
  code: belongsTo('codeable-concept', { async: false }),
  timingDate: attr('date'),
  timingPeriod: belongsTo('period', { async: false }),
  valueString: attr('string'),
  valueQuantity: belongsTo('quantity', { async: false }),
  valueAttachment: belongsTo('attachment', { async: false }),
  valueReference: belongsTo('reference', { async: false }),
  reason: belongsTo('codeable-concept', { async: false })
});