# bluestock

This project is made possible through the generous support of [OurResearch](https://ourresearch.org/)'s [Unpaywall](https://unpaywall.org/)

## todo
front-end:
 - [ ] a little comments button on the left to take you to the details page
 - [ ] sort, filter, search
 - [ ] stats
 - [ ] on the right: 
    - up/down for given tag
    - button to add to collections (similar to yt playlists)
    - ... to change tag
 - [ ] details page
    - ability to contribute info
    - comments

## data model
 - lists
    - name
    - schema
 - things
    - list_id
    - thing (JSON)
 - users
    - username
    - password
 - comments
    - user_id
    - thing_id
 - collections
    - user_id
 - collection_members
    - collection_id
 - vote
    - thing_id
    - user_id
    - tag
