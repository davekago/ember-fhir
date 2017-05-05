import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  clinicalStatus: attr('string'),
  verificationStatus: attr('string'),
  category: hasMany('codeable-concept', { async: true }),
  severity: belongsTo('codeable-concept', { async: false }),
  code: belongsTo('codeable-concept', { async: false }),
  bodySite: hasMany('codeable-concept', { async: true }),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  onsetDateTime: attr('date'),
  onsetAge: belongsTo('age', { async: false }),
  onsetPeriod: belongsTo('period', { async: false }),
  onsetRange: belongsTo('range', { async: false }),
  onsetString: attr('string'),
  abatementDateTime: attr('date'),
  abatementAge: belongsTo('age', { async: false }),
  abatementBoolean: attr('boolean', { allowNull: true }),
  abatementPeriod: belongsTo('period', { async: false }),
  abatementRange: belongsTo('range', { async: false }),
  abatementString: attr('string'),
  assertedDate: attr('date'),
  asserter: belongsTo('reference', { async: false }),
  stage: belongsTo('condition-stage', { async: false }),
  evidence: hasMany('condition-evidence', { async: true }),
  note: hasMany('annotation', { async: true })
});