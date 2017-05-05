import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  measure: belongsTo('codeable-concept', { async: false }),
  detailQuantity: belongsTo('quantity', { async: false }),
  detailRange: belongsTo('range', { async: false }),
  detailCodeableConcept: belongsTo('codeable-concept', { async: false }),
  dueDate: attr('date'),
  dueDuration: belongsTo('duration', { async: false })
});