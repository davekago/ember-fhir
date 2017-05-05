import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    instance: { embedded: 'always' },
    causalityAssessment: { embedded: 'always' },
    causalityMethod: { embedded: 'always' },
    causalityAuthor: { embedded: 'always' },
    causalityResult: { embedded: 'always' }
  }
});