import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, belongsTo } = DS;

export default Element.extend({
  type_: attr('string'),
  eventName: attr('string'),
  eventTimingTiming: belongsTo('timing', { async: false }),
  eventTimingReference: belongsTo('reference', { async: false }),
  eventTimingDate: attr('date'),
  eventTimingDateTime: attr('date'),
  eventData: belongsTo('data-requirement', { async: false })
});