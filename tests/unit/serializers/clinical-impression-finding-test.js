import { moduleForModel, test } from 'ember-qunit';

moduleForModel('clinical-impression-finding', 'Unit | Serializer | ClinicalImpression_Finding', {
  needs: [
    'serializer:clinical-impression-finding',
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