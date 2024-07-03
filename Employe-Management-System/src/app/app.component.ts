import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgComponent } from './svg/svg.component';
import { ID, account } from '../lib/appwrite';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SvgComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Employe-Management-System';
  loggedInUser: any = null;
  email: string = '';
  password: string = '';
  name: string = '';

  async login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    this.loggedInUser = await account.get();
  }

  async register(email: string, password: string, name: string) {
    await account.create(ID.unique(), email, password, name);
    this.login(email, password);
  }

  async logout() {
    await account.deleteSession('current');
    this.loggedInUser = null;
  }
}
