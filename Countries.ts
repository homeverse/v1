
export class Area {

    AreaName : string ;
    PPMs : number[] ;
    DPMs : number[] ;

    constructor(
        AreaName : string ,
    ) {
        this.AreaName = AreaName ;
        this.PPMs = [ 0 , 0 , 0 , 0 ] ;
        this.DPMs = [ 0 , 0 , 0 ] ;
    };

    PPMRate( Type : string ) : number {
        const Types = [ "Apartment" , "House" , "Store" , "Land" ];
        if( Types.includes( Type ) ) {
            const TypeIndex = Types.indexOf( Type );
            return this.PPMs[ TypeIndex ] ;
        } else {
            return 0 ;
        };
    };

    DPMRate( Type : string ) : number {
        const Types = [ "Apartment" , "House" , "Store" ];
        if( Types.includes( Type ) ) {
            const TypeIndex = Types.indexOf( Type );
            return this.DPMs[ TypeIndex ] ;
        } else {
            return 0 ;
        };
    };

    UpdatePPMRate( Type : string , Rate : number ) : boolean {
        const Types = [ "Apartment" , "House" , "Store" , "Land" ];
        if( Types.includes( Type ) ) {
            const TypeIndex = Types.indexOf( Type );
            this.PPMs[ TypeIndex ] = Rate ;
            return true ;
        } else {
            return false ;
        };
    };
    
    UpdateDPMRate( Type : string , Rate : number ) : boolean {
        const Types = [ "Apartment" , "House" , "Store" ];
        if( Types.includes( Type ) ) {
            const TypeIndex = Types.indexOf( Type );
            this.DPMs[ TypeIndex ] = Rate ;
            return true ;
        } else {
            return false ;
        };
    };

};

export class City {

    CityName : string ;
    AreasNames : string[] ;
    Areas : Area[] ;

    constructor(
        CityName : string ,
    ) {
        this.CityName = CityName ;
        this.AreasNames = [] ;
        this.Areas = [] ;
    };

    AreaNames() : string[] {
        return this.AreasNames ;
    };

    IsArea( AreaName : string ) : boolean {
        if( this.AreasNames.includes( AreaName ) ) {
            return true ;
        } else {
            return false ;
        };
    };
    
    InsertArea( AreaName : string ) : boolean {
        if( this.IsArea( AreaName ) ) {
            return false ;
        } else {
            this.AreasNames.push( AreaName );
            this.Areas.push( new Area( AreaName ) );
            return true ;
        };
    };

    AreaIndex( AreaName : string ) : number {
        return this.AreasNames.indexOf( AreaName );
    };

    UpdateArea( AreaName : string , NewAreaName : string ) : boolean {
        if( this.IsArea( AreaName ) ) {
            const AreaIndex = this.AreaIndex( AreaName );
            this.AreasNames[ AreaIndex ] = NewAreaName ;
            this.Areas[ AreaIndex ].AreaName = NewAreaName ;
            return true ;
        } else {
            return false ;
        };
    };

    DeleteArea( AreaName : string ) : boolean {
        if( this.IsArea( AreaName ) ) {
            const AreaIndex = this.AreaIndex( AreaName );
            this.AreasNames.splice( AreaIndex , 1 );
            this.Areas.splice( AreaIndex , 1 );
            return true ;
        } else {
            return false ;
        };
    };

};

export class Province {

    ProvinceName : string ;
    CitiesNames : string[] ;
    Cities : City[] ;

    constructor(
        ProvinceName : string ,
    ) {
        this.ProvinceName = ProvinceName ;
        this.CitiesNames = [] ;
        this.Cities = [] ;
    };

    CityNames() : string[] {
        return this.CitiesNames ;
    };

    IsCity( CityName : string ) : boolean {
        if( this.CitiesNames.includes( CityName ) ) {
            return true ;
        } else {
            return false ;
        };
    };

    InsertCity( CityName : string ) : boolean {
        if( this.IsCity( CityName ) ) {
            return false ;
        } else {
            this.CitiesNames.push( CityName );
            this.Cities.push( new City( CityName ) );
            return true ;
        };
    };

