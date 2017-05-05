import ElementSerializer from 'ember-fhir/serializers/element';

export default ElementSerializer.extend({
  attrs: {
    type_: { embedded: 'always' },
    whoReference: { embedded: 'always' },
    onBehalfOfReference: { embedded: 'always' }
  }
});