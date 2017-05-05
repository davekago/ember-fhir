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
    valueQuantity: { embedded: 'always' },
    valueCodeableConcept: { embedded: 'always' },
    valueRange: { embedded: 'always' },
    valueRatio: { embedded: 'always' },
    valueSampledData: { embedded: 'always' },
    valueAttachment: { embedded: 'always' },
    valuePeriod: { embedded: 'always' },
    dataAbsentReason: { embedded: 'always' },
    interpretation: { embedded: 'always' },
    bodySite: { embedded: 'always' },
    method: { embedded: 'always' },
    specimen: { embedded: 'always' },
    device: { embedded: 'always' },
    referenceRange: { embedded: 'always' },
    related: { embedded: 'always' },
    component: { embedded: 'always' }
  }
});