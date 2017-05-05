import { moduleForModel, test } from 'ember-qunit';

moduleForModel('naming-system', 'Unit | Model | NamingSystem', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:contact-detail',
    'model:codeable-concept',
    'model:usage-context',
    'model:naming-system-unique-id',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});