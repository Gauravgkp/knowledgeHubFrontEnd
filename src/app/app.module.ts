import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultcardComponent } from './resultcard/resultcard.component';
import { SocketService } from './services/socket.service';
import { SearchinfoService } from './services/searchinfo.service';
// import { UploadService } from './services/upload.service';
import { SessionId } from './domain/sessionId';
import { DataService } from './domain/data-service';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth-interceptor';
import { LoginComponent } from './login/login.component';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  
} from '@angular/material';
import { DisplayAdminHomeComponent } from './display-admin-home/display-admin-home.component';
import { QuestionClassifyComponent } from './question-classify/question-classify.component';
import { DomainConceptComponent } from './domain-concept/domain-concept.component';
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
    ResultcardComponent,
    AdminHomeComponent,
    LoginComponent,
    DisplayAdminHomeComponent,
    QuestionClassifyComponent,
    DomainConceptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule,
  HttpClientModule,
  ReactiveFormsModule,
  FormsModule,
  BrowserModule.withServerTransition({ appId: 'serverApp' }),
  BrowserTransferStateModule,
  ],
  providers: [SocketService,SessionId,DataService,TokenService,AuthService,AuthInterceptor],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
