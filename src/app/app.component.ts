import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Anngular ' + VERSION.major;




  title = 'Welcome to Group D Workers';
  
  
 
  todolist = [{ myimage: 'https://scstylecaster.files.wordpress.com/2015/04/477973067.jpg', name: "Bongani", surname: "Smith", position: "Project Manager", age: 44},
              { myimage: 'http://atlantablackstar.com/wp-content/uploads/2015/02/Black-businesswoman.jpg', name: "Bogiwe", surname: "Sibuyi", position: "Network Administrator", age: 28 },
              { myimage: 'https://get.pxhere.com/photo/man-person-people-meeting-corporate-professional-business-profession-speaker-elder-official-success-clergy-893119.jpg', name: "William", surname: "Rikhotso", position: "IT Coordinator", age: 45 }];

    delete(todolist)
    {
      const index=this.todolist.indexOf(name);
      if(index>-1)
      {
        this.todolist.splice(index,1);
      }
    }
}

