import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-information', 'Unit | Serializer | ExplanationOfBenefit_Information', {
  needs: [
    'serializer:explanation-of-benefit-information',
    'model:codeable-concept',
    'model:period',
    'model:quantity',
    'model:attachment',
    'model:reference',
    'model:coding',
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