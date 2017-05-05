import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  type_: belongsTo('codeable-concept', { async: false }),
  lastSystemChange: attr('string'),
  source: belongsTo('reference', { async: false }),
  parent: belongsTo('reference', { async: false }),
  operationalStatus: hasMany('codeable-concept', { async: true }),
  parameterGroup: belongsTo('codeable-concept', { async: false }),
  measurementPrinciple: attr('string'),
  productionSpecification: hasMany('device-component-production-specification', { async: true }),
  languageCode: belongsTo('codeable-concept', { async: false })
});