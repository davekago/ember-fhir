import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  type_: belongsTo('codeable-concept', { async: false }),
  text: attr('string')
});