import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-payee', 'Unit | Serializer | ExplanationOfBenefit_Payee', {
  needs: [
    'serializer:explanation-of-benefit-payee',
    'model:codeable-concept',
    'model:reference',
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});