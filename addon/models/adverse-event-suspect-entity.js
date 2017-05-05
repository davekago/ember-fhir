import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  instance: belongsTo('reference', { async: false }),
  causality: attr('string'),
  causalityAssessment: belongsTo('codeable-concept', { async: false }),
  causalityProductRelatedness: attr('string'),
  causalityMethod: belongsTo('codeable-concept', { async: false }),
  causalityAuthor: belongsTo('reference', { async: false }),
  causalityResult: belongsTo('codeable-concept', { async: false })
});