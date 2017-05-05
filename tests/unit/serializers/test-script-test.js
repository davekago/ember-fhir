import { moduleForModel, test } from 'ember-qunit';

moduleForModel('test-script', 'Unit | Serializer | TestScript', {
  needs: [
    'serializer:test-script',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:test-script-origin',
    'model:test-script-destination',
    'model:test-script-metadata',
    'model:test-script-fixture',
    'model:reference',
    'model:test-script-variable',
    'model:test-script-rule',
    'model:test-script-ruleset',
    'model:test-script-setup',
    'model:test-script-test',
    'model:test-script-teardown',
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