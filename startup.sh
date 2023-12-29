if [ -z "$DATABASE_URL" ]; then
    echo "DATABASE_URL is required."
    exit 1
fi
if [ -z "$DATABASE_USERNAME" ]; then
    echo "DATABASE_USERNAME is required."
    exit 1
fi
if [ -z "$DATABASE_PASSWORD" ]; then
    echo "DATABASE_PASSWORD is required."
    exit 1
fi
if [ -z "$SERVICE_PORT" ]; then
    echo "SERVICE_PORT is required."
    exit 1
fi

pkill -f nutrition-calculator-api.jar

echo "prior process is killed. wait for terminated."

sleep 5

DATABASE_URL=$DATABASE_URL \
DATABASE_USERNAME=$DATABASE_USERNAME \
DATABASE_PASSWORD=$DATABASE_PASSWORD \
nohup java -jar -Dspring.profiles.active=prod \
-Dserver.port=$SERVICE_PORT \
./build/libs/nutrition-calculator-api.jar > /app/nutrition-calculator-api.log 2>&1 &
