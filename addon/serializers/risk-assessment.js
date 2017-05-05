import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    parent: { embedded: 'always' },
    method: { embedded: 'always' },
    code: { embedded: 'always' },
    subject: { embedded: 'always' },
    context: { embedded: 'always' },
    occurrencePeriod: { embedded: 'always' },
    condition: { embedded: 'always' },
    performer: { embedded: 'always' },
    reasonCodeableConcept: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    basis: { embedded: 'always' },
    prediction: { embedded: 'always' }
  }
});