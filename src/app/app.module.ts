import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostComponent } from './shared/components/post/post.component';
import { RestaurantPageComponent } from './types/restaurant-page/restaurant-page.component';
import { RestaurantComponent } from './shared/components/restaurant/restaurant.component';
import { RestaurantViewComponent } from './shared/components/restaurant-view/restaurant-view.component';
import { RestaurantViewPageComponent } from './types/restaurant-view-page/restaurant-view-page.component';
import {SharedModule} from "./shared/shared.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./shared/auth.interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CafePageComponent } from './types/cafe-page/cafe-page.component';
import { CafeViewPageComponent } from './types/cafe-view-page/cafe-view-page.component';
import { SaunaPageComponent } from './types/sauna-page/sauna-page.component';
import { SaunaViewPageComponent } from './types/sauna-view-page/sauna-view-page.component';
import {FormsModule} from "@angular/forms";
import {AdminModule} from "./admin/admin.module";
import { MuseumPageComponent } from './types/museum-page/museum-page.component';
import { MuseumViewPageComponent } from './types/museum-view-page/museum-view-page.component';
import { TheaterPageComponent } from './types/theater-page/theater-page.component';
import { TheaterViewPageComponent } from './types/theater-view-page/theater-view-page.component';
import { CinemaPageComponent } from './types/cinema-page/cinema-page.component';
import { CinemaViewPageComponent } from './types/cinema-view-page/cinema-view-page.component';
import { PubPageComponent } from './types/pub-page/pub-page.component';
import { PubViewPageComponent } from './types/pub-view-page/pub-view-page.component';
import { ParkPageComponent } from './types/park-page/park-page.component';
import { ParkViewPageComponent } from './types/park-view-page/park-view-page.component';
import { FoodStorePageComponent } from './types/food-store-page/food-store-page.component';
import { FoodStoreViewPageComponent } from './types/food-store-view-page/food-store-view-page.component';
import { HotelPageComponent } from './types/hotel-page/hotel-page.component';
import { HotelViewPageComponent } from './types/hotel-view-page/hotel-view-page.component';
import { PharmacyPageComponent } from './types/pharmacy-page/pharmacy-page.component';
import { PharmacyViewPageComponent } from './types/pharmacy-view-page/pharmacy-view-page.component';
import { PlaygroundPageComponent } from './types/playground-page/playground-page.component';
import { PlaygroundViewPageComponent } from './types/playground-view-page/playground-view-page.component';
import { ZooPageComponent } from './types/zoo-page/zoo-page.component';
import { ZooViewPageComponent } from './types/zoo-view-page/zoo-view-page.component';
import { AquaparkPageComponent } from './types/aquapark-page/aquapark-page.component';
import { AquaparkViewPageComponent } from './types/aquapark-view-page/aquapark-view-page.component';
import { NightclubtestPageComponent } from './types/nightclubtest-page/nightclubtest-page.component';
import { NightclubtestViewPageComponent } from './types/nightclubtest-view-page/nightclubtest-view-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



const  INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi:true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
    RestaurantPageComponent,
    RestaurantComponent,
    RestaurantViewComponent,
    RestaurantViewPageComponent,
    CafePageComponent,
    CafeViewPageComponent,
    SaunaPageComponent,
    SaunaViewPageComponent,
    MuseumPageComponent,
    MuseumViewPageComponent,
    TheaterPageComponent,
    TheaterViewPageComponent,
    CinemaPageComponent,
    CinemaViewPageComponent,
    PubPageComponent,
    PubViewPageComponent,
    ParkPageComponent,
    ParkViewPageComponent,
    FoodStorePageComponent,
    FoodStoreViewPageComponent,
    HotelPageComponent,
    HotelViewPageComponent,
    PharmacyPageComponent,
    PharmacyViewPageComponent,
    PlaygroundPageComponent,
    PlaygroundViewPageComponent,
    ZooPageComponent,
    ZooViewPageComponent,
    AquaparkPageComponent,
    AquaparkViewPageComponent,
    NightclubtestPageComponent,
    NightclubtestViewPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    AdminModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