    CityIndex( CityName : string ) : number {
        return this.CitiesNames.indexOf( CityName );
    };

    UpdateCity( CityName : string , NewCityName : string ) : boolean {
        if( this.IsCity( CityName ) ) {
            const CityIndex = this.CityIndex( CityName );
            this.CitiesNames[ CityIndex ] = NewCityName ;
            this.Cities[ CityIndex ].CityName = NewCityName ;
            return true ;
        } else {
            return false ;
        };
    };

    DeleteCity( CityName : string ) : boolean {
        if( this.IsCity( CityName ) ) {
            const CityIndex = this.CityIndex( CityName );
            this.CitiesNames.splice( CityIndex , 1 );
            this.Cities.splice( CityIndex , 1 );
            return true ;
        } else {
            return false ;
        };
    };

};

export class Country {

    ProvincesNames : string[] ;
    Provinces : Province[] ;

    constructor() {
        this.ProvincesNames = [] ;
        this.Provinces = [] ;
    };

    ProvinceNames() : string[] {
        return this.ProvincesNames ;
    };

    IsProvince( ProvinceName : string ) : boolean {
        if( this.ProvincesNames.includes( ProvinceName ) ) {
            return true ;
        } else {
            return false ;
        };
    };

    InsertProvince( ProvinceName : string ) : boolean {
        if( this.IsProvince( ProvinceName ) ) {
            return false ;
        } else {
            this.ProvincesNames.push( ProvinceName );
            this.Provinces.push( new Province( ProvinceName ) );
            return true ;
        };
    };

    ProvinceIndex( ProvinceName : string ) : number {
        return this.ProvincesNames.indexOf( ProvinceName );
    };

    UpdateProvince( ProvinceName : string , NewProvinceName : string ) : boolean {
        if( this.IsProvince( ProvinceName ) ) {
            const ProvinceIndex = this.ProvinceIndex( ProvinceName );
            this.ProvincesNames[ ProvinceIndex ] = NewProvinceName ;
            this.Provinces[ ProvinceIndex ].ProvinceName = NewProvinceName ;
            return true ;
        } else {
            return false ;
        };
    };

    DeleteProvince( ProvinceName : string ) : boolean {
        if( this.IsProvince( ProvinceName ) ) {
            const ProvinceIndex = this.ProvinceIndex( ProvinceName );
            this.ProvincesNames.splice( ProvinceIndex , 1 );
            this.Provinces.splice( ProvinceIndex , 1 );
            return true ;
        } else {
            return false ;
        };
    };

    InsertCity( ProvinceName : string , CityName : string ) : boolean {
        if( this.IsProvince( ProvinceName ) == false ) {
            this.InsertProvince( ProvinceName );
        };
        const ProvinceIndex = this.ProvinceIndex( ProvinceName );
        return this.Provinces[ ProvinceIndex ].InsertCity( CityName );
    };

    UpdateCity( ProvinceName : string , CityName : string , NewCityName : string ) : boolean {
        if( this.IsProvince( ProvinceName ) ) {
            const ProvinceIndex = this.ProvinceIndex( ProvinceName );
            return this.Provinces[ ProvinceIndex ].UpdateCity( CityName , NewCityName );
        } else {
            return false ;
        };
    };

    DeleteCity( ProvinceName : string , CityName : string ) : boolean {
        if( this.IsProvince( ProvinceName ) ) {
            const ProvinceIndex = this.ProvinceIndex( ProvinceName );
            return this.Provinces[ ProvinceIndex ].DeleteCity( CityName );
        } else {
            return false ;
        };
    };

