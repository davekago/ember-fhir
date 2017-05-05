import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  target: belongsTo('reference', { async: false }),
  assurance: attr('string')
});