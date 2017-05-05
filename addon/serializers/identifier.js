import ElementSerializer from 'ember-fhir/serializers/element';

export default ElementSerializer.extend({
  attrs: {
    type_: { embedded: 'always' },
    period: { embedded: 'always' },
    assigner: { embedded: 'always' }
  }
});