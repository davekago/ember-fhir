import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    low: { embedded: 'always' },
    high: { embedded: 'always' },
    type_: { embedded: 'always' },
    appliesTo: { embedded: 'always' },
    age: { embedded: 'always' }
  }
});