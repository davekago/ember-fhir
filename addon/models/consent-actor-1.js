import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  role: belongsTo('codeable-concept', { async: false }),
  reference: belongsTo('reference', { async: false })
});