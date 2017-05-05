import { moduleForModel, test } from 'ember-qunit';

moduleForModel('detected-issue', 'Unit | Model | DetectedIssue', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:detected-issue-mitigation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});