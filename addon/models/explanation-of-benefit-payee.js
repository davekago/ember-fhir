import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  type_: belongsTo('codeable-concept', { async: false }),
  party: belongsTo('reference', { async: false })
});