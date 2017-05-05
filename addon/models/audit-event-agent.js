import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo, hasMany } = DS;

export default BackboneElement.extend({
  role: hasMany('codeable-concept', { async: true }),
  reference: belongsTo('reference', { async: false }),
  userId: belongsTo('identifier', { async: false }),
  altId: attr('string'),
  name: attr('string'),
  requestor: attr('boolean', { allowNull: true }),
  location: belongsTo('reference', { async: false }),
  policy: attr(),
  media: belongsTo('coding', { async: false }),
  network: belongsTo('audit-event-network', { async: false }),
  purposeOfUse: hasMany('codeable-concept', { async: true })
});