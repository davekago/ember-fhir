import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  operation: belongsTo('test-report-operation', { async: false }),
  assert: belongsTo('test-report-assert', { async: false })
});