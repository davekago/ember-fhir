import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  basedOn: hasMany('reference', { async: true }),
  status: attr('string'),
  category: hasMany('codeable-concept', { async: true }),
  code: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  effectiveDateTime: attr('date'),
  effectivePeriod: belongsTo('period', { async: false }),
  issued: attr('string'),
  performer: hasMany('reference', { async: true }),
  valueQuantity: belongsTo('quantity', { async: false }),
  valueCodeableConcept: belongsTo('codeable-concept', { async: false }),
  valueString: attr('string'),
  valueBoolean: attr('boolean', { allowNull: true }),
  valueRange: belongsTo('range', { async: false }),
  valueRatio: belongsTo('ratio', { async: false }),
  valueSampledData: belongsTo('sampled-data', { async: false }),
  valueAttachment: belongsTo('attachment', { async: false }),
  valueTime: attr('date'),
  valueDateTime: attr('date'),
  valuePeriod: belongsTo('period', { async: false }),
  dataAbsentReason: belongsTo('codeable-concept', { async: false }),
  interpretation: belongsTo('codeable-concept', { async: false }),
  comment: attr('string'),
  bodySite: belongsTo('codeable-concept', { async: false }),
  method: belongsTo('codeable-concept', { async: false }),
  specimen: belongsTo('reference', { async: false }),
  device: belongsTo('reference', { async: false }),
  referenceRange: hasMany('observation-reference-range', { async: true }),
  related: hasMany('observation-related', { async: true }),
  component: hasMany('observation-component', { async: true })
});