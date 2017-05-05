import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  requestId: attr('string'),
  identifier: belongsTo('identifier', { async: false }),
  module: belongsTo('reference', { async: false }),
  status: attr('string'),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  occurrenceDateTime: attr('date'),
  performer: belongsTo('reference', { async: false }),
  reasonCodeableConcept: belongsTo('codeable-concept', { async: false }),
  reasonReference: belongsTo('reference', { async: false }),
  note: hasMany('annotation', { async: true }),
  evaluationMessage: hasMany('reference', { async: true }),
  outputParameters: belongsTo('reference', { async: false }),
  result: belongsTo('reference', { async: false }),
  dataRequirement: hasMany('data-requirement', { async: true })
});