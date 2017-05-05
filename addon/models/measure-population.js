import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  identifier: belongsTo('identifier', { async: false }),
  code: belongsTo('codeable-concept', { async: false }),
  name: attr('string'),
  description: attr('string'),
  criteria: attr('string')
});