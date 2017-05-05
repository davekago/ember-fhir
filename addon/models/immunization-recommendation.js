import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  patient: belongsTo('reference', { async: false }),
  recommendation: hasMany('immunization-recommendation-recommendation', { async: true })
});