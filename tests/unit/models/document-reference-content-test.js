import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-reference-content', 'Unit | Model | DocumentReference_Content', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:attachment',
    'model:coding'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});