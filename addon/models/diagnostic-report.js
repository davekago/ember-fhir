import DS from 'ember-data';
import DomainResource from 'ember-fhir/models/domain-resource';

const { attr, belongsTo, hasMany } = DS;

export default DomainResource.extend({
  identifier: hasMany('identifier', { async: true }),
  basedOn: hasMany('reference', { async: true }),
  status: attr('string'),
  category: belongsTo('codeable-concept', { async: false }),
  code: belongsTo('codeable-concept', { async: false }),
  subject: belongsTo('reference', { async: false }),
  context: belongsTo('reference', { async: false }),
  effectiveDateTime: attr('date'),
  effectivePeriod: belongsTo('period', { async: false }),
  issued: attr('string'),
  performer: hasMany('diagnostic-report-performer', { async: true }),
  specimen: hasMany('reference', { async: true }),
  result: hasMany('reference', { async: true }),
  imagingStudy: hasMany('reference', { async: true }),
  image: hasMany('diagnostic-report-image', { async: true }),
  conclusion: attr('string'),
  codedDiagnosis: hasMany('codeable-concept', { async: true }),
  presentedForm: hasMany('attachment', { async: true })
});