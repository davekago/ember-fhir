import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  species: belongsTo('codeable-concept', { async: false }),
  breed: belongsTo('codeable-concept', { async: false }),
  genderStatus: belongsTo('codeable-concept', { async: false })
});