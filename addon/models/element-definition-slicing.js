import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  discriminator: hasMany('element-definition-discriminator', { async: true }),
  description: attr('string'),
  ordered: attr('boolean', { allowNull: true }),
  rules: attr('string')
});