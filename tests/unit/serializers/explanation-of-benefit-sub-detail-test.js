import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-sub-detail', 'Unit | Serializer | ExplanationOfBenefit_SubDetail', {
  needs: [
    'serializer:explanation-of-benefit-sub-detail',
    'model:codeable-concept',
    'model:quantity',
    'model:money',
    'model:reference',
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