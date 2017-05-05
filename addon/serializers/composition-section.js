import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    code: { embedded: 'always' },
    text: { embedded: 'always' },
    orderedBy: { embedded: 'always' },
    entry: { embedded: 'always' },
    emptyReason: { embedded: 'always' },
    section: { embedded: 'always' }
  }
});