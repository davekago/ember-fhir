import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  text: attr('string'),
  site: belongsTo('codeable-concept', { async: false }),
  route: belongsTo('codeable-concept', { async: false }),
  method: belongsTo('codeable-concept', { async: false }),
  dose: belongsTo('quantity', { async: false }),
  rateRatio: belongsTo('ratio', { async: false }),
  rateSimpleQuantity: belongsTo('quantity', { async: false })
});