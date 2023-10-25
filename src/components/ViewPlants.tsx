'use client'

import { useState, useEffect } from 'react'
import { use } from 'react'

const getPlants = async (): Promise<Plant[]> => {
  const data = await fetch("http://localhost:3000/api/plants")
  const plants = await data.json()

  return plants
};

export default function ViewPlants() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    getPlants()
  }, [])

  const getPlants = async () => {
    const data = await fetch("http://localhost:3000/api/plants")
    // console.log(data)
    setPlants(data.json())
  }

  console.log(plants)

  // const plants = use(getPlants())
 
  return (
    <div>
      <h2>Your plants:</h2>
      {/* {plants.map((plant) => {
        return (
          <>
            <div key={plant.id}>
              <h3>{plant.species}</h3>
            </div>
          </>
        )
      })} */}
    </div>
  )
}
