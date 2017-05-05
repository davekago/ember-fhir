import { moduleForModel, test } from 'ember-qunit';

moduleForModel('service-definition', 'Unit | Model | ServiceDefinition', {
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
    'model:trigger-definition',
    'model:data-requirement',
    'model:reference'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});