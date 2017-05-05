import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    source: { embedded: 'always' },
    target: { embedded: 'always' },
    rule: { embedded: 'always' },
    dependent: { embedded: 'always' }
  }
});