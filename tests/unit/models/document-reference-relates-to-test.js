import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-reference-relates-to', 'Unit | Model | DocumentReference_RelatesTo', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});