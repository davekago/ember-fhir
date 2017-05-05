import { moduleForModel, test } from 'ember-qunit';

moduleForModel('measure', 'Unit | Model | Measure', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:period',
    'model:usage-context',
    'model:codeable-concept',
    'model:contributor',
    'model:contact-detail',
    'model:related-artifact',
    'model:reference',
    'model:measure-group',
    'model:measure-supplemental-data',
    'model:measure-supplemental-datum'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});