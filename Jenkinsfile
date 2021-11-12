pipeline {
    agent any
	    stages {
    	    stage('Build Docker image') {
				sh "docker build -t shopcart ."
			}
			stage('Run container') {
				sh "docker run -p 3000:3000 shopcart"
			}
		}
    }
}
