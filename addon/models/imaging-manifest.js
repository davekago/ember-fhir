import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  patient: belongsTo('reference', { async: false }),
  authoringTime: attr('date'),
  author: belongsTo('reference', { async: false }),
  description: attr('string'),
  study: hasMany('imaging-manifest-study', { async: true })
});