    InsertArea( ProvinceName : string , CityName : string , AreaName : string ) : boolean {
        if( this.IsProvince( ProvinceName ) == false ) {
            this.InsertProvince( ProvinceName );
        };
        const ProvinceIndex = this.ProvinceIndex( ProvinceName );
        if( this.Provinces[ ProvinceIndex ].IsCity( CityName ) == false ) {
            this.InsertCity( ProvinceName , CityName );
        };
        const CityIndex = this.Provinces[ ProvinceIndex ].CityIndex( CityName );
        return this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].InsertArea( AreaName );
    };

    UpdateArea( ProvinceName : string , CityName : string , AreaName : string , NewAreaName : string ) : boolean {
        if( this.IsProvince( ProvinceName ) ) {
            const ProvinceIndex = this.ProvinceIndex( ProvinceName );
            if( this.Provinces[ ProvinceIndex ].IsCity( CityName ) ) {
                const CityIndex = this.Provinces[ ProvinceIndex ].CityIndex( CityName );
                return this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].UpdateArea( AreaName , NewAreaName );
            } else {
                return false ;
            };
        } else {
            return false ;
        };
    };

    DeleteArea( ProvinceName : string , CityName : string , AreaName : string ) : boolean {
        if( this.IsProvince( ProvinceName ) ) {
            const ProvinceIndex = this.ProvinceIndex( ProvinceName );
            if( this.Provinces[ ProvinceIndex ].IsCity( CityName ) ) {
                const CityIndex = this.Provinces[ ProvinceIndex ].CityIndex( CityName );
                return this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].DeleteArea( AreaName );
            } else {
                return false ;
            };
        } else {
            return false ;
        };
    };

    PPMRate( ProvinceName : string , CityName : string , AreaName : string , Type : string ) : number {
        if( this.IsProvince( ProvinceName ) ) {
            const ProvinceIndex = this.ProvinceIndex( ProvinceName );
            if( this.Provinces[ ProvinceIndex ].IsCity( CityName ) ) {
                const CityIndex = this.Provinces[ ProvinceIndex ].CityIndex( CityName );
                if( this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].IsArea( AreaName ) ) {
                    const AreaIndex = this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].AreaIndex( AreaName );
                    return this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].Areas[ AreaIndex ].PPMRate( Type );
                } else {
                    return 0 ;
                };
            } else {
                return 0 ;
            };
        } else {
            return 0 ;
        };
    };

    DPMRate( ProvinceName : string , CityName : string , AreaName : string , Type : string ) : number {
        if( this.IsProvince( ProvinceName ) ) {
            const ProvinceIndex = this.ProvinceIndex( ProvinceName );
            if( this.Provinces[ ProvinceIndex ].IsCity( CityName ) ) {
                const CityIndex = this.Provinces[ ProvinceIndex ].CityIndex( CityName );
                if( this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].IsArea( AreaName ) ) {
                    const AreaIndex = this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].AreaIndex( AreaName );
                    return this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].Areas[ AreaIndex ].DPMRate( Type );
                } else {
                    return 0 ;
                };
            } else {
                return 0 ;
            };
        } else {
            return 0 ;
        };
    };

    UpdatePPMRate( ProvinceName : string , CityName : string , AreaName : string , Type : string , Rate : number ) : boolean {
        if( this.IsProvince( ProvinceName ) ) {
            const ProvinceIndex = this.ProvinceIndex( ProvinceName );
            if( this.Provinces[ ProvinceIndex ].IsCity( CityName ) ) {
                const CityIndex = this.Provinces[ ProvinceIndex ].CityIndex( CityName );
                if( this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].IsArea( AreaName ) ) {
                    const AreaIndex = this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].AreaIndex( AreaName );
                    return this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].Areas[ AreaIndex ].UpdatePPMRate( Type , Rate );
                } else {
                    return false ;
                };
            } else {
                return false ;
            };
        } else {
            return false ;
        };
    };

    UpdateDPMRate( ProvinceName : string , CityName : string , AreaName : string , Type : string , Rate : number ) : boolean {
        if( this.IsProvince( ProvinceName ) ) {
            const ProvinceIndex = this.ProvinceIndex( ProvinceName );
            if( this.Provinces[ ProvinceIndex ].IsCity( CityName ) ) {
                const CityIndex = this.Provinces[ ProvinceIndex ].CityIndex( CityName );
                if( this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].IsArea( AreaName ) ) {
                    const AreaIndex = this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].AreaIndex( AreaName );
                    return this.Provinces[ ProvinceIndex ].Cities[ CityIndex ].Areas[ AreaIndex ].UpdateDPMRate( Type , Rate );
                } else {
                    return false ;
                };
            } else {
                return false ;
            };
        } else {
            return false ;
        };
    };

};
