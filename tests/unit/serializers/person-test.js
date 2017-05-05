import { moduleForModel, test } from 'ember-qunit';

moduleForModel('person', 'Unit | Serializer | Person', {
  needs: [
    'serializer:person',
    'model:identifier',
    'model:human-name',
    'model:contact-point',
    'model:address',
    'model:attachment',
    'model:reference',
    'model:person-link',
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