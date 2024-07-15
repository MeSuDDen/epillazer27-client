// types/yandex-maps.d.ts
declare module '@pbe/react-yandex-maps' {
    import React from 'react'

    export interface YMapsProps {
        query: {
            apikey: string
        }
        children?: React.ReactNode
    }

    export const YMaps: React.FC<YMapsProps>

    export interface MapProps {
        state: {
            center: number[]
            zoom: number
        }
        width: string
        height: string
        options?: object
        children?: React.ReactNode
    }

    export const Map: React.FC<MapProps>

    export interface PlacemarkProps {
        geometry: number[]
        properties: object
    }

    export const Placemark: React.FC<PlacemarkProps>

    export interface ZoomControlProps {
        options: object
    }

    export const ZoomControl: React.FC<ZoomControlProps>

    export interface GeolocationControlProps {
        options: object
    }

    export const GeolocationControl: React.FC<GeolocationControlProps>
}
