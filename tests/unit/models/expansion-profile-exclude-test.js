import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile-exclude', 'Unit | Model | ExpansionProfile_Exclude', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension',
    'model:expansion-profile-designation-2'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});