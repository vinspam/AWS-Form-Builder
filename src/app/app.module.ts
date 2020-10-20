import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilderComponent } from './layout/form-builder/form-builder.component';
import { PreviewTemplateComponent } from './layout/preview-template/preview-template.component';
import { ControlsModule } from './layout/basic-controls/controls/controls.module';
import { EditControlsModule } from './layout/basic-controls/edit-controls/edit-controls.module';
import { ComponentsModule } from './layout/shared-components/components/components.module';
import { MaterialModule } from './material.module';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ContactUsComponent } from './layout/contact-us/contact-us.component';
import { ASWSettingsService } from './layout/shared-service/asw-settings.service';
import { JsonPreviewDialogComponent } from './layout/shared-components/json-preview-dialog/json-preview-dialog.component';

import { ImageCropModule } from './layout/image-crop/image-crop.module';
import { GoogleAdsenseModule } from '@asoftwareworld/google-adsense';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderComponent,
    JsonPreviewDialogComponent,
    PreviewTemplateComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
    ControlsModule,
    EditControlsModule,
    ImageCropModule,
    AppRoutingModule,    
    GoogleAdsenseModule.forRoot({
      adClient: 'ca-pub-9010581920864857',
      adSlot: 1795662914,
    }),
  ],
  entryComponents: [JsonPreviewDialogComponent],
  providers: [ASWSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
