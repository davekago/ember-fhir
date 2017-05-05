import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  mode: attr(),
  time: attr('date'),
  party: belongsTo('reference', { async: false })
});