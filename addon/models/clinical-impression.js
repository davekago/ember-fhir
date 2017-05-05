import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  code: belongsTo('codeable-concept', { async: false }),
  description: attr('string'),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  effectiveDateTime: attr('date'),
  effectivePeriod: belongsTo('period', { async: false }),
  date: attr('date'),
  assessor: belongsTo('reference', { async: false }),
  previous: belongsTo('reference', { async: false }),
  problem: hasMany('reference', { async: true }),
  investigation: hasMany('clinical-impression-investigation', { async: true }),
  protocol: attr(),
  summary: attr('string'),
  finding: hasMany('clinical-impression-finding', { async: true }),
  prognosisCodeableConcept: hasMany('codeable-concept', { async: true }),
  prognosisReference: hasMany('reference', { async: true }),
  action: hasMany('reference', { async: true }),
  note: hasMany('annotation', { async: true })
});