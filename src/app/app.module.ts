import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { WalletFiltersComponent } from './wallet-filters/wallet-filters.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemAddComponent,
    WalletFiltersComponent,
    MyWalletComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
