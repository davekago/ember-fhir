import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-valued-item-1', 'Unit | Model | Contract_ValuedItem1', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:reference',
    'model:identifier',
    'model:quantity',
    'model:money'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});