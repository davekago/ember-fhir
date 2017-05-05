import { moduleForModel, test } from 'ember-qunit';

moduleForModel('data-requirement', 'Unit | Serializer | DataRequirement', {
  needs: [
    'serializer:data-requirement',
    'model:data-requirement-code-filter',
    'model:data-requirement-date-filter',
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