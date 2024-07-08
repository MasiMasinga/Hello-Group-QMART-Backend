# hello_group_qmart_backend

This project is a Node.js and Express backend application using Prisma ORM and PostgreSQL. It provides APIs for managing comments, replies, schedules, players, and match highlights for the Assessment.

## Clone the Repository

```js
    git clone https://github.com/MasiMasinga/Hello-Group-Qmart-Backend.git
    cd Hello-Group-Qmart-Backend
```

## Install Dependencies

```js
    npm install
```

## Running the App

```js
    npm start
```

## API Endpoints

### Add a Comment

URL: /api/
Method: POST

```js
    Body:
    {
        "name": "Fan Name",
        "comment": "Great match!"
    }
```

Success Response:

```js
{
    "id": 1,
    "name": "Fan Name",
    "comment": "Great match!",
    "created_at": "2024-06-28T12:00:00Z"
}
```

### Reply to a Comment

URL: /api/:comment_id/replies
Method: POST
Body:

```js
{
    "fan_name": "Another Fan",
    "fan_reply": "I agree!",
    "created_at": "2024-06-28T12:30:00Z"
}
```

Success Response:

```js
{
    "id": 1,
    "comment_id": 1,
    "fan_name": "Another Fan",
    "fan_reply": "I agree!",
    "created_at": "2024-06-28T12:30:00Z"
}
```

### Get All Comments and Replies

URL: /api/
Method: GET
Success Response:

```js
[
    {
        "id": 1,
        "name": "Fan Name",
        "comment": "Great match!",
        "created_at": "2024-06-28T12:00:00Z",
        "replies": [
            {
                "id": 1,
                "comment_id": 1,
                "fan_name": "Another Fan",
                "fan_reply": "I agree!",
                "created_at": "2024-06-28T12:30:00Z"
            }
        ]
    }
    ...
]
```

### Get Comments and Replies by Comment ID

URL: /api/:comment_id
Method: GET
Success Response:

```js
{
    "id": 1,
    "name": "Fan Name",
    "comment": "Great match!",
    "created_at": "2024-06-28T12:00:00Z",
    "replies": [
        {
            "id": 1,
            "comment_id": 1,
            "fan_name": "Another Fan",
            "fan_reply": "I agree!",
            "created_at": "2024-06-28T12:30:00Z"
        }
    ]
}
```

### Get Schedule

URL: /api/schedule
Method: GET
Success Response:

```js
[
    {
        "date": "2024-07-01",
        "time": "18:00",
        "opponent": "Orlando Pirates",
        "venue": "FNB Stadium"
    },
    ...
]
```

### Get Players

URL: /api/players
Method: GET
Success Response:

```js
[
    {
        "name": "Bruce Bvuma",
        "rank": 44,
        "position": "Goalkeeper",
        "age": 29,
        "start_date": "2023-06-30",
        "google_image_url": "https://www.google.com/search?q=Bruce+Bvuma&tbm=isch"
    },
    ...
]
```

### Get Match Results

URL: /api/results
Method: GET
Success Response:

```js
[
    {
        "date": "2024-05-02",
        "opponent": "Mamelodi Sundowns",
        "score": "1-5",
        "highlights_url": "https://za.soccerway.com/teams/south-africa/kaizer-chiefs/3528/matches/"
    },
    ...
]
```
