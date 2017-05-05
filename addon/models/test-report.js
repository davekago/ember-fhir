import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  name: attr('string'),
  status: attr('string'),
  testScript: belongsTo('reference', { async: false }),
  result: attr('string'),
  score: attr('number'),
  tester: attr('string'),
  issued: attr('date'),
  participant: hasMany('test-report-participant', { async: true }),
  setup: belongsTo('test-report-setup', { async: false }),
  test: hasMany('test-report-test', { async: true }),
  teardown: belongsTo('test-report-teardown', { async: false })
});