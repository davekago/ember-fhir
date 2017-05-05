import { moduleForModel, test } from 'ember-qunit';

moduleForModel('imaging-study', 'Unit | Model | ImagingStudy', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:coding',
    'model:reference',
    'model:codeable-concept',
    'model:imaging-study-series'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});