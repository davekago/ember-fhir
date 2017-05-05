import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  coverage: belongsTo('reference', { async: false }),
  contract: belongsTo('reference', { async: false }),
  benefitBalance: hasMany('eligibility-response-benefit-balance', { async: true })
});