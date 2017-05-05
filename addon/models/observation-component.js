import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  code: belongsTo('codeable-concept', { async: false }),
  valueQuantity: belongsTo('quantity', { async: false }),
  valueCodeableConcept: belongsTo('codeable-concept', { async: false }),
  valueString: attr('string'),
  valueRange: belongsTo('range', { async: false }),
  valueRatio: belongsTo('ratio', { async: false }),
  valueSampledData: belongsTo('sampled-data', { async: false }),
  valueAttachment: belongsTo('attachment', { async: false }),
  valueTime: attr('date'),
  valueDateTime: attr('date'),
  valuePeriod: belongsTo('period', { async: false }),
  dataAbsentReason: belongsTo('codeable-concept', { async: false }),
  interpretation: belongsTo('codeable-concept', { async: false }),
  referenceRange: hasMany('observation-reference-range', { async: true })
});