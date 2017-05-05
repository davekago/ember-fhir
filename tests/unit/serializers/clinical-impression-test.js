import { moduleForModel, test } from 'ember-qunit';

moduleForModel('clinical-impression', 'Unit | Serializer | ClinicalImpression', {
  needs: [
    'serializer:clinical-impression',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:period',
    'model:clinical-impression-investigation',
    'model:clinical-impression-finding',
    'model:annotation',
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