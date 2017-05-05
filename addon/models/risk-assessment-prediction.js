import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  outcome: belongsTo('codeable-concept', { async: false }),
  probabilityDecimal: attr('number'),
  probabilityRange: belongsTo('range', { async: false }),
  qualitativeRisk: belongsTo('codeable-concept', { async: false }),
  relativeRisk: attr('number'),
  whenPeriod: belongsTo('period', { async: false }),
  whenRange: belongsTo('range', { async: false }),
  rationale: attr('string')
});