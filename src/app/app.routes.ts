import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MusicComponent} from "./music/music.component";
import {InventoryComponent} from "./inventory/inventory.component";
import {ArmoniaComponent} from "./music/armonia/armonia.component";

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'music', component: MusicComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'music/detalle/armonia', component: ArmoniaComponent},
];
