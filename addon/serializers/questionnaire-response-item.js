import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    subject: { embedded: 'always' },
    answer: { embedded: 'always' },
    item: { embedded: 'always' }
  }
});