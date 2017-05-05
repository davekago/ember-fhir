import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  contentString: attr('string'),
  contentAttachment: belongsTo('attachment', { async: false }),
  contentReference: belongsTo('reference', { async: false })
});