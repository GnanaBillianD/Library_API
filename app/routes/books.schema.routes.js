const listOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                response: {
                    200: {
                        type : 'object',
                        properties: {
                            id: { type: 'number' },
                            name: { type: 'string' },
                            author: { type: 'string' },
                            category: { type: 'string' },
                            price: { type: 'number' },
                            notes: { type: 'string' },
        
                        },
                    },
                },
            },
        },
    },
}


const getByIdOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    name: { type: 'string' },
                    author: { type: 'string' },
                    category: { type: 'string' },
                    price: { type: 'number' },
                    notes: { type: 'string' },

                },
            },
        },
    }
}


const createOpts = {
    schema: {
        body: {
            properties: {
                book: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        author: { type: 'string' },
                        category: { type: 'string' },
                        price: { type: 'number' },
                        notes: { type: 'string' },
                    }
                }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    name: { type: 'string' },
                    author: { type: 'string' },
                    category: { type: 'string' },
                    price: { type: 'number' },
                    notes: { type: 'string' },

                },
            },
        },
    }
}



const updateOpts = {
    schema: {
        body: {
            properties: {
                book: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        author: { type: 'string' },
                        category: { type: 'string' },
                        price: { type: 'number' },
                        notes: { type: 'string' },
                    }
                }
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    name: { type: 'string' },
                    author: { type: 'string' },
                    category: { type: 'string' },
                    price: { type: 'number' },
                    notes: { type: 'string' },

                },
            },
        },
    }
}


const deleteOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: {type: 'string'}
                }
            },
        },
    },
}


module.exports = {
    listOpts,
    getByIdOpts,
    createOpts,
    updateOpts,
    deleteOpts

}
