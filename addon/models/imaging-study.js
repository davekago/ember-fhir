import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  uid: attr('string'),
  accession: belongsTo('identifier', { async: false }),
  identifier: hasMany('identifier', { async: true }),
  availability: attr('string'),
  modalityList: hasMany('coding', { async: true }),
  patient: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  started: attr('date'),
  basedOn: hasMany('reference', { async: true }),
  referrer: belongsTo('reference', { async: false }),
  interpreter: hasMany('reference', { async: true }),
  endpoint: hasMany('reference', { async: true }),
  numberOfSeries: attr('number'),
  numberOfInstances: attr('number'),
  procedureReference: hasMany('reference', { async: true }),
  procedureCode: hasMany('codeable-concept', { async: true }),
  reason: belongsTo('codeable-concept', { async: false }),
  description: attr('string'),
  series: hasMany('imaging-study-series', { async: true })
});