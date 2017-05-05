import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  category: belongsTo('codeable-concept', { async: false }),
  reason: belongsTo('codeable-concept', { async: false }),
  amount: belongsTo('money', { async: false }),
  value: attr('number')
});