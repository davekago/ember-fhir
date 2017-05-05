import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-reference-context', 'Unit | Model | DocumentReference_Context', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:codeable-concept',
    'model:period',
    'model:document-reference-related'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});