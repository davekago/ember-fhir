import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  active: attr('boolean', { allowNull: true }),
  type_: attr('string'),
  actual: attr('boolean', { allowNull: true }),
  code: belongsTo('codeable-concept', { async: false }),
  name: attr('string'),
  quantity: attr('number'),
  characteristic: hasMany('group-characteristic', { async: true }),
  member: hasMany('group-member', { async: true })
});