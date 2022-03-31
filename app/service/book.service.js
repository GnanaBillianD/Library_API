const Books = require('../models').Books;

function bookCreated(attibutes) {
    return Books.create(attibutes)
}


function booksList() {
    return Books
        .findAll()
}


function getById(id) {
    return Books.findOne({ where: { id } }).then((book) => {
        console.log('book is', book);
        if (!book) {
            throw new Error('Book not found')
        }
        return book;
    })
}

async function bookUpdated(id, attibutes) {
    const book = await Books.findOne({ where: { id } })
    if (!book) {
        throw new Error('Book not found')
    }
    return book.update(attibutes)
}


async function bookDeleted(id) {
    const book = await Books.findOne({ where: { id } })
    if (!book) {
        throw new Error('Book not found')
    }
    return book.destroy(id)
}


function findBook(req, reply) {
    if (!Books) {
        return reply.status(400).send({
            message: 'Book not found',
        })
    }
    else {
        return reply.status(200).send(Books);
    }
}




module.exports = {
    bookCreated,
    booksList,
    bookUpdated,
    bookDeleted,
    findBook,
    getById
}
