import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  role: attr('string'),
  whatUri: attr('string'),
  whatReference: belongsTo('reference', { async: false }),
  whatIdentifier: belongsTo('identifier', { async: false }),
  agent: hasMany('provenance-agent', { async: true })
});