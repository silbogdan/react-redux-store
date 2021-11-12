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
            environment {
                VERSION = "${env.TAG_NAME}"
            }
            steps {
                sh "docker build -t shopcart:$VERSION"
            }
        }
        stage('Run container') {
            steps {
                sh "docker run -d -p 3000:3000 shopcart"
            }
        }
    }
}
