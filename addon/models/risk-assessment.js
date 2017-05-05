import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  basedOn: belongsTo('reference', { async: false }),
  parent: belongsTo('reference', { async: false }),
  status: attr('string'),
  method: belongsTo('codeable-concept', { async: false }),
  code: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  occurrenceDateTime: attr('date'),
  occurrencePeriod: belongsTo('period', { async: false }),
  condition: belongsTo('reference', { async: false }),
  performer: belongsTo('reference', { async: false }),
  reasonCodeableConcept: belongsTo('codeable-concept', { async: false }),
  reasonReference: belongsTo('reference', { async: false }),
  basis: hasMany('reference', { async: true }),
  prediction: hasMany('risk-assessment-prediction', { async: true }),
  mitigation: attr('string'),
  comment: attr('string')
});