import { Component, Input } from '@angular/core';
import { Repository } from "../../models/respository.interface";

@Component({
  selector: 'repositories',
  templateUrl: 'repositories.component.html'
})
export class RepositoriesComponent {

  @Input() repository: Repository;
}
