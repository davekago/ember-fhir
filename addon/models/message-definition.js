import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  url: attr('string'),
  identifier: belongsTo('identifier', { async: false }),
  version: attr('string'),
  name: attr('string'),
  title: attr('string'),
  status: attr('string'),
  experimental: attr('boolean', { allowNull: true }),
  date: attr('date'),
  publisher: attr('string'),
  contact: hasMany('contact-detail', { async: true }),
  description: attr('string'),
  useContext: hasMany('usage-context', { async: true }),
  jurisdiction: hasMany('codeable-concept', { async: true }),
  purpose: attr('string'),
  copyright: attr('string'),
  base: belongsTo('reference', { async: false }),
  parent: hasMany('reference', { async: true }),
  replaces: hasMany('reference', { async: true }),
  event: belongsTo('coding', { async: false }),
  category: attr('string'),
  focus: hasMany('message-definition-focus', { async: true }),
  responseRequired: attr('boolean', { allowNull: true }),
  allowedResponse: hasMany('message-definition-allowed-response', { async: true })
});