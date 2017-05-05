import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    provider: { embedded: 'always' },
    role: { embedded: 'always' },
    qualification: { embedded: 'always' }
  }
});