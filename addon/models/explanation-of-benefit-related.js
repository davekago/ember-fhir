import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  claim: belongsTo('reference', { async: false }),
  relationship: belongsTo('codeable-concept', { async: false }),
  reference: belongsTo('identifier', { async: false })
});