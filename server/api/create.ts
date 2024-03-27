import path from 'node:path'
import fs from 'node:fs'
import os from 'node:os'
export default defineEventHandler(async(event) => {
    return path.join(os.homedir());
});
