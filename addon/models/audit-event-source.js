import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  site: attr('string'),
  identifier: belongsTo('identifier', { async: false }),
  type_: hasMany('coding', { async: true })
});