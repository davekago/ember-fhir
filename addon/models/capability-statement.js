import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  url: attr('string'),
  version: attr('string'),
  name: attr('string'),
  title: attr('string'),
  status: attr('string'),
  experimental: attr('boolean', { allowNull: true }),
  date: attr('date'),
  publisher: attr('string'),
  contact: hasMany('contact-detail', { async: true }),
  description: attr('string'),
  useContext: hasMany('usage-context', { async: true }),
  jurisdiction: hasMany('codeable-concept', { async: true }),
  purpose: attr('string'),
  copyright: attr('string'),
  kind: attr('string'),
  instantiates: attr(),
  software: belongsTo('capability-statement-software', { async: false }),
  implementation: belongsTo('capability-statement-implementation', { async: false }),
  fhirVersion: attr('string'),
  acceptUnknown: attr('string'),
  format: attr(),
  patchFormat: attr(),
  implementationGuide: attr(),
  profile: hasMany('reference', { async: true }),
  rest: hasMany('capability-statement-rest', { async: true }),
  messaging: hasMany('capability-statement-messaging', { async: true }),
  document: hasMany('capability-statement-document', { async: true })
});