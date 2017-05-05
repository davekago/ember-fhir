import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  basedOn: hasMany('reference', { async: true }),
  partOf: hasMany('reference', { async: true }),
  context: belongsTo('reference', { async: false }),
  status: attr('string'),
  category: belongsTo('codeable-concept', { async: false }),
  medicationCodeableConcept: belongsTo('codeable-concept', { async: false }),
  medicationReference: belongsTo('reference', { async: false }),
  effectiveDateTime: attr('date'),
  effectivePeriod: belongsTo('period', { async: false }),
  dateAsserted: attr('date'),
  informationSource: belongsTo('reference', { async: false }),
  subject: belongsTo('reference', { async: false }),
  derivedFrom: hasMany('reference', { async: true }),
  taken: attr('string'),
  reasonNotTaken: hasMany('codeable-concept', { async: true }),
  reasonCode: hasMany('codeable-concept', { async: true }),
  reasonReference: hasMany('reference', { async: true }),
  note: hasMany('annotation', { async: true }),
  dosage: hasMany('dosage', { async: true })
});