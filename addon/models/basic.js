import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  code: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  created: attr('date'),
  author: belongsTo('reference', { async: false })
});