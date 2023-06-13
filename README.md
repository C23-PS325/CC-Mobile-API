# CC-API
Version: MySQL 5.7

### Users
![Alt text](image.png)

Instance: communicare<br />
Database: users<br />
Table: users<br />
<br />
Config app.yaml:
  DB_USER: "root"
  DB_NAME: "users"
  DB_PASS: ""
  DB_INSTANCE_UNIX_SOCKET: 
  "/cloudsql/<NAMAPROJECT>:<REGION>:<INSTANCE>"
    ex:
  "/cloudsql/communicare-388309:us-central1:communicare"

### Script
![Alt text](image-1.png)

Instance: communicare<br />
Database: script<br />
Table: script<br />
<br />
Config app.yaml:
  DB_USER: "root"
  DB_NAME: "script"
  DB_PASS: ""
  DB_INSTANCE_UNIX_SOCKET: 
  "/cloudsql/<NAMAPROJECT>:<REGION>:<INSTANCE>"
  ex:
  "/cloudsql/communicare-388309:us-central1:communicare"
