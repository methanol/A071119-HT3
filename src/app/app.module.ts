import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ValidMailDirective } from './directives/valid-mail.directive';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ValidMailDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
