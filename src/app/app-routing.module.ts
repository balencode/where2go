import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {PostPageComponent} from "./post-page/post-page.component";
import {AdminModule} from "./admin/admin.module";
import {RestaurantPageComponent} from "./types/restaurant-page/restaurant-page.component";
import {RestaurantViewPageComponent} from "./types/restaurant-view-page/restaurant-view-page.component";
import {CafePageComponent} from "./types/cafe-page/cafe-page.component";
import {CafeViewPageComponent} from "./types/cafe-view-page/cafe-view-page.component";
import {SaunaPageComponent} from "./types/sauna-page/sauna-page.component";
import {SaunaViewPageComponent} from "./types/sauna-view-page/sauna-view-page.component";
import {MuseumPageComponent} from "./types/museum-page/museum-page.component";
import {MuseumViewPageComponent} from "./types/museum-view-page/museum-view-page.component";
import {TheaterPageComponent} from "./types/theater-page/theater-page.component";
import {TheaterViewPageComponent} from "./types/theater-view-page/theater-view-page.component";
import {CinemaPageComponent} from "./types/cinema-page/cinema-page.component";
import {CinemaViewPageComponent} from "./types/cinema-view-page/cinema-view-page.component";
import {PubPageComponent} from "./types/pub-page/pub-page.component";
import {PubViewPageComponent} from "./types/pub-view-page/pub-view-page.component";
import {ParkPageComponent} from "./types/park-page/park-page.component";
import {ParkViewPageComponent} from "./types/park-view-page/park-view-page.component";
import {FoodStorePageComponent} from "./types/food-store-page/food-store-page.component";
import {FoodStoreViewPageComponent} from "./types/food-store-view-page/food-store-view-page.component";
import {HotelViewPageComponent} from "./types/hotel-view-page/hotel-view-page.component";
import {HotelPageComponent} from "./types/hotel-page/hotel-page.component";
import {PharmacyPageComponent} from "./types/pharmacy-page/pharmacy-page.component";
import {PharmacyViewPageComponent} from "./types/pharmacy-view-page/pharmacy-view-page.component";
import {PlaygroundPageComponent} from "./types/playground-page/playground-page.component";
import {PlaygroundViewComponent} from "./shared/components/playground-view/playground-view.component";
import {PlaygroundViewPageComponent} from "./types/playground-view-page/playground-view-page.component";
import {ZooPageComponent} from "./types/zoo-page/zoo-page.component";
import {ZooViewPageComponent} from "./types/zoo-view-page/zoo-view-page.component";
import {AquaparkPageComponent} from "./types/aquapark-page/aquapark-page.component";
import {AquaparkViewPageComponent} from "./types/aquapark-view-page/aquapark-view-page.component";
import {NightclubtestPageComponent} from "./types/nightclubtest-page/nightclubtest-page.component";
import {NightclubtestViewPageComponent} from "./types/nightclubtest-view-page/nightclubtest-view-page.component";




const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'post/:id', component: PostPageComponent},
      {path: 'restaurants', component: RestaurantPageComponent},
      {path: 'restaurants/restaurant/:id', component: RestaurantViewPageComponent},
      {path: 'cafes', component: CafePageComponent},
      {path: 'cafes/cafe/:id', component: CafeViewPageComponent},
      {path: 'saunas', component: SaunaPageComponent},
      {path: 'saunas/sauna/:id', component: SaunaViewPageComponent},
      {path: 'museums', component: MuseumPageComponent},
      {path: 'museums/museum/:id', component: MuseumViewPageComponent},
      {path: 'theaters', component: TheaterPageComponent},
      {path: 'theaters/theater/:id', component: TheaterViewPageComponent},
      {path: 'cinemas', component: CinemaPageComponent},
      {path: 'cinemas/cinema/:id', component: CinemaViewPageComponent},
      {path: 'pubs', component: PubPageComponent},
      {path: 'pubs/pub/:id', component: PubViewPageComponent},
      {path: 'parks', component: ParkPageComponent},
      {path: 'parks/park/:id', component: ParkViewPageComponent},
      {path: 'foodStores', component: FoodStorePageComponent},
      {path: 'foodStores/foodStore/:id', component: FoodStoreViewPageComponent},
      {path: 'hotels', component: HotelPageComponent},
      {path: 'hotels/hotel/:id', component: HotelViewPageComponent},
      {path: 'pharmacies', component: PharmacyPageComponent},
      {path: 'pharmacies/pharmacy/:id', component: PharmacyViewPageComponent},
      {path: 'playgrounds', component: PlaygroundPageComponent},
      {path: 'playgrounds/playground/:id', component: PlaygroundViewPageComponent},
      {path: 'zoos', component: ZooPageComponent},
      {path: 'zoos/zoo/:id', component: ZooViewPageComponent},
      {path: 'aquaparks', component: AquaparkPageComponent},
      {path: 'aquaparks/aquapark/:id', component: AquaparkViewPageComponent},
      {path: 'nightclubs', component: NightclubtestPageComponent},
      {path: 'nightclubs/nightclub/:id', component: NightclubtestViewPageComponent},

    ]
  },
  {
    path: 'admin', loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
