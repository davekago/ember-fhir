import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement-security', 'Unit | Serializer | CapabilityStatement_Security', {
  needs: [
    'serializer:capability-statement-security',
    'model:codeable-concept',
    'model:capability-statement-certificate',
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