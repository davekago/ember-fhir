import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr } = DS;

export default BackboneElement.extend({
  daysOfWeek: attr(),
  allDay: attr('boolean', { allowNull: true }),
  availableStartTime: attr('date'),
  availableEndTime: attr('date')
});