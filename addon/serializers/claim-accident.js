import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    type_: { embedded: 'always' },
    locationAddress: { embedded: 'always' },
    locationReference: { embedded: 'always' }
  }
});