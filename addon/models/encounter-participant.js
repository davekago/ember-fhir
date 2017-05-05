import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  type_: hasMany('codeable-concept', { async: true }),
  period: belongsTo('period', { async: false }),
  individual: belongsTo('reference', { async: false })
});