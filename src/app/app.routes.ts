import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotesComponent} from "./notes/notes.component";
import {InventoryComponent} from "./inventory/inventory.component";
import {ArmoniaComponent} from "./notes/armonia/armonia.component";

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'notes', component: NotesComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'notes/detalle/armonia', component: ArmoniaComponent},
];
