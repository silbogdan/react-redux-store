pipeline {
    agent any
    stages {
        stage('Stop all containers') {
            steps {
                sh '''
                    if [ -z $(docker ps -q) ]
                    then
                        docker kill $(docker ps -q)
                    else
                        echo "No containers active"
                    fi
                '''
            }
        }
        stage('Build Docker image') {
            steps {
                sh "docker build -t shopcart ."
            }
        }
        stage('Run container') {
            steps {
                sh "docker run -p 3000:3000 shopcart"
            }
        }
    }
}
