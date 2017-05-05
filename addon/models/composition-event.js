import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  code: hasMany('codeable-concept', { async: true }),
  period: belongsTo('period', { async: false }),
  detail: hasMany('reference', { async: true })
});