import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  sequenceLinkId: attr(),
  revenue: belongsTo('codeable-concept', { async: false }),
  category: belongsTo('codeable-concept', { async: false }),
  service: belongsTo('codeable-concept', { async: false }),
  modifier: hasMany('codeable-concept', { async: true }),
  fee: belongsTo('money', { async: false }),
  noteNumber: attr(),
  adjudication: hasMany('explanation-of-benefit-adjudication', { async: true }),
  detail: hasMany('explanation-of-benefit-detail-1', { async: true })
});