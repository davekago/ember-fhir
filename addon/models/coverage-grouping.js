import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  group: attr('string'),
  groupDisplay: attr('string'),
  subGroup: attr('string'),
  subGroupDisplay: attr('string'),
  plan: attr('string'),
  planDisplay: attr('string'),
  subPlan: attr('string'),
  subPlanDisplay: attr('string'),
  class: attr('string'),
  classDisplay: attr('string'),
  subClass: attr('string'),
  subClassDisplay: attr('string')
});