import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  sequence: attr('number'),
  type_: belongsTo('codeable-concept', { async: false }),
  revenue: belongsTo('codeable-concept', { async: false }),
  category: belongsTo('codeable-concept', { async: false }),
  service: belongsTo('codeable-concept', { async: false }),
  modifier: hasMany('codeable-concept', { async: true }),
  programCode: hasMany('codeable-concept', { async: true }),
  quantity: belongsTo('quantity', { async: false }),
  unitPrice: belongsTo('money', { async: false }),
  factor: attr('number'),
  net: belongsTo('money', { async: false }),
  udi: hasMany('reference', { async: true }),
  noteNumber: attr(),
  adjudication: hasMany('explanation-of-benefit-adjudication', { async: true })
});