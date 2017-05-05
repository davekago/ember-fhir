import { moduleForModel, test } from 'ember-qunit';

moduleForModel('linkage-item', 'Unit | Model | Linkage_Item', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});