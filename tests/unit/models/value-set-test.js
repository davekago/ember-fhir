import { moduleForModel, test } from 'ember-qunit';

moduleForModel('value-set', 'Unit | Model | ValueSet', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:value-set-compose',
    'model:value-set-expansion'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});