import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  role: hasMany('codeable-concept', { async: true }),
  whoUri: attr('string'),
  whoReference: belongsTo('reference', { async: false }),
  onBehalfOfUri: attr('string'),
  onBehalfOfReference: belongsTo('reference', { async: false }),
  relatedAgentType: belongsTo('codeable-concept', { async: false })
});