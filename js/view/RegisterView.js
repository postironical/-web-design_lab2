export default class RegisterView {
	constructor(itemModel) {
		this.itemModel = itemModel;
		this.controllerOnUpdate = null;

	}

	onUpdate(val) {
		document.getElementById("submit").disabled = val;
	}

	setOnChangeCallback(controllerOnUpdate) {
		this.controllerOnUpdate = controllerOnUpdate;
	}
}
