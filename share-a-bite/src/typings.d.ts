declare namespace google.maps {
    // Basic declarations needed for your component
    class Geocoder {
      geocode(request: GeocoderRequest, callback: (results: GeocoderResult[], status: GeocoderStatus) => void): void;
    }
    
    interface GeocoderRequest {
      address?: string;
      location?: LatLng | LatLngLiteral;
    }
  
    interface GeocoderResult {
      geometry: {
        location: LatLng;
        viewport: LatLngBounds;
      };
    }
  
    class LatLng {
      constructor(lat: number, lng: number);
      lat(): number;
      lng(): number;
    }
  
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }
  
    class LatLngBounds {
      // Add methods if needed
    }
  
    type GeocoderStatus = 'OK' | 'ZERO_RESULTS' | 'ERROR';
  
    class PlacesService {
      constructor(attrContainer: HTMLDivElement | Map);
      nearbySearch(request: PlacesSearchRequest, callback: (results: PlaceResult[], status: PlacesServiceStatus) => void): void;
    }
  
    interface PlacesSearchRequest {
      location?: LatLng | LatLngLiteral;
      radius?: number;
      type?: string;
    }
  
    interface PlaceResult {
      geometry: {
        location: LatLng;
      };
      name?: string;
      rating?: number;
      vicinity?: string;
    }
  
    type PlacesServiceStatus = 'OK' | 'ZERO_RESULTS' | 'ERROR';
  }
  
  // Declare the global google variable
  declare const google: {
    maps: typeof google.maps;
  };