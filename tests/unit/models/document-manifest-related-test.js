import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document-manifest-related', 'Unit | Model | DocumentManifest_Related', {
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