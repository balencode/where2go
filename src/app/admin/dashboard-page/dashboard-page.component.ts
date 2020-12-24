import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from "../../shared/posts.service";
import {Post} from "../../shared/interfaces";
import {Subscription} from "rxjs";
import {global} from "@angular/compiler/src/util";
import {AlertService} from "../shared/services/alert.service";



@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})

export class DashboardPageComponent implements OnInit, OnDestroy {
  postsRestaurant: Post[] = []
  postsCafe: Post[] = []
  postsSauna: Post[] = []
  postsMuseum: Post[] = []
  postsTheatre: Post[] = []
  postsCinema: Post[] = []
  postsPub: Post[] = []
  postsPark: Post[] = []
  postsFoodStore: Post[] = []
  postsHotel: Post[] = []
  postsPharmacy: Post[] = []
  postsNightclub: Post[] = []
  postsPlayground: Post[] = []
  postsZoo: Post[] = []
  postsAquapark: Post[] = []
  posts2: Post[] = []
  pSubRestaurant: Subscription
  dSubRestaurant: Subscription
  pSubCafe: Subscription
  dSubCafe: Subscription
  pSubSauna: Subscription
  dSubSauna: Subscription
  pSubMuseum: Subscription
  dSubMuseum: Subscription
  pSubTheatre: Subscription
  dSubTheatre: Subscription
  pSubCinema: Subscription
  dSubCinema: Subscription
  pSubPub: Subscription
  dSubPub: Subscription
  pSubPark: Subscription
  dSubPark: Subscription
  pSubFoodStore: Subscription
  dSubFoodStore: Subscription
  pSubHotel: Subscription
  dSubHotel: Subscription
  pSubPharmacy: Subscription
  dSubPharmacy: Subscription
  pSubNightclub: Subscription
  dSubNightclub: Subscription
  pSubPlayground: Subscription
  dSubPlayground: Subscription
  pSubZoo: Subscription
  dSubZoo: Subscription
  pSubAquapark: Subscription
  dSubAquapark: Subscription
  pSub2: Subscription
  dSub2: Subscription
  searchStr = ''

  constructor(
    private postsService: PostsService,
    private alert: AlertService,
  ) { }

  ngOnInit(): void {
    this.pSubRestaurant =  this.postsService.getAllRestaurant().subscribe(posts =>{
      this.postsRestaurant = posts
    })
    this.pSubCafe =  this.postsService.getAllCafe().subscribe(posts =>{
      this.postsCafe = posts
    })
    this.pSub2 =  this.postsService.getAll2().subscribe(posts =>{
      this.posts2 = posts
    })
    this.pSubSauna =  this.postsService.getAllSauna().subscribe(posts =>{
      this.postsSauna = posts
    })
    this.pSubMuseum =  this.postsService.getAllMuseum().subscribe(posts =>{
      this.postsMuseum = posts
    })
    this.pSubTheatre =  this.postsService.getAllTheatre().subscribe(posts =>{
      this.postsTheatre = posts
    })
    this.pSubCinema =  this.postsService.getAllCinema().subscribe(posts =>{
      this.postsCinema = posts
    })
    this.pSubPub =  this.postsService.getAllPub().subscribe(posts =>{
      this.postsPub = posts
    })
    this.pSubPark =  this.postsService.getAllPark().subscribe(posts =>{
      this.postsPark = posts
    })
    this.pSubFoodStore =  this.postsService.getAllFoodStore().subscribe(posts =>{
      this.postsFoodStore = posts
    })
    this.pSubHotel =  this.postsService.getAllHotel().subscribe(posts =>{
      this.postsHotel = posts
    })
    this.pSubPharmacy =  this.postsService.getAllPharmacy().subscribe(posts =>{
      this.postsPharmacy = posts
    })
    this.pSubNightclub =  this.postsService.getAllNightclub().subscribe(posts =>{
      this.postsNightclub = posts
    })
    this.pSubPlayground =  this.postsService.getAllPlayground().subscribe(posts =>{
      this.postsPlayground = posts
    })
    this.pSubZoo =  this.postsService.getAllZoo().subscribe(posts =>{
      this.postsZoo = posts
    })
    this.pSubAquapark =  this.postsService.getAllAquapark().subscribe(posts =>{
      this.postsAquapark = posts
    })

  }

