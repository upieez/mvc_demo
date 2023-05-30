npm install
echo "Successfully ran npm install"
sudo timedatectl set-timezone Asia/Singapore 
npx sequelize-cli db:create
npx sequelize-cli db:migrate