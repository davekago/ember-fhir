import { moduleForModel, test } from 'ember-qunit';

moduleForModel('signature', 'Unit | Model | Signature', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});