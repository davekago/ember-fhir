import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    type_: { embedded: 'always' },
    source: { embedded: 'always' },
    parent: { embedded: 'always' },
    operationalStatus: { embedded: 'always' },
    parameterGroup: { embedded: 'always' },
    productionSpecification: { embedded: 'always' },
    languageCode: { embedded: 'always' }
  }
});