import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HomeComponent } from './page/home/home.component';
import { CreateAccountComponent } from './page/create-account/create-account.component';
import { NavigationBarComponent } from './page/navigation-bar/navigation-bar.component';
import { AddItemComponent } from './page/add-item/add-item.component';
import { ViewItemComponent } from './page/view-item/view-item.component';
import { MenItemComponent } from './page/men-item/men-item.component';
import { KidsItemComponent } from './page/kids-item/kids-item.component';
import { WomenItemComponent } from './page/women-item/women-item.component';
import { CartComponent } from './page/cart/cart.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';

export const routes: Routes = [
    { path:"",
        component:LoginComponent

    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"dashboard",
        component: DashboardComponent,
        children:[
            {path:"add-item", component: AddItemComponent},
            {path:"view-item", component: ViewItemComponent},
            {path:"create-account", component: CreateAccountComponent}
        ]
       
    },
    {
        path:"home",
        component: HomeComponent,

    
    },
    {
        path:"create-account",
        component: CreateAccountComponent,
       
    },
    {
        path:"navigation-bar",
        component: NavigationBarComponent,
        
       
    },
    {
        path:"men-item",
        component: MenItemComponent,
       
    },
    {
        path:"women-item",
        component: WomenItemComponent,
       
    },
    {
        path:"kids-item",
        component: KidsItemComponent,
       
    },
    {
        path:"cart",
        component: CartComponent,
    },
    {
        path:"about-us",
        component: AboutUsComponent,
    },
    {
        path:"contact-us",
        component: ContactUsComponent,
    }
];
