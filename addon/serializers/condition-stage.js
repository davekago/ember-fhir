import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {summary: { embedded: 'always' }, assessment: { embedded: 'always' }
  }
});