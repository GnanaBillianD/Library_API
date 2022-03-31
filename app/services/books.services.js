const books = require('../models').books;

function create(attibutes) {
    return books.create(attibutes)
}


function list() {
    return books
        .findAll()
}


function getById(id) {
    return books.findOne({ where: { id } }).then((book) => {
        // console.log('book is', book);
        if (!book) {
            throw new Error('Book not found')
        }
        return book;
    })
}

async function update(id, attibutes) {
    const book = await books.findOne({ where: { id } })
    if (!book) {
        throw new Error('Book not found')
    }
    return book.update(attibutes)
}


async function destroy(id) {
    const book = await books.findOne({ where: { id } })
    if (!book) {
        throw new Error('Book not found')
    }
    return book.destroy(id)
}





module.exports = {
    create,
    list,
    update,
    destroy,
    getById
}
