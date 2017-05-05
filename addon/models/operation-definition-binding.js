import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  strength: attr('string'),
  valueSetUri: attr('string'),
  valueSetReference: belongsTo('reference', { async: false })
});