import { moduleForModel, test } from 'ember-qunit';

moduleForModel('imaging-manifest-series', 'Unit | Model | ImagingManifest_Series', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:imaging-manifest-instance'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});