import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: belongsTo('identifier', { async: false }),
  status: attr('string'),
  category: hasMany('codeable-concept', { async: true }),
  patient: belongsTo('reference', { async: false }),
  period: belongsTo('period', { async: false }),
  dateTime: attr('date'),
  consentingParty: hasMany('reference', { async: true }),
  actor: hasMany('consent-actor', { async: true }),
  action: hasMany('codeable-concept', { async: true }),
  organization: hasMany('reference', { async: true }),
  sourceAttachment: belongsTo('attachment', { async: false }),
  sourceIdentifier: belongsTo('identifier', { async: false }),
  sourceReference: belongsTo('reference', { async: false }),
  policy: hasMany('consent-policy', { async: true }),
  policyRule: attr('string'),
  securityLabel: hasMany('coding', { async: true }),
  purpose: hasMany('coding', { async: true }),
  dataPeriod: belongsTo('period', { async: false }),
  data_: hasMany('consent-data', { async: true }),
  except: hasMany('consent-except', { async: true })
});