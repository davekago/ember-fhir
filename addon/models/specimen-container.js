import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  identifier: hasMany('identifier', { async: true }),
  description: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  capacity: belongsTo('quantity', { async: false }),
  specimenQuantity: belongsTo('quantity', { async: false }),
  additiveCodeableConcept: belongsTo('codeable-concept', { async: false }),
  additiveReference: belongsTo('reference', { async: false })
});