#!/usr/bin/env bash
PACKAGE_MANAGER=npm
ZIP_NAME=VisaDateNotification.zip
ZIP_FOLDERS=node_modules\ lib\ index.js
REGION=us-east-1
PROFILE=personal
LAMBDA_CODE=cf-templates-1iv7hclvbz668-us-east-1
LAMBDA_NAME1=VisaDateNotification
echo 'Removing current node_modules folder and others'
rm -rf node_modules
rm -rf deploy
rm -rf $ZIP_NAME
echo 'Making temporaly folder deploy'
mkdir deploy
echo 'Installing all dependencies in production mode'
$PACKAGE_MANAGER install --production=true
echo 'Copying neccesary files to the deploy folder'
cp -R $ZIP_FOLDERS deploy
cd deploy
echo 'Generating zip file for production'
zip -q -r $ZIP_NAME *
cp -r $ZIP_NAME ../
cd ..
echo 'Removing deploy folder'
rm -rf deploy
echo 'Deploy package has been generated'
echo "Updating s3..."
aws --profile $PROFILE --region $REGION s3 cp $ZIP_NAME  s3://$LAMBDA_CODE
echo "Updating lambda" $LAMBDA_NAME1
aws --profile $PROFILE --region $REGION lambda update-function-code --function-name $LAMBDA_NAME1 --s3-bucket $LAMBDA_CODE --s3-key $ZIP_NAME
echo 'Installing all dev dependencies again'
$PACKAGE_MANAGER install
echo "ALL DONE"