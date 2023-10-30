sleep 30s &&
echo "running set up script" &&
/opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P $MSSQL_SA_PASSWORD -i createDb.sql