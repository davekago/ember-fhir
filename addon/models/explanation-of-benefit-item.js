import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  sequence: attr('number'),
  careTeamLinkId: attr(),
  diagnosisLinkId: attr(),
  procedureLinkId: attr(),
  informationLinkId: attr(),
  revenue: belongsTo('codeable-concept', { async: false }),
  category: belongsTo('codeable-concept', { async: false }),
  service: belongsTo('codeable-concept', { async: false }),
  modifier: hasMany('codeable-concept', { async: true }),
  programCode: hasMany('codeable-concept', { async: true }),
  servicedDate: attr('date'),
  servicedPeriod: belongsTo('period', { async: false }),
  locationCodeableConcept: belongsTo('codeable-concept', { async: false }),
  locationAddress: belongsTo('address', { async: false }),
  locationReference: belongsTo('reference', { async: false }),
  quantity: belongsTo('quantity', { async: false }),
  unitPrice: belongsTo('money', { async: false }),
  factor: attr('number'),
  net: belongsTo('money', { async: false }),
  udi: hasMany('reference', { async: true }),
  bodySite: belongsTo('codeable-concept', { async: false }),
  subSite: hasMany('codeable-concept', { async: true }),
  encounter: hasMany('reference', { async: true }),
  noteNumber: attr(),
  adjudication: hasMany('explanation-of-benefit-adjudication', { async: true }),
  detail: hasMany('explanation-of-benefit-detail', { async: true })
});