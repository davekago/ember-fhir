import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { belongsTo } = DS;

export default Element.extend({
  low: belongsTo('quantity', { async: false }),
  high: belongsTo('quantity', { async: false })
});