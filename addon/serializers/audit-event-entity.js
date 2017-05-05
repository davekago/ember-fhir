import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    reference: { embedded: 'always' },
    type_: { embedded: 'always' },
    role: { embedded: 'always' },
    lifecycle: { embedded: 'always' },
    securityLabel: { embedded: 'always' },
    detail: { embedded: 'always' }
  }
});