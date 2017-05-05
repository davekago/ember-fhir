import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  active: attr('boolean', { allowNull: true }),
  code: belongsTo('codeable-concept', { async: false }),
  qualifier: hasMany('codeable-concept', { async: true }),
  description: attr('string'),
  image: hasMany('attachment', { async: true }),
  patient: belongsTo('reference', { async: false })
});