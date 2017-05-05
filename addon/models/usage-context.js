import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { belongsTo } = DS;

export default Element.extend({
  code: belongsTo('coding', { async: false }),
  valueCodeableConcept: belongsTo('codeable-concept', { async: false }),
  valueQuantity: belongsTo('quantity', { async: false }),
  valueRange: belongsTo('range', { async: false })
});