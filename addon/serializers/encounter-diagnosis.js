import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {condition: { embedded: 'always' }, role: { embedded: 'always' }
  }
});