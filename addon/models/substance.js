import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  category: hasMany('codeable-concept', { async: true }),
  code: belongsTo('codeable-concept', { async: false }),
  description: attr('string'),
  instance: hasMany('substance-instance', { async: true }),
  ingredient: hasMany('substance-ingredient', { async: true })
});