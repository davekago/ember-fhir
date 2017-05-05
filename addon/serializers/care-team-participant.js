import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    role: { embedded: 'always' },
    member: { embedded: 'always' },
    onBehalfOf: { embedded: 'always' },
    period: { embedded: 'always' }
  }
});