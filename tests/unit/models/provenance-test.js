import { moduleForModel, test } from 'ember-qunit';

moduleForModel('provenance', 'Unit | Model | Provenance', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:reference',
    'model:period',
    'model:coding',
    'model:provenance-agent',
    'model:provenance-entity',
    'model:signature'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});