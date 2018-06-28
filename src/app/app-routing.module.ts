import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConfigureComponent} from './configure/configure.component';
import {ModelsComponent} from './models/models.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {TargetComponent} from './target/target.component';
import {EvaluateComponent} from './evaluate/evaluate.component';
import {PerformanceComponent} from './performance/performance.component';
import {OrdersComponent} from './orders/orders.component';
import {SupportComponent} from './support/support.component';
import {PaymentComponent} from './payment/payment.component';
import {BuildComponent} from './build/build.component';

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: '',
				redirectTo: 'login',
				pathMatch: 'full'
			},
			{
				path: 'login',
				component: LoginComponent
			},
			{
				path: 'dashboard',
				component: DashboardComponent,
				children: [
					{
						path: '',
						redirectTo: 'models',
						pathMatch: 'full'
					},
					{
						path: 'models',
						component: ModelsComponent
					},
					{
						path: 'configure',
						component: ConfigureComponent
					},
					{
						path: 'target',
						component: TargetComponent
					},
					{
						path: 'evaluate',
						component: EvaluateComponent
					},
					{
						path: 'orders',
						component: OrdersComponent
					},
					{
						path: 'support',
						component: SupportComponent
					},	
					{
						path: 'payment',
						component: PaymentComponent
					},
					{
						path: 'build',
						component: BuildComponent
					},					
					{
						path: 'performance',
						component: PerformanceComponent
					},
				]
			},
		]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
