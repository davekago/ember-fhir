import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile-include', 'Unit | Model | ExpansionProfile_Include', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:expansion-profile-designation-1'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});