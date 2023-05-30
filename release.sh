npm install
echo "Successfully ran npm install"
timedatectl set-timezone Asia/Singapore 
npx sequelize-cli db:create
npx sequelize-cli db:migrate