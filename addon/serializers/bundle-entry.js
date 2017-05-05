import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    link: { embedded: 'always' },
    resource: { embedded: 'always' },
    search: { embedded: 'always' },
    request: { embedded: 'always' },
    response: { embedded: 'always' }
  }
});