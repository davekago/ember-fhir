import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    code: { embedded: 'always' },
    period: { embedded: 'always' },
    detail: { embedded: 'always' }
  }
});