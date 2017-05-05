import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    patient: { embedded: 'always' },
    insurer: { embedded: 'always' },
    requestProvider: { embedded: 'always' },
    requestOrganization: { embedded: 'always' },
    request: { embedded: 'always' },
    outcome: { embedded: 'always' },
    payeeType: { embedded: 'always' },
    item: { embedded: 'always' },
    addItem: { embedded: 'always' },
    error: { embedded: 'always' },
    totalCost: { embedded: 'always' },
    unallocDeductable: { embedded: 'always' },
    totalBenefit: { embedded: 'always' },
    payment: { embedded: 'always' },
    reserved: { embedded: 'always' },
    form: { embedded: 'always' },
    processNote: { embedded: 'always' },
    communicationRequest: { embedded: 'always' },
    insurance: { embedded: 'always' }
  }
});