import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  code: belongsTo('codeable-concept', { async: false }),
  status: attr('string'),
  isBrand: attr('boolean', { allowNull: true }),
  isOverTheCounter: attr('boolean', { allowNull: true }),
  manufacturer: belongsTo('reference', { async: false }),
  form: belongsTo('codeable-concept', { async: false }),
  ingredient: hasMany('medication-ingredient', { async: true }),
  package: belongsTo('medication-package', { async: false }),
  image: hasMany('attachment', { async: true })
});