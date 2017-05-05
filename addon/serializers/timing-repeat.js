import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    boundsDuration: { embedded: 'always' },
    boundsRange: { embedded: 'always' },
    boundsPeriod: { embedded: 'always' }
  }
});