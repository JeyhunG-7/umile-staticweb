IP="3.140.224.89"
DIR="umile.xyz"
KEY_DIR="$1"

npm install && npm run build 
sudo ssh -i $KEY_DIR ubuntu@$IP "rm -r $DIR"
sudo scp -i $KEY_DIR -r build ubuntu@$IP:/home/ubuntu/$DIR
sudo ssh -i $KEY_DIR ubuntu@$IP 'sudo service nginx restart'