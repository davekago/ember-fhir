import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-insurance', 'Unit | Serializer | ExplanationOfBenefit_Insurance', {
  needs: [
    'serializer:explanation-of-benefit-insurance',
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