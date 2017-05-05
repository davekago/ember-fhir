import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  type_: belongsTo('codeable-concept', { async: false }),
  adjustment: belongsTo('money', { async: false }),
  adjustmentReason: belongsTo('codeable-concept', { async: false }),
  date: attr('date'),
  amount: belongsTo('money', { async: false }),
  identifier: belongsTo('identifier', { async: false })
});