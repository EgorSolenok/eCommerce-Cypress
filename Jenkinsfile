pipeline {
  agent any
//   {
//     docker {
//       image 'cypress/base:10'
//     }
//   }
  parameters {
    choice(name: 'browser', choices: ['chrome', 'edge', 'firefox'], description: 'Pick testing browser')
  }
  options {
  ansiColor('xterm')
  }
  stages {
    stage('Building') {
    steps {
      echo "Building the app"
      }
    }
    stage('Testing') {
    steps {
      bat 'npm i'
      bat 'npm run cy:%browser%'
      }
    }
    stage ('Deploying') {
    steps {
      echo "Deploy the app"
    }
      }
    }
  post {
      always {
      allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
      archiveArtifacts allowEmptyArchive: true, artifacts: '\'cypress/videos/**/**/**.*mp4\', \'cypress/screenshots/**.**\', \'cypress/logs/**.**\',', followSymlinks: false
      }
    }
  }
