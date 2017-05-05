import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  status: attr('string'),
  location: attr('string'),
  etag: attr('string'),
  lastModified: attr('string'),
  outcome: belongsTo('resource', { async: false })
});