import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  active: attr('boolean', { allowNull: true }),
  serviceCategory: belongsTo('codeable-concept', { async: false }),
  serviceType: hasMany('codeable-concept', { async: true }),
  specialty: hasMany('codeable-concept', { async: true }),
  actor: hasMany('reference', { async: true }),
  planningHorizon: belongsTo('period', { async: false }),
  comment: attr('string')
});