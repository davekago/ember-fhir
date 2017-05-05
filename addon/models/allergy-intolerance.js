import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  clinicalStatus: attr('string'),
  verificationStatus: attr('string'),
  type_: attr('string'),
  category: attr(),
  criticality: attr('string'),
  code: belongsTo('codeable-concept', { async: false }),
  patient: belongsTo('reference', { async: false }),
  onsetDateTime: attr('date'),
  onsetAge: belongsTo('age', { async: false }),
  onsetPeriod: belongsTo('period', { async: false }),
  onsetRange: belongsTo('range', { async: false }),
  onsetString: attr('string'),
  assertedDate: attr('date'),
  recorder: belongsTo('reference', { async: false }),
  asserter: belongsTo('reference', { async: false }),
  lastOccurrence: attr('date'),
  note: hasMany('annotation', { async: true }),
  reaction: hasMany('allergy-intolerance-reaction', { async: true })
});