/// <reference types="@types/google.maps" />
/* this file is used to import all necessary ts files,
which will be used in the index.html file */

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
