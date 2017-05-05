import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    applies: { embedded: 'always' },
    subject: { embedded: 'always' },
    topic: { embedded: 'always' },
    authority: { embedded: 'always' },
    domain: { embedded: 'always' },
    type_: { embedded: 'always' },
    subType: { embedded: 'always' },
    action: { embedded: 'always' },
    actionReason: { embedded: 'always' },
    decisionType: { embedded: 'always' },
    contentDerivative: { embedded: 'always' },
    securityLabel: { embedded: 'always' },
    agent: { embedded: 'always' },
    signer: { embedded: 'always' },
    valuedItem: { embedded: 'always' },
    term: { embedded: 'always' },
    bindingAttachment: { embedded: 'always' },
    bindingReference: { embedded: 'always' },
    friendly: { embedded: 'always' },
    legal: { embedded: 'always' },
    rule: { embedded: 'always' }
  }
});