import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  sequence: attr('number'),
  provider: belongsTo('reference', { async: false }),
  responsible: attr('boolean', { allowNull: true }),
  role: belongsTo('codeable-concept', { async: false }),
  qualification: belongsTo('codeable-concept', { async: false })
});