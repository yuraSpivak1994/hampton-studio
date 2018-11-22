import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmptyComponent} from './empty/empty.component';
import {TextComponent} from './text/text.component';
import {BioComponent} from './bio/bio.component';
import {WorkComponent} from './work/work.component';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {HeaderComponent} from './header/header.component';


const appRoutes: Routes = [
  {path: 'work', component: WorkComponent},
  {path: 'bio', component: BioComponent},
  {path: 'text', component: TextComponent},
  {path: 'home', component: EmptyComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'header', component: HeaderComponent},
  {redirectTo: 'home', pathMatch: 'full', path: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting {}
