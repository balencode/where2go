import {Pipe, PipeTransform} from "@angular/core";
import {Post} from "../../shared/interfaces";

@Pipe({
  name: 'searchPosts'
})
export class SearchPipe implements PipeTransform{
  transform(posts: Post[], search = ''): Post[] {
    if (!search.trim()){
      return posts
    }
    return posts.filter(post =>{
      return post.name.toLowerCase().includes(search.toLowerCase()) || post.place.toLowerCase().includes(search.toLowerCase()) || post.type.toLowerCase().includes(search.toLowerCase())
    })
  }

}
