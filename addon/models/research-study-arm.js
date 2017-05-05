import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  name: attr('string'),
  code: belongsTo('codeable-concept', { async: false }),
  description: attr('string')
});