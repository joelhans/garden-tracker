import connectMongo from '@/lib/connect-db'
import Plant from '@/models/Plants'

// PUT handler to update a single plant with `_id`.
export async function PUT(
    request: Request,
    { params }: { params: { _id: string } } 
  ) {
  try {
    await connectMongo()
    const data = await request.json()

    const updatedPlant = await Plant.findByIdAndUpdate(params._id, data, { new: true })

    return Response.json({ 
      "message": `Plant ${params._id} updated successfully`,
      "success": true,
      updatedPlant
    })
  } catch (err) {
    return Response.json({ error: `Internal Server Error: ${err}` }, { status: 500 })
  }
}

// DELETE handler to delete a single plant with `_id`.
export async function DELETE(
    request: Request,
    { params }: { params: { _id: string } } 
  ) {
  try {
    await connectMongo()

    await Plant.findByIdAndRemove(params._id)

    return Response.json({
      "message": `Plant ${params._id} deleted`
    })
  } catch (err) {
    return Response.json({ error: `Internal Server Error: ${err}` }, { status: 500 })
  }
}
