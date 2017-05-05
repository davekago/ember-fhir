import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  severity: attr('string'),
  code: attr('string'),
  details: belongsTo('codeable-concept', { async: false }),
  diagnostics: attr('string'),
  location: attr(),
  expression: attr()
});