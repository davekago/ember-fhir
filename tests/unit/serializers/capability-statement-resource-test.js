import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-resource', 'Unit | Serializer | CapabilityStatement_Resource', {
  needs: [
    'serializer:capability-statement-resource',
    'model:reference',
    'model:capability-statement-interaction',
    'model:capability-statement-search-param',
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