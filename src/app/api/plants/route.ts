import connectMongo from '@/lib/connect-db'
import Plant from '@/models/Plants'

// POST handler to create a new plant.
export async function POST(request: Request) {
  try {
    await connectMongo()
    const data = await request.json()

    const savedPlant = await new Plant(data).save()

    return Response.json({ 
      "message": "Plant created successfully",
      "success": true,
      savedPlant
    })
  } catch (err) {
    return Response.json({ error: `Internal Server Error: ${err}` }, { status: 500 })
  }
}

// GET handler to return all plants.
export async function GET() {
  try {
    await connectMongo()

    const data = await Plant.find({})

    return Response.json(data)
  } catch (err) {
    return Response.json({ error: `Internal Server Error: ${err}` }, { status: 500 })
  }
}
