import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  identifier: belongsTo('identifier', { async: false }),
  reference: belongsTo('reference', { async: false }),
  type_: belongsTo('coding', { async: false }),
  role: belongsTo('coding', { async: false }),
  lifecycle: belongsTo('coding', { async: false }),
  securityLabel: hasMany('coding', { async: true }),
  name: attr('string'),
  description: attr('string'),
  query: attr('string'),
  detail: hasMany('audit-event-detail', { async: true })
});