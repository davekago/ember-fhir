import { moduleForModel, test } from 'ember-qunit';

moduleForModel('substance-instance', 'Unit | Model | Substance_Instance', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:quantity'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});