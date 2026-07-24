pipeline {
    agent any

    tools {
        node "node20"   // Configure in Jenkins Global Tools
    }

    environment {
        AWS_DEFAULT_REGION = "us-east-1"
        S3_BUCKET = "eflow-suji-ani"
        GIT_REPO = "https://github.com/Anish-RS/RTN-Anish-Timbers.git"
        SECRET_ID = "SECRET_ID"
        CLOUDFRONT_DISTRIBUTION_ID = "E6W572WT7Q5OU"
    }

    stages {
        stage('Checkout') {
            steps {
                deleteDir()
                git branch: "main",
                    url: "${GIT_REPO}",
                    //credentialsId: 'jenkins'  // Use your Git repo deploy key
            }
        }
        
        stage('Build React App') {
            steps {
                sh '''
                  npm install
                  npm run build
                '''
            }
        }
        stage('Deploy to S3') {
            steps {
                sh '''
                aws sts get-caller-identity
                aws s3 sync dist/ s3://${S3_BUCKET}/ \
                    --delete \
                    --exact-timestamps 
               echo " Deployment completed successfully"    
                        '''
            }
        }
        stage('CloudFront Cache Invalidation') {
            steps {
                sh '''
                echo "Creating CloudFront invalidation"
                aws cloudfront create-invalidation \
                --distribution-id ${CLOUDFRONT_DISTRIBUTION_ID} \
                --paths "/*"
               echo " Cache Invalidation completed successfully"    
                        '''
            }
        }        
    }
