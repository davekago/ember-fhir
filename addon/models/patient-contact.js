import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  relationship: hasMany('codeable-concept', { async: true }),
  name: belongsTo('human-name', { async: false }),
  telecom: hasMany('contact-point', { async: true }),
  address: belongsTo('address', { async: false }),
  gender: attr('string'),
  organization: belongsTo('reference', { async: false }),
  period: belongsTo('period', { async: false })
});