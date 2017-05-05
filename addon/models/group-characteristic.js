import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  code: belongsTo('codeable-concept', { async: false }),
  valueCodeableConcept: belongsTo('codeable-concept', { async: false }),
  valueBoolean: attr('boolean', { allowNull: true }),
  valueQuantity: belongsTo('quantity', { async: false }),
  valueRange: belongsTo('range', { async: false }),
  exclude: attr('boolean', { allowNull: true }),
  period: belongsTo('period', { async: false })
});