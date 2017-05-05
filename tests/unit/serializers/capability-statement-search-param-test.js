import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-search-param', 'Unit | Serializer | CapabilityStatement_SearchParam', {
  needs: [
    'serializer:capability-statement-search-param',
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