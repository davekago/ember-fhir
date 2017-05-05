import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  path: attr('string'),
  valueSetString: attr('string'),
  valueSetReference: belongsTo('reference', { async: false }),
  valueCode: attr(),
  valueCoding: hasMany('coding', { async: true }),
  valueCodeableConcept: hasMany('codeable-concept', { async: true })
});