pipeline {
 agent any 

 environment {
   AWS_Default_REGION = 'us-east-2'
   s3_BUCKET = 'e-flow-instructorweb'
   CLOUDFRONT_DISTRIBUTION_ID = 'E28P25RQ226IK6'
  }
  tools {
   nodejs 'node20'
  }
  stages {
    stage('clone Repository') {
      git branch: 'Anish'
      url: 'https://github.com/cloudhostingky-alt/E-flow-InstructorWeb.git'
     }
   }
   stage('Installation Dependencies') {
    step {
        sh 'npm install'
    }
   }
   stage('Build Project') {
     steps {
       sh 'npm run build'
      }
    }
    stage('Deploy to S3') {
      step {
       sh '''
       aws s3 sync dist/ s3://$s3_BUCKET --delete
       '''
     }
   }
   stage(Invalidate Cloudfront cache') {
      steps {
       sh '''
       aws cloudfront create-invalidation \
       --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
       --paths "/*"
      }
    }
  }
}
