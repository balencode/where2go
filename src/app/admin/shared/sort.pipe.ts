import {Pipe, PipeTransform} from "@angular/core";
import {Post} from "../../shared/interfaces";

@Pipe({
  name: 'sortPosts'
})
export class SortPipe implements PipeTransform{
  transform(posts: Post[], typeSort= false): Post[] {
    console.log('Test sortPipe')
    if (typeSort == true) {
      posts.sort((a: Post, b: Post) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            console.log(a.name)
            console.log(b.name)
            return -1;
          } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
            console.log(a.name)
            console.log(b.name)
            console.log(-1)
            return 1;
          } else {
            return 0;
          }
        }
      );
    }
    if (typeSort == false) {
      posts.sort((a: Post, b: Post) => {
          if (b.name.toLowerCase() < a.name.toLowerCase()) {
            console.log(a.name)
            console.log(b.name)
            return -1;
          } else if (b.name.toLowerCase() > a.name.toLowerCase()) {
            console.log(a.name)
            console.log(b.name)
            console.log(-1)
            return 1;
          } else {
            return 0;
          }
        }
      );
    }
    return posts;
  }


}
