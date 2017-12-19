

# Development

Install couchdb and run it locally :

```
brew services start couchdb
```

# DB backup and restore

Backup:
```
bash couchdb-backup.sh -b -H 127.0.0.1 -d my-db -f dumpedDB.json -u admin -p password
```


Restore:
```
bash couchdb-backup.sh -r -H 127.0.0.1 -d my-db -f dumpedDB.json -u admin -p password
```


```
Usage: ./couchdb-backup.sh [-b|-r] -H <COUCHDB_HOST> -d <DB_NAME> -f <BACKUP_FILE> [-u <username>] [-p <password>] [-P <port>] [-l <lines>] [-t <threads>] [-a <import_attempts>]
  -b   Run script in BACKUP mode.
  -r   Run script in RESTORE mode.
  -H   CouchDB Hostname or IP. Can be provided with or without 'http(s)://'
  -d   CouchDB Database name to backup/restore.
  -f   File to Backup-to/Restore-from.
  -P   Provide a port number for CouchDB [Default: 5984]
  -u   Provide a username for auth against CouchDB [Default: blank]
         -- can also set with 'COUCHDB_USER' environment var
  -p   Provide a password for auth against CouchDB [Default: blank]
         -- can also set with 'COUCHDB_PASS' environment var
  -l   Number of lines (documents) to Restore at a time. [Default: 5000] (Restore Only)
  -t   Number of CPU threads to use when parsing data [Default: nProcs-1] (Backup Only)
  -a   Number of times to Attempt import before failing [Default: 3] (Restore Only)
  -c   Create DB on demand, if they are not listed.
  -q   Run in quiet mode. Suppress output, except for errors and warnings.
  -z   Compress output file (Backup Only)
  -T   Add datetime stamp to output file name (Backup Only)
  -V   Display version information.
  -h   Display usage information.

Example: ./couchdb-backup.sh -b -H 127.0.0.1 -d mydb -f dumpedDB.json -u admin -p password
```


See https://github.com/danielebailo/couchdb-dump for more information.
