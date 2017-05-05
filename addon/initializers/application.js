import DS from 'ember-data';
import FhirAdapter from 'ember-fhir/adapters/application';
import FhirSerializer from 'ember-fhir/serializers/application';

export const initialize = (application) => {
  application.register('adapter:-fhir', FhirAdapter);
  application.register('serializer:-fhir', FhirSerializer);

  DS.FhirAdapter = FhirAdapter;
  DS.FhirSerializer = FhirSerializer;
};

export default {
  name: 'application',
  initialize
};
