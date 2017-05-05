import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    type_: { embedded: 'always' },
    schedule: { embedded: 'always' },
    quantity: { embedded: 'always' }
  }
});