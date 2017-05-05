import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  identifier: belongsTo('identifier', { async: false }),
  ref: belongsTo('reference', { async: false })
});