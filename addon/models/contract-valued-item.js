import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  entityCodeableConcept: belongsTo('codeable-concept', { async: false }),
  entityReference: belongsTo('reference', { async: false }),
  identifier: belongsTo('identifier', { async: false }),
  effectiveTime: attr('date'),
  quantity: belongsTo('quantity', { async: false }),
  unitPrice: belongsTo('money', { async: false }),
  factor: attr('number'),
  points: attr('number'),
  net: belongsTo('money', { async: false })
});