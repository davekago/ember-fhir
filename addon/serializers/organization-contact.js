import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    purpose: { embedded: 'always' },
    name: { embedded: 'always' },
    telecom: { embedded: 'always' },
    address: { embedded: 'always' }
  }
});