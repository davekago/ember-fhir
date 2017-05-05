import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-document', 'Unit | Serializer | CapabilityStatement_Document', {
  needs: [
    'serializer:capability-statement-document',
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