## Install all package python
```
source env/bin/activate
pip install -r requirements.txt
```
## Install redis 5.0.8 to run service
Make sure to delete folder redis in this folder
```
wget http://download.redis.io/releases/redis-5.0.8.tar.gz
tar xzf redis-5.0.8.tar.gz
cd redis-5.0.8
make
```
after install run redis server
```
src/redis-server
```
## Make your own .env
```
cd services/
cp .env.example .env
```
fill out your own env
## Run unittest to make sure service working
```
cd services/tests/system
pytest -v
```
