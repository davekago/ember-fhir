import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-accident', 'Unit | Serializer | ExplanationOfBenefit_Accident', {
  needs: [
    'serializer:explanation-of-benefit-accident',
    'model:codeable-concept',
    'model:address',
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