# Fist runs server locally
cd ./reactnd-project-readable-starter/api-server
if [ ! -d "./reactnd-project-readable-starter/api-server/node_modules" ] 
then
    npm install
fi

echo " ============ RUNNING SERVER =============== "
xterm -title "readable-starter-server" -e "npm start" &
cd ../../app

if [ ! -d "./app/node_modules" ] 
then
    npm install
fi

echo " ======= RUNNING REACT APPLICATION ========= "
xterm -title "reading-react-app" -e "npm start"
echo " ========= STOPPING APPLICATIONS =========== "
pkill -P $$