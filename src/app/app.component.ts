import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ToolbarComponent, TopNavComponent, FooterComponent]
})
export class AppComponent {
  title = 'app works!';
}
