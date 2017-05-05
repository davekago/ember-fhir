import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    role: { embedded: 'always' },
    reference: { embedded: 'always' },
    userId: { embedded: 'always' },
    location: { embedded: 'always' },
    media: { embedded: 'always' },
    network: { embedded: 'always' },
    purposeOfUse: { embedded: 'always' }
  }
});