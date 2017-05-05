import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {input: { embedded: 'always' }, rule: { embedded: 'always' }
  }
});