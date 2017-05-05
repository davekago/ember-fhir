import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    applies: { embedded: 'always' },
    type_: { embedded: 'always' },
    subType: { embedded: 'always' },
    topic: { embedded: 'always' },
    action: { embedded: 'always' },
    actionReason: { embedded: 'always' },
    securityLabel: { embedded: 'always' },
    agent: { embedded: 'always' },
    valuedItem: { embedded: 'always' },
    group: { embedded: 'always' }
  }
});