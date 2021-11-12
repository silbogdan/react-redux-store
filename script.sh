if [ -z $(docker ps -q) ]
then
    echo "No arguments"
else
    echo "There are arguments"
fi
