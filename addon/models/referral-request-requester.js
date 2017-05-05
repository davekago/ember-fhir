import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  agent: belongsTo('reference', { async: false }),
  onBehalfOf: belongsTo('reference', { async: false })
});