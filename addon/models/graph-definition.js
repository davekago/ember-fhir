import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, hasMany } = DS;

export default DomainResource.extend({
  url: attr('string'),
  version: attr('string'),
  name: attr('string'),
  status: attr('string'),
  experimental: attr('boolean', { allowNull: true }),
  date: attr('date'),
  publisher: attr('string'),
  contact: hasMany('contact-detail', { async: true }),
  description: attr('string'),
  useContext: hasMany('usage-context', { async: true }),
  jurisdiction: hasMany('codeable-concept', { async: true }),
  purpose: attr('string'),
  start: attr('string'),
  profile: attr('string'),
  link: hasMany('graph-definition-link', { async: true })
});