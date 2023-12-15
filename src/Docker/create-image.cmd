docker build --no-cache -f SQL\Dockerfile.PostgreSql -t ifyvami/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t ifyvami/app ../..
