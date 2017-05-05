import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  type_: belongsTo('coding', { async: false }),
  party: belongsTo('reference', { async: false }),
  signature: hasMany('signature', { async: true })
});