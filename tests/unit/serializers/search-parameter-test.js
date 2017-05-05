import { moduleForModel, test } from 'ember-qunit';

moduleForModel('search-parameter', 'Unit | Serializer | SearchParameter', {
  needs: [
    'serializer:search-parameter',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:search-parameter-component',
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