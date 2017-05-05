import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  purpose: belongsTo('codeable-concept', { async: false }),
  name: belongsTo('human-name', { async: false }),
  telecom: hasMany('contact-point', { async: true }),
  address: belongsTo('address', { async: false })
});