import { Injectable } from '@angular/core';
import { Data } from './data'
@Injectable()
export class ServiceDataService {
  
  getData():Array<Data>{
    return[
        {title:'Hi-0', description:'My name isfafdsfas a dadf asd fasdf asf asf as fdas f asfasfas f sfasfasfas fasd fsdas fa sf asf asfd as dfas fas dfas fdasfa sfasf as dfas fdas fasf as fasfas fas f asf as fas fasfa sfasf sf as fas fs fasd fas fas d sf asfas as dfas fa sf sadf asfd fdsd fsdfs adf sdsafs ', author:'Darin',image:'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'},
        {title:'Hi-1', description:'My name is lorem ipsum ame is lorem ipsum ame is lorem ipsum ame is lorem ipsum ame is lorem ipsum ame is lorem ipsum  ame is lorem ipsum v ame is lorem ipsum ame is lorem ipsum ame is lorem ipsum ame is lorem ipsum ame is lorem ipsum ame is lorem ipsum ame is lorem ipsum ame is lorem ipsum ', author:'Darin',image:'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'},
        {title:'Hi-2', description:'My name is ', author:'Darin',image:'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'}
    ]
  }
  constructor() { }

}
