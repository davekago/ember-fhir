import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract-valued-item', 'Unit | Model | Contract_ValuedItem', {
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