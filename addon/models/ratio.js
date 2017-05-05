import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { belongsTo } = DS;

export default Element.extend({
  numerator: belongsTo('quantity', { async: false }),
  denominator: belongsTo('quantity', { async: false })
});