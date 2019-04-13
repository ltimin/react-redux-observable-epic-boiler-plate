/**
 * Returns the state object from localStorage.
 */
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

/**
 * Writes `state` to localStorage.
 */
export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

/**
 * Destroys the currently stored state in localStorage.
 */
export const destroyState = () => {
    try {
        localStorage.removeItem('state');
    } catch (err) {
        // Ignore errors.
    }
};
