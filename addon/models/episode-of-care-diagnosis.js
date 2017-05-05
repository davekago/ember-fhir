import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  condition: belongsTo('reference', { async: false }),
  role: belongsTo('codeable-concept', { async: false }),
  rank: attr('number')
});