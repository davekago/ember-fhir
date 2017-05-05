import { moduleForModel, test } from 'ember-qunit';

moduleForModel('usage-context', 'Unit | Model | UsageContext', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:coding',
    'model:codeable-concept',
    'model:quantity',
    'model:range'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});