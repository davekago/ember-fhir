import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    whatReference: { embedded: 'always' },
    whatIdentifier: { embedded: 'always' },
    agent: { embedded: 'always' }
  }
});