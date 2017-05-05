import { moduleForModel, test } from 'ember-qunit';

moduleForModel('body-site', 'Unit | Serializer | BodySite', {
  needs: [
    'serializer:body-site',
    'model:identifier',
    'model:codeable-concept',
    'model:attachment',
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