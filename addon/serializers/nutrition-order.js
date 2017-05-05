import DomainResourceSerializer from 'ember-fhir/serializers/domain-resource';

export default DomainResourceSerializer.extend({
  attrs: {
    identifier: { embedded: 'always' },
    patient: { embedded: 'always' },
    encounter: { embedded: 'always' },
    orderer: { embedded: 'always' },
    allergyIntolerance: { embedded: 'always' },
    foodPreferenceModifier: { embedded: 'always' },
    excludeFoodModifier: { embedded: 'always' },
    oralDiet: { embedded: 'always' },
    supplement: { embedded: 'always' },
    enteralFormula: { embedded: 'always' }
  }
});