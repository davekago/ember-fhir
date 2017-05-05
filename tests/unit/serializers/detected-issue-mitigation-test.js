import { moduleForModel, test } from 'ember-qunit';

moduleForModel('detected-issue-mitigation', 'Unit | Serializer | DetectedIssue_Mitigation', {
  needs: [
    'serializer:detected-issue-mitigation',
    'model:codeable-concept',
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