import { moduleForModel, test } from 'ember-qunit';

moduleForModel('explanation-of-benefit', 'Unit | Serializer | ExplanationOfBenefit', {
  needs: [
    'serializer:explanation-of-benefit',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period',
    'model:explanation-of-benefit-related',
    'model:explanation-of-benefit-payee',
    'model:explanation-of-benefit-information',
    'model:explanation-of-benefit-care-team',
    'model:explanation-of-benefit-diagnosis',
    'model:explanation-of-benefit-procedure',
    'model:explanation-of-benefit-insurance',
    'model:explanation-of-benefit-accident',
    'model:explanation-of-benefit-item',
    'model:explanation-of-benefit-add-item',
    'model:money',
    'model:explanation-of-benefit-payment',
    'model:explanation-of-benefit-process-note',
    'model:explanation-of-benefit-benefit-balance',
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