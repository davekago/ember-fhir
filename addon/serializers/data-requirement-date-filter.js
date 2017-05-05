import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {valuePeriod: { embedded: 'always' }, valueDuration: { embedded: 'always' }
  }
});