import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract', 'Unit | Serializer | Contract', {
  needs: [
    'serializer:contract',
    'model:identifier',
    'model:period',
    'model:reference',
    'model:codeable-concept',
    'model:coding',
    'model:contract-agent',
    'model:contract-signer',
    'model:contract-valued-item',
    'model:contract-term',
    'model:attachment',
    'model:contract-friendly',
    'model:contract-legal',
    'model:contract-rule',
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