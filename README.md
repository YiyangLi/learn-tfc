# Learn Terraform

## What it is
The terraform plan contains 2 types of modules -- EC2 and RDS. It's used to build a data app that consists of: 
1. [Airbyte(EC2)](https://docs.airbyte.com/deploying-airbyte/on-aws-ec2/) that moves data from various sources to a postgres DB. 
2. Vault Server, an EC2, that stores credentials including access token for airbyte to extract data, and other database credentials. 
3. Destination DB, an RDS, that stores the data loaded from Airbyte
4. [Metabase](https://www.metabase.com/), an EC2, that runs the OSS Business Intelligence tool, where you can run query and build dashboard for your data
5. Metabase DB, an RDS, is the database dependency for Metabase

## Limitation
The EC2 module only provisions an EC2 with docker installed. I tried to install docker-compose, but it doesn't work :shrug:
The RDS provisions Postgres DB, and stores the credentials of the main user to

## How to use it
### Get Vault Server up firstly
- The EC2 module only gives you an EC2 with docker service running, you still need to manually setup the instance. Firstly, please run the following command to install docker-compose. 
```shell
sudo wget https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m) -O /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
logout
```
- Follow [this instruction](https://blog.ruanbekker.com/blog/2019/05/06/setup-hashicorp-vault-server-on-docker-and-cli-guide/) to setup a vault server
- Install vault client in your local machine if you haven't done so
```shell
brew install vault
```
- Set Environment Variables in your local machine, so that you can use vault locally. 
```shell
export VAULT_ADDR='http://your-public-vault-server.com:8200'
export VAULT_TOKEN='the vault token, something like s.tdlEqsfzGbePVlke5hTpr9Um'
```
- You can also test the vault client by the following command
```
$ vault kv put secret/my-app/password password=123
$ vault kv get secret/my-app/password
Key                 Value
---                 -----
refresh_interval    768h
password            123
```
### Get Airbyte up and load data to Destination DB
- The EC2 module only gives you an EC2 with docker service running, you still need to manually setup the instance. Firstly, please run the following command to install docker-compose. 
```shell
sudo wget https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m) -O /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
logout
```
- Follow [the instruction](https://docs.airbyte.com/deploying-airbyte/on-aws-ec2/) to spin up a simple airbyte by using the default `docker-compose.yaml` and `.env`
- (optional) If you want to integrate airbyte (since 0.39.25-alpha) with your vault server, and ask airbyte to store credential in vault, you can setup the following environment variables under `.env`
```shell
SECRET_PERSISTENCE='VAULT'
VAULT_ADDRESS='http://your-public-vault-server.com:8200'
VAULT_PREFIX='secret/path/to/credential/'
VAULT_AUTH_TOKEN='same as VAULT_TOKEN'
VAULT_AUTH_METHOD='token'
```
- Provisiong an RDS for the destination DB, the credential will be stored in vault. Or you could add output in terraform to print credentials for the db access. 
- Setup a [postgres destination connector](https://docs.airbyte.com/integrations/destinations/postgres/) in Airbyte
- Setup a source connector and load data to the Destination DB

### Spin up Metabase
- [It's pretty easy to spin up a metabase in docker](https://www.metabase.com/docs/latest/operations-guide/running-metabase-on-docker.html). The simple setup include both Metabase and the database. It's recommended to provision an RDS for Metabase. 
- The EC2 module only gives you an EC2 with docker service running, you still need to manually setup the instance. Firstly, please run the following command to install docker-compose. 
```shell
sudo wget https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m) -O /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
logout
```
- Assuming you have docker-compose installed and RDS provisioned, you can easily spin up a metabase by the following command
```
docker run -d -p 3000:3000 \
  -e "MB_DB_TYPE=postgres" \
  -e "MB_DB_DBNAME=metabase" \
  -e "MB_DB_PORT=5432" \
  -e "MB_DB_USER=name" \
  -e "MB_DB_PASS=password" \
  -e "MB_DB_HOST=the-rds-host" \
   --name metabase metabase/metabase
```

