import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    accession: { embedded: 'always' },
    identifier: { embedded: 'always' },
    modalityList: { embedded: 'always' },
    patient: { embedded: 'always' },
    context: { embedded: 'always' },
    basedOn: { embedded: 'always' },
    referrer: { embedded: 'always' },
    interpreter: { embedded: 'always' },
    endpoint: { embedded: 'always' },
    procedureReference: { embedded: 'always' },
    procedureCode: { embedded: 'always' },
    reason: { embedded: 'always' },
    series: { embedded: 'always' }
  }
});