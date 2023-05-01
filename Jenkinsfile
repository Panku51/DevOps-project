def nodeLabel = 'docker-agent'
def nodeImage = 'docker:20.10.8'

// Create Jenkins node
def dockerNode = dockerNodeProvider.createDockerNode(nodeLabel, nodeImage)


pipeline {
    agent {
        label nodeLabel
    }
    stages {
        stage('Clone repository') {
            steps {
                git 'https://github.com/A-Garg123/DevOps-project.git'
            }
        }
        stage('Build and run containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
    post {
        always {
            sh 'docker-compose down'
        }
    }
}

// Cleanup Jenkins node after pipeline execution
dockerNodeProvider.deleteDockerNode(dockerNode)
