import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  constructor(private http: HttpClient) { }
  materials: Array<material> = []
  token: string = history.state.name
  matname :string=''
  mtype :string=''
  link: string=''

  displayform=false
  toggleform(){
    this.displayform=!this.displayform;
  }

  addmaterial(){
    console.log(this.matname)
    console.log(this.mtype)
    console.log(this.link)
    let options = {
      headers: new HttpHeaders().set('Authorization', this.token)
                    .set('Content-Type', 'application/x-www-form-urlencoded')
    };
    let body = new URLSearchParams()
    // this.displayform=!this.displayform;
    body.set("name",this.matname);
    body.set("type",this.mtype);
    body.set("link",this.link);
    this.http.post('http://localhost:5000/api/materials/addMaterial',body.toString(),options).subscribe(response =>{
      console.log(response)
    })
  }

  ngOnInit(): void {
    let options = {
      headers: new HttpHeaders().set('Authorization', this.token)
    };
    this.http.get<Array<material>>('http://localhost:5000/api/materials/getMaterial',options).subscribe(response =>{
      console.log(response)
      this.materials=response
    })
  }

}
interface material{
  _id: string,
  name: string,
  type: string,
  link: string,
  __v: number
}
