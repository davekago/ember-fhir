import { moduleForModel, test } from 'ember-qunit';

moduleForModel('contract', 'Unit | Model | Contract', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:period',
    'model:reference',
    'model:codeable-concept',
    'model:coding',
    'model:contract-agent',
    'model:contract-signer',
    'model:contract-valued-item',
    'model:contract-term',
    'model:attachment',
    'model:contract-friendly',
    'model:contract-legal',
    'model:contract-rule'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});