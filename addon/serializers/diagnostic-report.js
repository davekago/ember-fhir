import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    category: { embedded: 'always' },
    code: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    effectivePeriod: { embedded: 'always' },
    performer: { embedded: 'always' },
    specimen: { embedded: 'always' },
    result: { embedded: 'always' },
    imagingStudy: { embedded: 'always' },
    image: { embedded: 'always' },
    codedDiagnosis: { embedded: 'always' },
    presentedForm: { embedded: 'always' }
  }
});