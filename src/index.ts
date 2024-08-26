/// <reference types="@types/google.maps" />

/* this file is used to import all necessary ts files,
which will be used in the index.html file */

// import { User } from './User';
// import { Company } from './Company';

new google.maps.Map(document.getElementById('map') as HTMLElement, {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
});
