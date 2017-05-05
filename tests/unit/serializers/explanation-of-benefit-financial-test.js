import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-financial', 'Unit | Serializer | ExplanationOfBenefit_Financial', {
  needs: [
    'serializer:explanation-of-benefit-financial',
    'model:codeable-concept',
    'model:money',
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