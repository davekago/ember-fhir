import { moduleForModel, test } from 'ember-qunit';

moduleForModel('clinical-impression-investigation', 'Unit | Serializer | ClinicalImpression_Investigation', {
  needs: [
    'serializer:clinical-impression-investigation',
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