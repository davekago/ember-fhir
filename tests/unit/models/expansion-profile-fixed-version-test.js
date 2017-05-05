import { moduleForModel, test } from 'ember-qunit';

moduleForModel('expansion-profile-fixed-version', 'Unit | Model | ExpansionProfile_FixedVersion', {
  needs: [
    'model:meta',
    'model:narrative',
    'model:resource',
    'model:extension'
  ]
});

test('it exists', function(assert) {
  const model = this.subject();
  assert.ok(!!model);
});