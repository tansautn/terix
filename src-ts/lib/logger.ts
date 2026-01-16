import { info, warn, error, debug } from '@tauri-apps/plugin-log';

// Scope for differentiation
const createLogger = (scope: string) => ({
    info: (msg: string, data?: unknown) => {
        // Safe check for browser environment without Tauri
        if (typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window) {
            info(`[${scope}] ${msg}`, data ? { data } : undefined);
        } else {
            console.info(`[${scope}] ${msg}`, data);
        }
    },
    warn: (msg: string, data?: unknown) => {
        if (typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window) {
            warn(`[${scope}] ${msg}`, data ? { data } : undefined);
        } else {
            console.warn(`[${scope}] ${msg}`, data);
        }
    },
    error: (msg: string, err?: unknown) => {
        if (typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window) {
            error(`[${scope}] ${msg}`, err instanceof Error ? { stack: err.stack, msg: err.message } : { err });
        } else {
            console.error(`[${scope}] ${msg}`, err);
        }
    },
    debug: (msg: string, data?: unknown) => {
        if (typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window) {
            debug(`[${scope}] ${msg}`, data ? { data } : undefined);
        } else {
            console.debug(`[${scope}] ${msg}`, data);
        }
    },
});

export default createLogger;