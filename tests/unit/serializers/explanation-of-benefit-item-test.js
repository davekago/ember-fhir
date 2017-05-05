import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-item', 'Unit | Serializer | ExplanationOfBenefit_Item', {
  needs: [
    'serializer:explanation-of-benefit-item',
    'model:codeable-concept',
    'model:period',
    'model:address',
    'model:reference',
    'model:quantity',
    'model:money',
    'model:explanation-of-benefit-adjudication',
    'model:explanation-of-benefit-detail',
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