import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-manifest', 'Unit | Model | DocumentManifest', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:reference',
    'model:document-manifest-content',
    'model:document-manifest-related'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});