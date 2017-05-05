import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  code: belongsTo('codeable-concept', { async: false }),
  value: attr('date')
});