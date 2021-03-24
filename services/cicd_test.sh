source services/config.sh
# CURRENT_VERSION=$1
chmod +x services/deploy_functions.sh
sh services/deploy_functions.sh $CURRENT_VERSION


# if (($1 > 0)); then
#     echo "remove version=v$1"
#     sh ./remove.sh $1
# fi