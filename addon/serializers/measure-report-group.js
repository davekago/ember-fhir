import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    population: { embedded: 'always' },
    stratifier: { embedded: 'always' }
  }
});