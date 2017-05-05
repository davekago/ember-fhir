import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  type_: belongsTo('coding', { async: false }),
  resource: attr('string'),
  label: attr('string'),
  description: attr('string'),
  accept: attr('string'),
  contentType: attr('string'),
  destination: attr('number'),
  encodeRequestUrl: attr('boolean', { allowNull: true }),
  origin: attr('number'),
  params: attr('string'),
  requestHeader: hasMany('test-script-request-header', { async: true }),
  requestId: attr('string'),
  responseId: attr('string'),
  sourceId: attr('string'),
  targetId: attr('string'),
  url: attr('string')
});