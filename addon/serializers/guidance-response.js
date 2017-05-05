import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    module: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    performer: { embedded: 'always' },
    reasonCodeableConcept: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    note: { embedded: 'always' },
    evaluationMessage: { embedded: 'always' },
    outputParameters: { embedded: 'always' },
    result: { embedded: 'always' },
    dataRequirement: { embedded: 'always' }
  }
});