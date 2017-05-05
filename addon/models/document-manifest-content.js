import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  pAttachment: belongsTo('attachment', { async: false }),
  pReference: belongsTo('reference', { async: false })
});