import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  category: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  date: attr('date'),
  reaction: hasMany('reference', { async: true }),
  location: belongsTo('reference', { async: false }),
  seriousness: belongsTo('codeable-concept', { async: false }),
  outcome: belongsTo('codeable-concept', { async: false }),
  recorder: belongsTo('reference', { async: false }),
  eventParticipant: belongsTo('reference', { async: false }),
  description: attr('string'),
  suspectEntity: hasMany('adverse-event-suspect-entity', { async: true }),
  subjectMedicalHistory: hasMany('reference', { async: true }),
  referenceDocument: hasMany('reference', { async: true }),
  study: hasMany('reference', { async: true })
});