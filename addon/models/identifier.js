import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo } = DS;

export default Element.extend({
  use: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  system: attr('string'),
  value: attr('string'),
  period: belongsTo('period', { async: false }),
  assigner: belongsTo('reference', { async: false })
});