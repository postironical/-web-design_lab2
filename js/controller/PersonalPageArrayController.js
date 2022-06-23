import PersonalPageModel from './../model/PersonalPageModel.js';

export default class PersonalPageArrayController {
	constructor(PersonalPageModel, PersonalPageView) {
		this.PersonalPageModel = PersonalPageModel;
		this.PersonalPageView = PersonalPageView;
		this.PersonalPageModel.setOnChangeCallback((e) => this.onChangeCallback(e));
		
		this.initOnModelChange();

	}

	onChangeCallback() {
	
		document.getElementById("aboutmeTable").innerHTML = this.PersonalPageView.toHtml()
	}

	addRow(key, value) {
		
        this.PersonalPageModel.add(key, value)
	}

	initOnModelChange() {
		
		let handler = {
			set: (obj, prop, val) => {
				obj[prop] = val;
			
				this.onChangeCallback()
				return true;
			},
			get(object, property) { 
				if(object.hasOwnProperty(property)){
					for(var prop in object[property]){
						this[prop] = object[property][prop] 
					}
				}
				return object[property];
			}
		}
		this.PersonalPageModel.items = new Proxy(this.PersonalPageModel.items, handler);
	}
}
