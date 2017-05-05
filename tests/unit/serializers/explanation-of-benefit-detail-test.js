import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-detail', 'Unit | Serializer | ExplanationOfBenefit_Detail', {
  needs: [
    'serializer:explanation-of-benefit-detail',
    'model:codeable-concept',
    'model:quantity',
    'model:money',
    'model:reference',
    'model:explanation-of-benefit-adjudication',
    'model:explanation-of-benefit-sub-detail',
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