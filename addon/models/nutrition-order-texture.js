import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  modifier: belongsTo('codeable-concept', { async: false }),
  foodType: belongsTo('codeable-concept', { async: false })
});