import DS from 'ember-data';
import Element from 'ember-fhir/models/element';

const { attr, hasMany } = DS;

export default Element.extend({
  type_: attr('string'),
  profile: attr(),
  mustSupport: attr(),
  codeFilter: hasMany('data-requirement-code-filter', { async: true }),
  dateFilter: hasMany('data-requirement-date-filter', { async: true })
});