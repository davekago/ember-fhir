import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  link: hasMany('bundle-link', { async: true }),
  fullUrl: attr('string'),
  resource: belongsTo('resource', { async: false }),
  search: belongsTo('bundle-search', { async: false }),
  request: belongsTo('bundle-request', { async: false }),
  response: belongsTo('bundle-response', { async: false })
});