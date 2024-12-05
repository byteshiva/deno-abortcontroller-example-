# Deno AbortController Example

This project demonstrates how to use `AbortController` in a Deno environment with TypeScript to manage and cancel fetch requests.

## Setup

1. Ensure you have Deno installed. You can download it from [deno.land](https://deno.land/).

2. Clone this repository:
   ```sh
   git clone https://github.com/byteshiva/deno-abortcontroller-example.git
   cd deno-abortcontroller-example
   ```

3. Run the example:
   ```sh
   deno run --allow-net main.ts
   ```

## Files

- `fetchWithAbort.ts`: Contains the functions to handle the fetch request and manage cancellation using `AbortController`.
  - `fetchDataWithAbort`: A function that performs a fetch request and handles cancellation using an `AbortSignal`.
  - `startFetchWithTimeout`: A function that starts a fetch request and sets a timeout to abort the request if it takes too long.

- `main.ts`: Imports and uses the functions from `fetchWithAbort.ts` to demonstrate how to initiate a fetch request with a timeout.
  - The script fetches data from a sample API (https://jsonplaceholder.typicode.com/posts) and sets a timeout of 2 seconds.

- `README.md`: Provides an overview of the project, setup instructions, and usage examples.
  - Includes steps to run the example using Deno.
  - Describes the expected output when the script is executed.

- `.gitignore`: Includes a basic `.gitignore` file to exclude Deno-specific files from version control.

## Output

When you run the script, you should see output similar to the following:

```sh
Data received: [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  ...
]
```

If the request takes longer than 2 seconds, you will see:

```sh
Request timed out and aborted
```

