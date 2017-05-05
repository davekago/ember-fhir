import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  outcomeCodeableConcept: hasMany('codeable-concept', { async: true }),
  outcomeReference: hasMany('reference', { async: true }),
  progress: hasMany('annotation', { async: true }),
  reference: belongsTo('reference', { async: false }),
  detail: belongsTo('care-plan-detail', { async: false })
});