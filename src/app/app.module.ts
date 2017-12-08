import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NameContainerComponent } from './name-container/name-container.component';
import { NameTagComponent } from './name-tag/name-tag.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { InnerComponent } from './inner/inner.component';
import { HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import {RouterModule, Routes } from '@angular/router';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { UserService } from './service/user.service';
import { EmployeeComponent } from './employee/employee.component';
import { ShowgenderComponent } from './showgender/showgender.component';


const appRoutes: Routes = [
  { path : 'home', component: HomeComponent},
  { path : 'about', component: AboutComponent},
  { path : 'user', children : [
    { path : 'list', component: UserlistComponent, children : [
      { path : 'detail/:name', component : UserComponent}
    ]}
  ]},
  { path : '', redirectTo: '/home', pathMatch: 'full'},
  { path : '**', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NameContainerComponent,
    NameTagComponent,
    NewComponentComponent,
    InnerComponent,
    AboutComponent,
    HomeComponent,
    UserComponent,
    UserlistComponent,
    OneComponent,
    TwoComponent,
    EmployeeComponent,
    ShowgenderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
