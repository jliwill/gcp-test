cd ./services
npm install
sls deploy --env stg 2>&1 | tee sls_deploy_out.txt

if grep -q 'Error' "sls_deploy_out.txt";
then
    cd ..
    echo "deployment Error detected!" 
    exit -1
else
    cd ..
fi