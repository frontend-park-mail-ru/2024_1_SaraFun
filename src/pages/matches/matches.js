import template from './ui/matches.pug';
import Navbar from '../../widgets/Navbar/navbar.js';

export class MatchesPage {
	constructor(parent) {
		this.parent = parent;
		this.parent.root.innerHTML = '';
		this.render().then(() => {;
			this.navbar = new Navbar(document.querySelector('navbar'), parent);
		});
	}

    async render() {
        //let users = await getMatches();
        let users = [{'username': "Андрей"},{'username': "Андрей"},{'username': "Андрей"},{'username': "Андрей"},{'username': "Андрей"}];
		this.parent.root.innerHTML = template({ users });
	}
}