import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotesComponent} from "./feature/notes/notes.component";
import {InventoryComponent} from "./feature/inventory/inventory.component";
import {ArmoniaComponent} from "./feature/notes/armonia/armonia.component";

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'notes', component: NotesComponent},
    {path: 'inventory', component: InventoryComponent},
    {path: 'notes/detalle/armonia', component: ArmoniaComponent},
];
