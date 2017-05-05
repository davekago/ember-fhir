import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { belongsTo } = DS;

export default BackboneElement.extend({
  class: belongsTo('coding', { async: false }),
  period: belongsTo('period', { async: false })
});