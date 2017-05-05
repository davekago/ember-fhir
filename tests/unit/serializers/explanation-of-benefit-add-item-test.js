import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-add-item', 'Unit | Serializer | ExplanationOfBenefit_AddItem', {
  needs: [
    'serializer:explanation-of-benefit-add-item',
    'model:codeable-concept',
    'model:money',
    'model:explanation-of-benefit-adjudication',
    'model:explanation-of-benefit-detail-1',
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