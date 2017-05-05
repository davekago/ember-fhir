import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, hasMany } = DS;

export default DomainResource.extend({
  url: attr('string'),
  identifier: hasMany('identifier', { async: true }),
  version: attr('string'),
  status: attr('string'),
  experimental: attr('boolean', { allowNull: true }),
  date: attr('date'),
  publisher: attr('string'),
  name: attr('string'),
  title: attr('string'),
  contact: hasMany('contact-detail', { async: true }),
  useContext: hasMany('usage-context', { async: true }),
  jurisdiction: hasMany('codeable-concept', { async: true }),
  copyright: attr('string'),
  stringency: attr('string'),
  mapping: hasMany('data-element-mapping', { async: true }),
  element: hasMany('element-definition', { async: true, inverse: null })
});