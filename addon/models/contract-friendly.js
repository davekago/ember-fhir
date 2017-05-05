import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  contentAttachment: belongsTo('attachment', { async: false }),
  contentReference: belongsTo('reference', { async: false })
});