const getNotes = async ( request, response ) => {
    const database = request.app.get("database");
    database.collection( "todoappcollection" ).find( {} ).toArray( ( error, result ) => {
        response.send( result );
    } );
}

const addNotes = async ( request, response ) => {
    const database = request.app.get("database");
    database.collection("todoappcollection").count( {}, function( error, numOfDocs ) {
        database.collection("todoappcollection").insertOne( {
            id: ( numOfDocs + 1 ).toString(),
            description: request.body.newNotes
        } );

        response.json( "Added Successfully" );
    } );
}

const deleteNotes = async ( request, response ) => {
    const database = request.app.get("database");
    database.collection("todoappcollection").deleteOne({
        id: request.query.id
    });

    response.json("Delete Successfully");
}

module.exports = {
    getNotes,
    addNotes,
    deleteNotes
};