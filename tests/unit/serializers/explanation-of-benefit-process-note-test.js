import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit-process-note', 'Unit | Serializer | ExplanationOfBenefit_ProcessNote', {
  needs: [
    'serializer:explanation-of-benefit-process-note',
    'model:codeable-concept',
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