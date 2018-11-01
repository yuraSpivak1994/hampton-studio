import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmptyComponent} from './empty/empty.component';
import {TextComponent} from './text/text.component';
import {BioComponent} from './bio/bio.component';
import {WorkComponent} from './work/work.component';


const appRoutes: Routes = [
  {path: 'work', component: WorkComponent},
  {path: 'bio', component: BioComponent},
  {path: 'text', component: TextComponent},
  {path: '', component: EmptyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}
