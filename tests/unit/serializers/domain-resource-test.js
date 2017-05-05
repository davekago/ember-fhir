import { moduleForModel, test } from 'ember-qunit';

moduleForModel('domain-resource', 'Unit | Serializer | DomainResource', {
  needs: [
    'serializer:domain-resource',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:meta'
  ]
});

test('it serializes records', function(assert) {
  const record = this.subject(),
    serializeRecord = record.serialize();

  assert.ok(serializeRecord);
});