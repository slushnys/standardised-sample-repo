import { $boolean, $object, $validator } from '@skyleague/therefore'

export const HealthResponse200 = $validator(
    $object({
        healthy: $boolean,
    })
)
