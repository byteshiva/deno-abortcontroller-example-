// fetchWithAbort.ts
export async function fetchDataWithAbort(url: string, signal: AbortSignal): Promise<void> {
    try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data received:', data);
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error('Fetch error:', error);
        }
    }
}

export function startFetchWithTimeout(url: string, timeout: number): void {
    const controller = new AbortController();
    const signal = controller.signal;

    // Start the fetch request
    fetchDataWithAbort(url, signal);

    // Set a timeout to abort the request
    const timeoutId = setTimeout(() => {
        controller.abort();
        console.log('Request timed out and aborted');
    }, timeout);

    // Optionally, you can clear the timeout if the request completes before the timeout
    signal.addEventListener('abort', () => {
        clearTimeout(timeoutId);
    });
}
