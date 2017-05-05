import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  endpoint: hasMany('capability-statement-endpoint', { async: true }),
  reliableCache: attr('number'),
  documentation: attr('string'),
  supportedMessage: hasMany('capability-statement-supported-message', { async: true }),
  event: hasMany('capability-statement-event', { async: true })
});