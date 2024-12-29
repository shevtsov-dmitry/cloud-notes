pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                sh 'cabal build'
            }
        }
        stage('Test') {
            steps {
                sh 'cabal test'
            }
        }
    }
}
