import { Component } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  map: GoogleMap;

  constructor (private geolocation: Geolocation, private platform: Platform) {

  }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.

    await this.platform.ready();
    await this.doGeolocation();
    
  }

  doGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log(resp.coords)
      this.loadMap(resp.coords.latitude, resp.coords.longitude)

     }).catch((error) => {
       console.log('Error getting location', error);
     });

     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }

  loadMap(lat, long) {
    console.log(lat);
    console.log(long)
    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyBYSMZsbAuG2W-OeE5o8bV-YaG4gvZcDpg',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBYSMZsbAuG2W-OeE5o8bV-YaG4gvZcDpg'
    });



    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: lat,
          lng: long
        },
        zoom: 18,
        tilt: 30
       }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // let marker1: Marker = this.map.addMarkerSync({
    //   title: 'Ionic',
    //   icon: 'blue',
    //   animation: 'DROP',
    //   position: {
    //     lat: 43.0741904,
    //     lng: -89.3809802
    //   }
    // });
    // marker1.showInfoWindow();
    // marker1.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //   alert('clicked');
    // });
    // let marker2: Marker = this.map.addMarkerSync({
    //   title: 'Ionic',
    //   icon: 'blue',
    //   animation: 'DROP',
    //   position: {
    //     lat: 43.0731904,
    //     lng: -89.3809802
    //   }
    // });
    // marker2.showInfoWindow();
    // marker2.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //   alert('clicked');
    // });
  }

}
