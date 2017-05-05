import ElementSerializer from 'ember-fhir/serializers/element';

export default ElementSerializer.extend({
  attrs: {low: { embedded: 'always' }, high: { embedded: 'always' }
  }
});