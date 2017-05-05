import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  identifier: hasMany('identifier', { async: true }),
  code: belongsTo('codeable-concept', { async: false }),
  period: belongsTo('period', { async: false }),
  issuer: belongsTo('reference', { async: false })
});