import { moduleForModel, test } from 'ember-qunit';

moduleForModel('care-plan-detail', 'Unit | Serializer | CarePlan_Detail', {
  needs: [
    'serializer:care-plan-detail',
    'model:codeable-concept',
    'model:reference',
    'model:timing',
    'model:period',
    'model:quantity',
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