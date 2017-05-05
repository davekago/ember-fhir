import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  include: belongsTo('expansion-profile-include', { async: false }),
  exclude: belongsTo('expansion-profile-exclude', { async: false })
});