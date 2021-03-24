
CURRENT_VERSION=0;
functionNames=$(gcloud functions list --format=json | jq -r '.[].name')
#echo $functionNames

#array=($(echo $functionNames | tr '/' "\n"))

for i in "${functionNames}"
do
    #find /v to determine version
    if [[ $i == */v* ]] ; then
        echo "$i"
        array1=($(echo $i | tr '/' "\n"))
        array2=($(echo ${array1[5]} | tr '-' "\n"))
        CURRENT_VERSION=($(echo ${array2[0]//v}))
    fi
done

echo "CURRENT_VERSION=$CURRENT_VERSION" > services/config.sh