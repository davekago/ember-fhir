import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  category: belongsTo('codeable-concept', { async: false }),
  description: belongsTo('codeable-concept', { async: false }),
  priority: belongsTo('codeable-concept', { async: false }),
  start: belongsTo('codeable-concept', { async: false }),
  addresses: hasMany('codeable-concept', { async: true }),
  documentation: hasMany('related-artifact', { async: true }),
  target: hasMany('plan-definition-target', { async: true })
});