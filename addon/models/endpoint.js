import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  connectionType: belongsTo('coding', { async: false }),
  name: attr('string'),
  managingOrganization: belongsTo('reference', { async: false }),
  contact: hasMany('contact-point', { async: true }),
  period: belongsTo('period', { async: false }),
  payloadType: hasMany('codeable-concept', { async: true }),
  payloadMimeType: attr(),
  address: attr('string'),
  header: attr()
});