import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
    {path:"",component:AboutComponent,title:"home"},
    { path: "about"||"", component: AboutComponent,title:"about" },
    { path: "contact", component: ContactComponent,title:"contact" },
    { path: "portfolio", component: PortfolioComponent,title:"portfolio" },
    {path:"**",component:NotFoundComponent,title:"not found"}
];
