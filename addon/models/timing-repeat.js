import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  boundsDuration: belongsTo('duration', { async: false }),
  boundsRange: belongsTo('range', { async: false }),
  boundsPeriod: belongsTo('period', { async: false }),
  count: attr('number'),
  countMax: attr('number'),
  duration: attr('number'),
  durationMax: attr('number'),
  durationUnit: attr('string'),
  frequency: attr('number'),
  frequencyMax: attr('number'),
  period: attr('number'),
  periodMax: attr('number'),
  periodUnit: attr('string'),
  dayOfWeek: attr(),
  timeOfDay: attr(),
  when: attr(),
  offset: attr('number')
});