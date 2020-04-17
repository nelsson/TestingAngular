import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { MedicoService } from './intermedio2/medico/medico.service';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';

@NgModule({
  declarations: [AppComponent, MedicosComponent, MedicoComponent, HospitalComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MedicoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
