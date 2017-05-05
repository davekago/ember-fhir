import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  category: hasMany('codeable-concept', { async: true }),
  name: attr('string'),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  period: belongsTo('period', { async: false }),
  participant: hasMany('care-team-participant', { async: true }),
  reasonCode: hasMany('codeable-concept', { async: true }),
  reasonReference: hasMany('reference', { async: true }),
  managingOrganization: hasMany('reference', { async: true }),
  note: hasMany('annotation', { async: true })
});