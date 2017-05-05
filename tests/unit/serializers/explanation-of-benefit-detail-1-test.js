import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-detail-1', 'Unit | Serializer | ExplanationOfBenefit_Detail1', {
  needs: [
    'serializer:explanation-of-benefit-detail-1',
    'model:codeable-concept',
    'model:money',
    'model:explanation-of-benefit-adjudication',
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