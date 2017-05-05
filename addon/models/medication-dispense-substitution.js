import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  wasSubstituted: attr('boolean', { allowNull: true }),
  type_: belongsTo('codeable-concept', { async: false }),
  reason: hasMany('codeable-concept', { async: true }),
  responsibleParty: hasMany('reference', { async: true })
});