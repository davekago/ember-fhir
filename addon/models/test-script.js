import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  url: attr('string'),
  identifier: belongsTo('identifier', { async: false }),
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
  origin: hasMany('test-script-origin', { async: true }),
  destination: hasMany('test-script-destination', { async: true }),
  metadata: belongsTo('test-script-metadata', { async: false }),
  fixture: hasMany('test-script-fixture', { async: true }),
  profile: hasMany('reference', { async: true }),
  variable: hasMany('test-script-variable', { async: true }),
  rule: hasMany('test-script-rule', { async: true }),
  ruleset: hasMany('test-script-ruleset', { async: true }),
  setup: belongsTo('test-script-setup', { async: false }),
  test: hasMany('test-script-test', { async: true }),
  teardown: belongsTo('test-script-teardown', { async: false })
});