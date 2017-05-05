import { moduleForModel, test } from 'ember-qunit';

moduleForModel('code-system', 'Unit | Model | CodeSystem', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:code-system-filter',
    'model:code-system-property',
    'model:code-system-concept'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});