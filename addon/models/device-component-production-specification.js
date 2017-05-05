import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  specType: belongsTo('codeable-concept', { async: false }),
  componentId: belongsTo('identifier', { async: false }),
  productionSpec: attr('string')
});