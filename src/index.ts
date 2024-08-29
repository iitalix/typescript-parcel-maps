/// <reference types="@types/google.maps" />
/* this file is used to import all necessary ts files,
which will be used in the index.html file */

// import Classes
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// generate new instances of each Class
const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

// call methods to use in index.html file
customMap.addMarker(user);
customMap.addMarker(company);
