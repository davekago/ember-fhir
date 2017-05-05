import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    imagingStudy: { embedded: 'always' },
    endpoint: { embedded: 'always' },
    series: { embedded: 'always' }
  }
});