# gcp-test
testing GCP stuff

# Notes: 

# Enable Cloud Functions API
Cloud Deployment Manager V2 API
Cloud Functions API
Cloud Build API
Cloud Storage
Cloud Logging API
# give kms decrypt role to cloud build service account (the one gcp auto creates)
# create a service account for cloud build with roles: Deployment Manager Editor, Storage Admin, Logging Admin, Cloud Functions Developer
# generate keyfile from new service account
# create keyring and key in GCP KMS console, copy resource paths for step below
# encrypt keyfile.json using GCP CLI
# gcloud kms encrypt --location "us-central1" --keyring "projects/clear-veld-306519/locations/us-central1/keyRings/test_keyring" --key "projects/clear-veld-306519/locations/us-central1/keyRings/test_keyring/cryptoKeys/my_test_key" --plaintext-file ./keyfile.json --ciphertext-file ./keyfile.json.enc
# place keyfile.json.enc into your github repo
