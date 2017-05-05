import { moduleForModel, test } from 'ember-qunit';

moduleForModel('dosage', 'Unit | Model | Dosage', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:codeable-concept',
    'model:timing',
    'model:range',
    'model:quantity',
    'model:ratio'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});