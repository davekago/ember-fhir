import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  status: attr('string'),
  type_: attr('string'),
  measure: belongsTo('reference', { async: false }),
  patient: belongsTo('reference', { async: false }),
  date: attr('date'),
  reportingOrganization: belongsTo('reference', { async: false }),
  period: belongsTo('period', { async: false }),
  group: hasMany('measure-report-group', { async: true }),
  evaluatedResources: belongsTo('reference', { async: false })
});