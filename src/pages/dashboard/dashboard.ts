import { Component,ChangeDetectionStrategy } from '@angular/core';
import { IonicPage, 
  NavController,
  NavParams,
  MenuController,
  ViewController 
 } from 'ionic-angular';


/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class DashboardPage {


  show:boolean = false;
  activePage: any;
  downMenu: any;
  items:any=[];
  recentitems:any=[];
  searchbar:any=false;

  data:any = [
    {id:'1' ,iconColor: 'cblue', name:'TATA COFFEE', subName: 'BSE',graph:'assets/graph.png', amount:'500',per:'2%(12.00)' , arrow:'arrow-round-up', textColor:'cblue'},
    {id:'2' ,iconColor: 'cred', name:'TATA COFFEE', subName: 'BSE',graph:'assets/graph.png', amount:'1,520',per:'2%(12.00)' , arrow:'arrow-round-up', textColor:'cblue'},
    {id:'3' ,iconColor: 'cyellow', name:'TATA COFFEE', subName: 'BSE',graph:'assets/graph.png', amount:'60',per:'2%(12.00)' , arrow:'arrow-round-down', textColor:'cred'},
    {id:'4' ,iconColor: 'cred', name:'TATA COFFEE', subName: 'BSE',graph:'assets/graph.png', amount:'70',per:'2%(12.00)' , arrow:'arrow-round-down', textColor:'cred'},
    {id:'5' ,iconColor: 'cblue', name:'TATA COFFEE', subName: 'BSE',graph:'assets/graph.png', amount:'80',per:'2%(12.00)' , arrow:'arrow-round-up', textColor:'cblue'},
    {id:'6' ,iconColor: 'cblue', name:'TATA COFFEE', subName: 'BSE',graph:'assets/graph.png', amount:'600',per:'2%(12.00)' , arrow:'arrow-round-up', textColor:'cblue'}
    ]


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public view: ViewController
    ) {
      for (let i = 0; i < 5; i++) {
      this.items.push( this.data[i] );
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.menu.enable(true);
  }

  toggle() {
    if(this.show)
    this.show = false;
    else
    this.show = true;
  }

 select(item) {
  this.activePage = item;
 }

 checkActiveButton(item): boolean {
   return item === this.activePage;
 }

 openMenu(item) {
  this.downMenu = item.id;
  this.recentitems.push(item);
  console.log(this.recentitems)
 }

 menuOpen(item): boolean {
    return item.id === this.downMenu
 }
 
 doInfinite($event) {
     setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.data[i].id = this.items.length+i;
        this.items.push( this.data[i] );
      }
      console.log(this.items)
      $event.complete();
    }, 1000);
 }

 delete(item) {
   console.log('inside delete')
   for(let i = 0; i < this.items.length; i++) {
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
    }
 }

 toggleMenu() {
   this.menu.toggle();
 }

 toggleSearch() {
   if(this.searchbar) {
     this.searchbar = false;
   }
   else {
    this.searchbar = true;
   }
 }
}