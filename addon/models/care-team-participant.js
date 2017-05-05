import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  role: belongsTo('codeable-concept', { async: false }),
  member: belongsTo('reference', { async: false }),
  onBehalfOf: belongsTo('reference', { async: false }),
  period: belongsTo('period', { async: false })
});