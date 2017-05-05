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
  useContext: hasMany('usage-context', { async: true }),
  jurisdiction: hasMany('codeable-concept', { async: true }),
  purpose: attr('string'),
  code: attr('string'),
  base: attr(),
  type_: attr('string'),
  derivedFrom: attr('string'),
  description: attr('string'),
  expression: attr('string'),
  xpath: attr('string'),
  xpathUsage: attr('string'),
  target: attr(),
  comparator: attr(),
  modifier: attr(),
  chain: attr(),
  component: hasMany('search-parameter-component', { async: true })
});