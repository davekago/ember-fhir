import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  appointment: belongsTo('reference', { async: false }),
  start: attr('string'),
  end: attr('string'),
  participantType: hasMany('codeable-concept', { async: true }),
  actor: belongsTo('reference', { async: false }),
  participantStatus: attr('string'),
  comment: attr('string')
});