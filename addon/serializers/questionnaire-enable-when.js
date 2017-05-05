import BackboneElementSerializer from 'ember-fhir/serializers/backbone-element';

export default BackboneElementSerializer.extend({
  attrs: {
    answerAttachment: { embedded: 'always' },
    answerCoding: { embedded: 'always' },
    answerQuantity: { embedded: 'always' },
    answerReference: { embedded: 'always' }
  }
});