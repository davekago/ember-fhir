import { moduleForModel, test } from 'ember-qunit';

moduleForModel('imaging-manifest-study', 'Unit | Model | ImagingManifest_Study', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:imaging-manifest-series'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});