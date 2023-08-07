import { $headers, $number, $object, $ref, $string, $validator } from '@skyleague/therefore'

export const incomingHeaders = $headers({
    'x-trace-id': $string,
})

export const loyalty = $object({
    id: $string({ optional: true }),
    beans: $number,
})

export const incomingBody = $validator(
    $object({
        loyalty: $ref(loyalty),
    })
)

export const response = $validator(
    $object({
        loyalty,
    })
)
