import { moduleForModel, test } from 'ember-qunit';

moduleForModel('linkage', 'Unit | Model | Linkage', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:linkage-item'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});