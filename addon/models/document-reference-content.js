import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  attachment: belongsTo('attachment', { async: false }),
  format: belongsTo('coding', { async: false })
});