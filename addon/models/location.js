import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  operationalStatus: belongsTo('coding', { async: false }),
  name: attr('string'),
  alias: attr(),
  description: attr('string'),
  mode: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  telecom: hasMany('contact-point', { async: true }),
  address: belongsTo('address', { async: false }),
  physicalType: belongsTo('codeable-concept', { async: false }),
  position: belongsTo('location-position', { async: false }),
  managingOrganization: belongsTo('reference', { async: false }),
  partOf: belongsTo('reference', { async: false }),
  endpoint: hasMany('reference', { async: true })
});