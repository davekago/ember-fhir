import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, hasMany } = DS;

export default BackboneElement.extend({
  cors: attr('boolean', { allowNull: true }),
  service: hasMany('codeable-concept', { async: true }),
  description: attr('string'),
  certificate: hasMany('capability-statement-certificate', { async: true })
});