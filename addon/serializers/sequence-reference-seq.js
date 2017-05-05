import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    chromosome: { embedded: 'always' },
    referenceSeqId: { embedded: 'always' },
    referenceSeqPointer: { embedded: 'always' }
  }
});