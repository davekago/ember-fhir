import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  type_: attr('string'),
  period: belongsTo('period', { async: false }),
  actor: hasMany('consent-actor-1', { async: true }),
  action: hasMany('codeable-concept', { async: true }),
  securityLabel: hasMany('coding', { async: true }),
  purpose: hasMany('coding', { async: true }),
  class: hasMany('coding', { async: true }),
  code: hasMany('coding', { async: true }),
  dataPeriod: belongsTo('period', { async: false }),
  data_: hasMany('consent-data-1', { async: true })
});