import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    code: { embedded: 'always' },
    period: { embedded: 'always' },
    issuer: { embedded: 'always' }
  }
});