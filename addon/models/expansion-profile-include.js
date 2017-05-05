import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { hasMany } = DS;

export default BackboneElement.extend({
  designation: hasMany('expansion-profile-designation-1', { async: true })
});