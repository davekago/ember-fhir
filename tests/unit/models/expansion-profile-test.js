import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile', 'Unit | Model | ExpansionProfile', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:identifier',
    'model:contact-detail',
    'model:usage-context',
    'model:codeable-concept',
    'model:expansion-profile-fixed-version',
    'model:expansion-profile-excluded-system',
    'model:expansion-profile-designation'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});