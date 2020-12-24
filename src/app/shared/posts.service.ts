import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {FbCreateResponse, Post} from "./interfaces";
import {environment} from "../../environments/environment";
import {global} from "@angular/compiler/src/util";
import {map} from "rxjs/operators";


@Injectable({providedIn: "root"})
export class PostsService {

  //allPost: Observable<Object[]>
  constructor(private http: HttpClient) {
    }

  create(post: Post): Observable<Post>{
    console.log('test now')
    console.log(global.baseN)
    return this.http.post<Post>(`${environment.fbDBUrl}/${global.baseN}.json`,post)
      .pipe(map((response: FbCreateResponse) =>{
        return{
          ...post,
          id: response.name
        }
      }))

  }
  getAllRestaurant(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/restaurant.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAll2(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/2.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllCafe(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/cafe.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllSauna(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/sauna.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllMuseum(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/museum.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllTheatre(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/theatre.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllCinema(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/cinema.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllPub(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/pub.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllPark(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/park.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllFoodStore(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/foodStore.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllHotel(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/hotel.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllPharmacy(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/pharmacy.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllNightclub(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/nightclub.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllPlayground(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/playground.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllZoo(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/zoo.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getAllAquapark(): Observable<Post[]>{
    return this.http.get(`${environment.fbDBUrl}/aquapark.json`)
      .pipe(map((response: {[key:string]: any}) =>{
        return Object
          .keys(response)
          .map(key =>({
            ...response[key],
            id:key
          }))
      }))
  }

  getById(id:string, type: string): Observable<Post>{
    console.log('test getById')
    console.log(global.typeForEdit)
    if (type === undefined) {
      return this.http.get<Post>(`${environment.fbDBUrl}/${global.typeForEdit}/${id}.json`)
        .pipe(map((post: Post) => {
          return {
            ...post, id, type
          }
        }))
    }else{
      console.log('else work')
      console.log(type)
      return this.http.get<Post>(`${environment.fbDBUrl}/${type}/${id}.json`)
        .pipe(map((post: Post) => {
          return {
            ...post, id, type
          }
        }))
    }
  }

  remove(id: string, type: string): Observable<void>{
    console.log(type)

    return this.http.delete<void>(`${environment.fbDBUrl}/${type}/${id}.json`)
  }

  update(post: Post): Observable<Post>{
    console.log('test nav fo update')
    console.log(global.typeForEdit)
    return this.http.patch<Post>(`${environment.fbDBUrl}/${global.typeForEdit}/${post.id}.json`, post)
  }
}



// Maybe need
// allPost: Observable<Post[]>[] = [
//   this.http.get(`${environment.fbDBUrl}/restaurant.json`).pipe(map((response: {[key:string]: any}) =>{
//     return Object
//       .keys(response)
//       .map(key =>({
//         ...response[key],
//         id:key
//       }))
//   })),
//   this.http.get(`${environment.fbDBUrl}/2.json`).pipe(map((response: {[key:string]: any}) =>{
//     return Object
//       .keys(response)
//       .map(key =>({
//         ...response[key],
//         id:key
//       }))
//   }))
// ]
