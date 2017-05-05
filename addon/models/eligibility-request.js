import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  priority: belongsTo('codeable-concept', { async: false }),
  patient: belongsTo('reference', { async: false }),
  servicedDate: attr('date'),
  servicedPeriod: belongsTo('period', { async: false }),
  created: attr('date'),
  enterer: belongsTo('reference', { async: false }),
  provider: belongsTo('reference', { async: false }),
  organization: belongsTo('reference', { async: false }),
  insurer: belongsTo('reference', { async: false }),
  facility: belongsTo('reference', { async: false }),
  coverage: belongsTo('reference', { async: false }),
  businessArrangement: attr('string'),
  benefitCategory: belongsTo('codeable-concept', { async: false }),
  benefitSubCategory: belongsTo('codeable-concept', { async: false })
});