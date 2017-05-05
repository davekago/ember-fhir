import { moduleForModel, test } from 'ember-qunit';

moduleForModel('imaging-manifest', 'Unit | Model | ImagingManifest', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:reference',
    'model:imaging-manifest-study'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});