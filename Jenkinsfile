pipeline {
    agent any
    environment {
        VERSION = sh(returnStdout: true, script: "git tag | tail -1").trim()
    }
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
        stage('Build Docker images') {
            steps {
                sh '''
                    if [ -z $(docker image ls -q shopcart:$VERSION) ]; then
                        docker build -t shopcart:$VERSION .
                    fi

                    if [ -z $(docker image ls -q shopcart-test:$VERSION) ]; then
                        docker build -t shopcart-test:$VERSION .
                    fi 

                    if [ -z $(docker image ls -q shopcart-stage:$VERSION) ]; then
                        docker build -t shopcart-stage:$VERSION .
                    fi                                               
                '''
            }
        }
        stage('Run tests') {
            steps {
                sh "docker run --rm shopcart-test:$VERSION"
            }
        }
        stage('Build for prod') {
            steps {
                sh "docker run --rm shopcart-stage:$VERSION"
            }
        }
        stage('Run container') {
            steps {
                sh "docker run -d -p 3000:3000 shopcart:$VERSION"
            }
        }
    }
}
