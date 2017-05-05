import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

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
  copyright: attr('string'),
  fhirVersion: attr('string'),
  dependency: hasMany('implementation-guide-dependency', { async: true }),
  package: hasMany('implementation-guide-package', { async: true }),
  global: hasMany('implementation-guide-global', { async: true }),
  binary: attr(),
  page: belongsTo('implementation-guide-page', { async: false })
});