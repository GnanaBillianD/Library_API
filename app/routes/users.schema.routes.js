const listOpt = {
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
                            email: { type: 'string' },
                            encypted_password: { type: 'string' },
                            access_token: { type: 'string' }
                        },
                    },
                },
            },
        },
    },
}

module.exports = {
    listOpt
}