  remove(id:string, type:string){
    if (type === 'restaurant'){
      this.dSubRestaurant =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsRestaurant = this.postsRestaurant.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'cafe'){
      this.dSubCafe =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsCafe = this.postsCafe.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'sauna'){
      this.dSubSauna =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsSauna = this.postsSauna.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'museum'){
      this.dSubMuseum =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsMuseum = this.postsMuseum.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'theatre'){
      this.dSubTheatre =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsTheatre = this.postsTheatre.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'cinema'){
      this.dSubCinema =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsCinema = this.postsCinema.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'pub'){
      this.dSubPub =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsPub = this.postsPub.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'park'){
      this.dSubPark =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsPark = this.postsPark.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'aquapark'){
      this.dSubAquapark =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsAquapark = this.postsAquapark.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'foodStore'){
      this.dSubFoodStore =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsFoodStore = this.postsFoodStore.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'hotel'){
      this.dSubHotel =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsHotel = this.postsHotel.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'pharmacy'){
      this.dSubPharmacy =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsPharmacy = this.postsPharmacy.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'nightclub'){
      this.dSubNightclub =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsNightclub = this.postsNightclub.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'playground'){
      this.dSubPlayground =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsPlayground = this.postsPlayground.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === 'zoo'){
      this.dSubZoo =  this.postsService.remove(id, type).subscribe(() =>{
        this.postsZoo = this.postsZoo.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
    if (type === '2'){
      this.dSub2 =  this.postsService.remove(id, type).subscribe(() =>{
        this.posts2 = this.posts2.filter( post => post.id !==id)
        this.alert.danger('Post was deleted')
      })
    }
  }


  ngOnDestroy() {
    if (this.pSubRestaurant){
      this.pSubRestaurant.unsubscribe()
    }
    if (this.dSubRestaurant){
      this.dSubRestaurant.unsubscribe()
    }
    if (this.pSubCafe){
      this.pSubCafe.unsubscribe()
    }
    if (this.dSubCafe){
      this.dSubCafe.unsubscribe()
    }
    if (this.pSubSauna){
      this.pSubSauna.unsubscribe()
    }
    if (this.dSubSauna){
      this.dSubSauna.unsubscribe()
    }
    if (this.pSubMuseum){
      this.pSubMuseum.unsubscribe()
    }
    if (this.dSubMuseum){
      this.dSubMuseum.unsubscribe()
    }
    if (this.pSubTheatre){
      this.pSubTheatre.unsubscribe()
    }
    if (this.dSubTheatre){
      this.dSubTheatre.unsubscribe()
    }
    if (this.pSubCinema){
      this.pSubCinema.unsubscribe()
    }
    if (this.dSubCinema){
      this.dSubCinema.unsubscribe()
    }
    if (this.pSubPub){
      this.pSubPub.unsubscribe()
    }
    if (this.dSubPub){
      this.dSubPub.unsubscribe()
    }
    if (this.pSubPark){
      this.pSubPark.unsubscribe()
    }
    if (this.dSubPark){
      this.dSubPark.unsubscribe()
    }
    if (this.pSubFoodStore){
      this.pSubFoodStore.unsubscribe()
    }
    if (this.dSubFoodStore){
      this.dSubFoodStore.unsubscribe()
    }
    if (this.pSubHotel){
      this.pSubHotel.unsubscribe()
    }
    if (this.dSubHotel){
      this.dSubHotel.unsubscribe()
    }
    if (this.pSubPharmacy){
      this.pSubPharmacy.unsubscribe()
    }
    if (this.dSubPharmacy){
      this.dSubPharmacy.unsubscribe()
    }
    if (this.pSubNightclub){
      this.pSubNightclub.unsubscribe()
    }
    if (this.dSubNightclub){
      this.dSubNightclub.unsubscribe()
    }
    if (this.pSubPlayground){
      this.pSubPlayground.unsubscribe()
    }
    if (this.dSubPlayground){
      this.dSubPlayground.unsubscribe()
    }
    if (this.pSubZoo){
      this.pSubZoo.unsubscribe()
    }
    if (this.dSubZoo){
      this.dSubZoo.unsubscribe()
    }
    if (this.pSubAquapark){
      this.pSubAquapark.unsubscribe()
    }
    if (this.dSubAquapark){
      this.dSubAquapark.unsubscribe()
    }

    if (this.pSub2){
      this.pSub2.unsubscribe()
    }
    if (this.dSub2){
      this.dSub2.unsubscribe()
    }
  }

  getType(type: string) {
    global.typeForEdit = type
  }
}
