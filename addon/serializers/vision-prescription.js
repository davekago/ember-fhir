import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    patient: { embedded: 'always' },
    encounter: { embedded: 'always' },
    prescriber: { embedded: 'always' },
    reasonCodeableConcept: { embedded: 'always' },
    reasonReference: { embedded: 'always' },
    dispense: { embedded: 'always' }
  }
});