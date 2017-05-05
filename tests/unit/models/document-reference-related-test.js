import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-reference-related', 'Unit | Model | DocumentReference_Related', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});