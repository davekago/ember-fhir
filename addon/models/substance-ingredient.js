import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  quantity: belongsTo('ratio', { async: false }),
  substanceCodeableConcept: belongsTo('codeable-concept', { async: false }),
  substanceReference: belongsTo('reference', { async: false })
});