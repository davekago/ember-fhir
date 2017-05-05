import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  path: attr('string'),
  valueDateTime: attr('date'),
  valuePeriod: belongsTo('period', { async: false }),
  valueDuration: belongsTo('duration', { async: false })
});