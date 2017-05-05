import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-procedure', 'Unit | Serializer | ExplanationOfBenefit_Procedure', {
  needs: [
    'serializer:explanation-of-benefit-procedure',
    'model:codeable-concept',
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