import { Response, IncomingBody, IncomingHeaders } from './post.type.js'

import { httpHandler } from '@skyleague/event-horizon'

export const handler = httpHandler({
    http: {
        method: 'get',
        path: '/health',
        schema: {
            body: IncomingBody,
            headers: IncomingHeaders,
            responses: {
                200: Response,
            },
        },
        handler: (event, { logger }) => {
            logger.info('Request received', {
                foo: 'bar',
            })

            return {
                statusCode: 200,
                body: {
                    id: 'a232',
                },
            }
        },
    },
})
