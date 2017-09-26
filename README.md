# Facility Base
Facility Base is a compound of components for creating new Facility data providers and it also contains Interfaces, Entities, and Enums which can be used globally.
## Requirements
- [Node.js](https://nodejs.org/) v6+
- Typescript
## Installation
Go to the package root folder and execute the command:
```sh
npm install 
```
## Components
Facility's base components.
  - Lib - Facility's Business Components.
  - Common - Facility's Common Components (ICallbacks).
  - Models - Facility's Interfaces, Classes and Enums.
### Code
[Code documentation](http://htmlpreview.github.io/?https://github.com/JamilOmar/facility-base/blob/master/docs/globals.html)
## Usage
Create a new typescript project and reference facility-base, Implement each of the Lib's Interfaces
```sh
import * as FacilityBase from 'facility-base'

class Facility implements FacilityBase.Lib.Interfaces.IFacility
{
    settings(callback?: FacilityBase.Common.Interfaces.ICallback): FacilityBase.Models.Interfaces.IFacilitySettings{
        let settings = new FacilityBase.Models.Entities.FacilitySettings();
        settings.isInherited
.....

        return settings;
    }
  ........
}
```
License
----

MIT
