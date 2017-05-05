import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-rest', 'Unit | Serializer | CapabilityStatement_Rest', {
  needs: [
    'serializer:capability-statement-rest',
    'model:capability-statement-security',
    'model:capability-statement-resource',
    'model:capability-statement-interaction-1',
    'model:capability-statement-search-param',
    'model:capability-statement-operation',
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