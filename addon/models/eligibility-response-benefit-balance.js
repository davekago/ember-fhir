import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  category: belongsTo('codeable-concept', { async: false }),
  subCategory: belongsTo('codeable-concept', { async: false }),
  excluded: attr('boolean', { allowNull: true }),
  name: attr('string'),
  description: attr('string'),
  network: belongsTo('codeable-concept', { async: false }),
  unit: belongsTo('codeable-concept', { async: false }),
  term: belongsTo('codeable-concept', { async: false }),
  financial: hasMany('eligibility-response-financial', { async: true })
});