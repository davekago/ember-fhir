import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    role: { embedded: 'always' },
    whoReference: { embedded: 'always' },
    onBehalfOfReference: { embedded: 'always' },
    relatedAgentType: { embedded: 'always' }
  }
});