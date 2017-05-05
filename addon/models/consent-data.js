import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  meaning: attr('string'),
  reference: belongsTo('reference', { async: false })
});