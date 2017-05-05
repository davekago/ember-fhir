import { moduleForModel, test } from 'ember-qunit';

moduleForModel('imaging-manifest-instance', 'Unit | Model | ImagingManifest_Instance', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});