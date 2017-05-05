import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  autocreate: attr('boolean', { allowNull: true }),
  autodelete: attr('boolean', { allowNull: true }),
  resource: belongsTo('reference', { async: false })
});