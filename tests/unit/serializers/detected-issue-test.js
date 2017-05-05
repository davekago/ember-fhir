import { moduleForModel, test } from 'ember-qunit';

moduleForModel('detected-issue', 'Unit | Serializer | DetectedIssue', {
  needs: [
    'serializer:detected-issue',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:detected-issue-mitigation',
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