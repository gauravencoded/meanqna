import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  techStack=[
    {
      name: "Angular 5",
      type:"Front End",
      questions:"150",
      lastupdate:"",
      totalVistors:"",
      resloc:"angular"
    },
    {
      name: "Node JS ",
      questions:"150",
      type:"Back End",
      lastupdate:"",
      totalVistors:"",
      resloc:"node"
    },
    {
      name: "Vanilla JS",
      questions:"130",
      type:"Front End",
      lastupdate:"",
      totalVistors:"",
      resloc:"vjs"
    },
    {
      name: "Mongo DB",
      questions:"110",
      type:"Database",
      lastupdate:"",
      totalVistors:"",
      resloc:"mongo"
    },
    {
      name: "Express JS",
      questions:"50",
      type:"Back End",
      lastupdate:"",
      totalVistors:"",
        resloc:"express"
    },
    {
      name: "AWS",
      questions:"20",
      type:"Cloud",
      lastupdate:"",
      totalVistors:"",
        resloc:"aws"
    }
  ]



}
