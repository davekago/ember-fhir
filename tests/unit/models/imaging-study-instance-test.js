import { moduleForModel, test } from 'ember-qunit';

moduleForModel('imaging-study-instance', 'Unit | Model | ImagingStudy_Instance', {
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