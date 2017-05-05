import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  active: attr('boolean', { allowNull: true }),
  type_: hasMany('codeable-concept', { async: true }),
  name: attr('string'),
  alias: attr(),
  telecom: hasMany('contact-point', { async: true }),
  address: hasMany('address', { async: true }),
  partOf: belongsTo('reference', { async: false }),
  contact: hasMany('organization-contact', { async: true }),
  endpoint: hasMany('reference', { async: true })
});