import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-requirement-date-filter', 'Unit | Serializer | DataRequirement_DateFilter', {
  needs: [
    'serializer:data-requirement-date-filter',
    'model:period',
    'model:duration',
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