import { moduleForModel, test } from 'ember-qunit';

moduleForModel('imaging-study-series', 'Unit | Model | ImagingStudy_Series', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding',
    'model:reference',
    'model:imaging-study-instance'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});