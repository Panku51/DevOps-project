

def nodeLabel = 'docker-agent'
def nodeImage = 'docker:20.10.8'

def dockerNodeProvider = DockerPipeline.fromRegistry('docker').nodeProvider('docker')

def dockerNode = dockerNodeProvider.createDockerNode(new DockerNodeDefinition(nodeLabel, nodeImage))

pipeline {
    agent { node { label nodeLabel } }
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

dockerNodeProvider.deleteNode(dockerNode.getNodeName())
