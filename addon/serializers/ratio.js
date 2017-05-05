import ElementSerializer from 'ember-fhir/serializers/element';

export default ElementSerializer.extend({
  attrs: {numerator: { embedded: 'always' }, denominator: { embedded: 'always' }
  }
});