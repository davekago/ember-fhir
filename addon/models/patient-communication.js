import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  language: belongsTo('codeable-concept', { async: false }),
  preferred: attr('boolean', { allowNull: true })
});