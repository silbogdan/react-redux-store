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
            steps {
                sh "docker build -t shopcart ."
            }
        }
        stage('Run container') {
            steps {
                sh "docker run -d -p 3000:3000 shopcart"
            }
        }
    }
}
