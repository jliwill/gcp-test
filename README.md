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
# create keyring and key in GCP KMS console, copy resource paths for step below, Note: keyring and keys CANNOT be deleted or renamed after creation
# encrypt keyfile.json using GCP CLI
# gcloud kms encrypt --location "us-west2" --keyring "projects/iq-cloud-qa-functionality/locations/us-west2/keyRings/gcp-test" --key "projects/iq-cloud-qa-functionality/locations/us-west2/keyRings/gcp-test/cryptoKeys/serverless-test" --plaintext-file ./keyfile.json --ciphertext-file ./keyfile.json.enc
# place keyfile.json.enc into your github repo root folder


# some permissions required
  service account creation
  service account key creation
  kms decrypter on cloudbuild service account
  kms encrypter on personal account (if encrypting keyfile.json)

#
#########
###
