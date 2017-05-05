import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-adjudication', 'Unit | Serializer | ExplanationOfBenefit_Adjudication', {
  needs: [
    'serializer:explanation-of-benefit-adjudication',
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