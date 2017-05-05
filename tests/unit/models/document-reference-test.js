import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-reference', 'Unit | Model | DocumentReference', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:document-reference-relates-to',
    'model:document-reference-content',
    'model:document-reference-context'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});