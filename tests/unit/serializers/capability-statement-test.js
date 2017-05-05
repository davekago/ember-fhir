import { moduleForModel, test } from 'ember-qunit';

moduleForModel('capability-statement', 'Unit | Serializer | CapabilityStatement', {
  needs: [
    'serializer:capability-statement',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:capability-statement-software',
    'model:capability-statement-implementation',
    'model:reference',
    'model:capability-statement-rest',
    'model:capability-statement-messaging',
    'model:capability-statement-document',
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