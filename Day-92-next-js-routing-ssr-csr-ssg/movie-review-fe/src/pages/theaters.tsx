import React, { useEffect, useState } from "react";

interface IGeo {
    type: {
        type: string,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [number, number],
        required: true
    }
}

interface IAddress {
    street1: string,
    city: string,
    state: string,
    zip: string
}

interface ILocation {
    address: IAddress
    geo: IGeo
}

interface ITheater {
    theaterId: number,
    location: ILocation
}

interface ITheater {
    name: string;
}

export default function theaters(): JSX.Element {
    const [theaters, setTheaters] = useState<ITheater[]>([])
    async function getTheaters(): Promise<void> {
        const response = await fetch("http://localhost:8384/theaters/list");
        const theaters = await response.json()
        setTheaters(theaters)
    }

    useEffect(()=> {
        getTheaters();
    },[])


  return (
    <div>
        <h1>Movies</h1>
       {theaters.map((theater, index) => (
            <div key={index}> {theater.location.address.street1}</div>)
        )}
    </div>
  );
}
