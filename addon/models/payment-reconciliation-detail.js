import DS from 'ember-data';
import BackboneElement from 'ember-fhir/models/backbone-element';

const { attr, belongsTo } = DS;

export default BackboneElement.extend({
  type_: belongsTo('codeable-concept', { async: false }),
  request: belongsTo('reference', { async: false }),
  response: belongsTo('reference', { async: false }),
  submitter: belongsTo('reference', { async: false }),
  payee: belongsTo('reference', { async: false }),
  date: attr('date'),
  amount: belongsTo('money', { async: false })
});