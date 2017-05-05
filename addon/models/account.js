import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  status: attr('string'),
  type_: belongsTo('codeable-concept', { async: false }),
  name: attr('string'),
  subject: belongsTo('reference', { async: false }),
  period: belongsTo('period', { async: false }),
  active: belongsTo('period', { async: false }),
  balance: belongsTo('money', { async: false }),
  coverage: hasMany('account-coverage', { async: true }),
  owner: belongsTo('reference', { async: false }),
  description: attr('string'),
  guarantor: hasMany('account-guarantor', { async: true })
});