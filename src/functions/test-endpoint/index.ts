import { HealthResponse200 } from './health.type.js'

import { httpHandler } from '@skyleague/event-horizon'

export const handler = httpHandler({
    http: {
        method: 'get',
        path: '/health',
        schema: {
            responses: {
                200: HealthResponse200,
            },
        },
        handler: (event, context) => {
            // event.
            // context.config.
            // logger.info('Request received', {
            //     foo: 'bar',
            // })

            return {
                statusCode: 200,
                body: {
                    healthy: true,
                },
            }
        },
    },
})
