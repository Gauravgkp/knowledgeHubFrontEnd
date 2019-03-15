import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NabBarComponent } from './nab-bar/nab-bar.component';
import { ZombotronComponent } from './zombotron/zombotron.component';
import { FooterComponent } from './footer/footer.component';
import { ConceptsComponent } from './concepts/concepts.component';
import { DeveloperTeamComponent } from './developer-team/developer-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NabBarComponent,
    ZombotronComponent,
    FooterComponent,
    ConceptsComponent,
    DeveloperTeamComponent,
    ContactUsComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
