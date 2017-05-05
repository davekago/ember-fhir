import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  revenue: belongsTo('codeable-concept', { async: false }),
  category: belongsTo('codeable-concept', { async: false }),
  service: belongsTo('codeable-concept', { async: false }),
  modifier: hasMany('codeable-concept', { async: true }),
  fee: belongsTo('money', { async: false }),
  noteNumber: attr(),
  adjudication: hasMany('claim-response-adjudication', { async: true })
});