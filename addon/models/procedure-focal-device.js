import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  action: belongsTo('codeable-concept', { async: false }),
  manipulated: belongsTo('reference', { async: false })
});