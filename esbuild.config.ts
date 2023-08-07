import { listLambdaHandlers, esbuildLambda } from '@skyleague/esbuild-lambda'

import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function main() {
    const handlers = await listLambdaHandlers(path.join(__dirname, 'src', 'functions'))
    await Promise.all(handlers.map((fnDir) => esbuildLambda(fnDir, { root: __dirname })))
}
main().catch((err) => {
    console.error(err)
    process.exit(1)
})
