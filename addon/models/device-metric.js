import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  type_: belongsTo('codeable-concept', { async: false }),
  unit: belongsTo('codeable-concept', { async: false }),
  source: belongsTo('reference', { async: false }),
  parent: belongsTo('reference', { async: false }),
  operationalStatus: attr('string'),
  color: attr('string'),
  category: attr('string'),
  measurementPeriod: belongsTo('timing', { async: false }),
  calibration: hasMany('device-metric-calibration', { async: true })
});