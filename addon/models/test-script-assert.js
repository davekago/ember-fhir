import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  label: attr('string'),
  description: attr('string'),
  direction: attr('string'),
  compareToSourceId: attr('string'),
  compareToSourceExpression: attr('string'),
  compareToSourcePath: attr('string'),
  contentType: attr('string'),
  expression: attr('string'),
  headerField: attr('string'),
  minimumId: attr('string'),
  navigationLinks: attr('boolean', { allowNull: true }),
  operator: attr('string'),
  path: attr('string'),
  requestMethod: attr('string'),
  requestURL: attr('string'),
  resource: attr('string'),
  response: attr('string'),
  responseCode: attr('string'),
  rule: belongsTo('test-script-rule-2', { async: false }),
  ruleset: belongsTo('test-script-ruleset-1', { async: false }),
  sourceId: attr('string'),
  validateProfileId: attr('string'),
  value: attr('string'),
  warningOnly: attr('boolean', { allowNull: true })
});