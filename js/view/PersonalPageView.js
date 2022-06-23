export default class PersonalPageView {
	constructor(itemModel) {
		this.itemModel = itemModel;
	}

	toHtml() {
		return 	`	
			<tr>
				<th scope="row">${this.itemModel.id}</th>
				<td>${this.itemModel.key}</td>
				<td>${this.itemModel.value}</td>
			</tr>
		`
	}
}
