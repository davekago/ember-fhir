import { moduleForModel, test } from 'ember-qunit';

moduleForModel('library', 'Unit | Model | Library', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:codeable-concept',
    'model:period',
    'model:usage-context',
    'model:contributor',
    'model:contact-detail',
    'model:related-artifact',
    'model:parameter-definition',
    'model:data-requirement',
    'model:attachment'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});