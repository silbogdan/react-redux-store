pipeline {
    agent any
    stages {
        stage('Stop all containers') {
            steps {
                sh '''
                    if [ -z $(docker ps -q) ]
                    then
                        echo "No containers active"
                    else
                        docker kill $(docker ps -q)
                    fi
                '''
            }
        }
        stage('Build Docker image') {
            script {
                VERSION = sh(returnStdout: true, script: "git tag --contains").trim()
                sh "docker build -t shopcart:$VERSION ."
            }
        }
        stage('Run container') {
            steps {
                sh "docker run -d -p 3000:3000 shopcart"
            }
        }
    }
}
