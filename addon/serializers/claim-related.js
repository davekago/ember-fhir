import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    claim: { embedded: 'always' },
    relationship: { embedded: 'always' },
    reference: { embedded: 'always' }
  }
});