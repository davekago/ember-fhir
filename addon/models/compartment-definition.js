import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, hasMany } = DS;

export default DomainResource.extend({
  url: attr('string'),
  name: attr('string'),
  title: attr('string'),
  status: attr('string'),
  experimental: attr('boolean', { allowNull: true }),
  date: attr('date'),
  publisher: attr('string'),
  contact: hasMany('contact-detail', { async: true }),
  description: attr('string'),
  purpose: attr('string'),
  useContext: hasMany('usage-context', { async: true }),
  jurisdiction: hasMany('codeable-concept', { async: true }),
  code: attr('string'),
  search: attr('boolean', { allowNull: true }),
  resource: hasMany('compartment-definition-resource', { async: true })
});