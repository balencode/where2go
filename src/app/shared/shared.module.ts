import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {QuillModule} from "ngx-quill";
import { CafeComponent } from './components/cafe/cafe.component';
import {RouterModule} from "@angular/router";
import { CafeViewComponent } from './components/cafe-view/cafe-view.component';
import { SaunaComponent } from './components/sauna/sauna.component';
import { SaunaViewComponent } from './components/sauna-view/sauna-view.component';
import { MuseumComponent } from './components/museum/museum.component';
import { MuseumViewComponent } from './components/museum-view/museum-view.component';
import { TheaterComponent } from './components/theater/theater.component';
import { TheaterViewComponent } from './components/theater-view/theater-view.component';
import { CinemaComponent } from './components/cinema/cinema.component';
import { CinemaViewComponent } from './components/cinema-view/cinema-view.component';
import { PubComponent } from './components/pub/pub.component';
import { PubViewComponent } from './components/pub-view/pub-view.component';
import { ParkComponent } from './components/park/park.component';
import { ParkViewComponent } from './components/park-view/park-view.component';
import { FoodStoreComponent } from './components/food-store/food-store.component';
import { FoodStoreViewComponent } from './components/food-store-view/food-store-view.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { HotelViewComponent } from './components/hotel-view/hotel-view.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { PharmacyViewComponent } from './components/pharmacy-view/pharmacy-view.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { PlaygroundViewComponent } from './components/playground-view/playground-view.component';
import { ZooComponent } from './components/zoo/zoo.component';
import { ZooViewComponent } from './components/zoo-view/zoo-view.component';
import { AquaparkComponent } from './components/aquapark/aquapark.component';
import { AquaparkViewComponent } from './components/aquapark-view/aquapark-view.component';
import { NightclubtestComponent } from './components/nightclubtest/nightclubtest.component';
import { NightclubtestViewComponent } from './components/nightclubtest-view/nightclubtest-view.component';



@NgModule({
  imports: [
    HttpClientModule,
    QuillModule.forRoot(),
    RouterModule
  ],
  exports: [
    HttpClientModule,
    QuillModule,
    CafeComponent,
    CafeViewComponent,
    SaunaViewComponent,
    SaunaComponent,
    MuseumComponent,
    MuseumViewComponent,
    TheaterComponent,
    TheaterViewComponent,
    CinemaViewComponent,
    CinemaComponent,
    PubViewComponent,
    PubComponent,
    ParkViewComponent,
    ParkComponent,
    FoodStoreViewComponent,
    FoodStoreComponent,
    HotelViewComponent,
    HotelComponent,
    PharmacyViewComponent,
    PharmacyComponent,
    PlaygroundViewComponent,
    PlaygroundComponent,
    ZooViewComponent,
    ZooComponent,
    AquaparkViewComponent,
    AquaparkComponent,
    NightclubtestViewComponent,
    NightclubtestComponent,
  ],
  declarations: [CafeComponent, CafeViewComponent, SaunaComponent, SaunaViewComponent, MuseumComponent, MuseumViewComponent, TheaterComponent, TheaterViewComponent, CinemaComponent, CinemaViewComponent, PubComponent, PubViewComponent, ParkComponent, ParkViewComponent, FoodStoreComponent, FoodStoreViewComponent, HotelComponent, HotelViewComponent, PharmacyComponent, PharmacyViewComponent, PlaygroundComponent, PlaygroundViewComponent, ZooComponent, ZooViewComponent, AquaparkComponent, AquaparkViewComponent, NightclubtestComponent, NightclubtestViewComponent]
})
export class SharedModule {

}
