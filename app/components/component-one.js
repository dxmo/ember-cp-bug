import Component from '@ember/component';
import { set } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ComponentOne extends Component {
	@service store;

	init() {
		super.init(...arguments);

		set(this, 'model', this.store.createRecord('cp-bug', {
			testProperty: 'Sample Value'
		}))
	}
}