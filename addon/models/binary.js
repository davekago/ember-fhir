import DS from 'ember-data';
import Resource from 'ember-fhir/models/resource';

const { attr, belongsTo } = DS;

export default Resource.extend({
  contentType: attr('string'),
  securityContext: belongsTo('reference', { async: false }),
  content: attr('string')
});