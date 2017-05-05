import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  status: attr('string'),
  contact: hasMany('contact-point', { async: true }),
  end: attr('string'),
  reason: attr('string'),
  criteria: attr('string'),
  error: attr('string'),
  channel: belongsTo('subscription-channel', { async: false }),
  tag: hasMany('coding', { async: true })
});