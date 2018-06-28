import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ModelsComponent } from './models/models.component';
import { ConfigureComponent } from './configure/configure.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AlgorithmCardComponent } from './algorithm-card/algorithm-card.component';
import { TargetComponent } from './target/target.component';
import { EvaluateComponent } from './evaluate/evaluate.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import { PerformanceComponent } from './performance/performance.component';
import { TargetCardComponent } from './target-card/target-card.component';
import { OrdersComponent } from './orders/orders.component';
import { SupportComponent } from './support/support.component';
import { PaymentComponent } from './payment/payment.component';
import { BuildComponent } from './build/build.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModelsComponent,
    ConfigureComponent,
    DashboardComponent,
    LoginComponent,
    MainComponent,
    AlgorithmCardComponent,
    TargetComponent,
    EvaluateComponent,
    PerformanceComponent,
    TargetCardComponent,
    OrdersComponent,
    SupportComponent,
    PaymentComponent,
    BuildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
