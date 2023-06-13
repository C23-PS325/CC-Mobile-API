# CC-API
Version: MySQL 5.7

### Users
![Alt text](image.png)

Instance: communicare<br />
Database: users<br />
Table: users<br />
<br />
Config app.yaml:<br />
  DB_USER: "root"<br />
  DB_NAME: "users"<br />
  DB_PASS: ""<br />
  DB_INSTANCE_UNIX_SOCKET: <br />
  "/cloudsql/(NAMAPROJECT):(REGION):(INSTANCE)"<br />
    ex:<br />
  "/cloudsql/communicare-388309:us-central1:communicare"<br />
<br />
### Script<br />
![Alt text](image-1.png)<br />

Instance: communicare<br />
Database: script<br />
Table: script<br />
<br />
Config app.yaml:<br />
  DB_USER: "root"<br />
  DB_NAME: "script"<br />
  DB_PASS: ""<br />
  DB_INSTANCE_UNIX_SOCKET: <br />
  "/cloudsql/(NAMAPROJECT):(REGION):(INSTANCE)"<br />
  ex:<br />
  "/cloudsql/communicare-388309:us-central1:communicare"<br />
