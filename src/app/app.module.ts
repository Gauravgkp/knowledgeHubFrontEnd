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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';
import {FormsModule } from '@angular/forms';
import { ResultcardComponent } from './resultcard/resultcard.component';
import { SocketService } from './services/socket.service';
import { SearchinfoService } from './services/searchinfo.service';
// import { UploadService } from './services/upload.service';
import { SessionId } from './domain/sessionId';
import { DataService } from './domain/data-service';
import { HttpClientModule } from '@angular/common/http';

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
    SearchBarComponent,
    HomeComponent,
    ResultsComponent,
    ResultcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
 
    
  ],
  providers: [SocketService,SessionId,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
