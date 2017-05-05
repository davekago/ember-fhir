import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:application', 'Unit | Adapter | application', {
  // needs: ['serializer:foo']
});

test('it exists', function(assert) {
  const adapter = this.subject();
  assert.ok(adapter);
});
