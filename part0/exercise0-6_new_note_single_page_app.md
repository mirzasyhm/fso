```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: POST request contains JSON payload
    activate server
    server-->>browser: returns JSON response
    deactivate server

    Note right of browser: The browser executes the callback function that re-renders the notes
```