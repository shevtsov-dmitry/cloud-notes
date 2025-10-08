CREATE TABLE "user"
(
    id    SERIAL PRIMARY KEY,
    name  VARCHAR(255),
    email VARCHAR(255) NOT NULL
);

CREATE TABLE note
(
    id          SERIAL PRIMARY KEY,
    userId      INT REFERENCES "user" (id),
    title       VARCHAR(255),
    textContent TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE noteTags
(
    id     SERIAL PRIMARY KEY,
    noteId INT REFERENCES note (id),
    name   VARCHAR(255) NOT NULL
)
