import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.css']
})
export class AdvertisingComponent implements OnInit {

  constructor(private http: HttpClient) { }
  baseApi:string = "http://127.0.0.1:3000";
  news = [];  
  ngOnInit() {
    
    // On load call to node
    this.http.get(this.baseApi+'/get-news').subscribe((res)=>{
      if( res.status ){
        for(var i=0;i<res.returnData.length;i++){
          res.returnData[i].showAll = false;
        }
        this.news = res.returnData;
      }
    });  
  }

  showAllNews(item){
  	item.showAll = (!item.showAll)? true:false ; 
  }
  


}
