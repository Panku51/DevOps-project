pipeline {
    agent any
      stages {
         stage( 'Build Gradle') {
            steps {
              // Configure the Gradle build step
                 gradle {
                   // set the path to your Gradle build script
                     gradleFi1e 'path/to/build.gradle'
                    // Set the tasks you want to execute
                      tasks 'build'
                      }
              }
          }
         stage('Sonarqube Analysis - SAST') {
         steps {
               withSonarQubeEnv('SonarQube') {
          sh "cd ~/DevOps-project/gradlew sonar \
                 -Dsonar.projectKey=test \
                      -Dsonar.projectName='test' \
                         -Dsonar.host.url=http://3.108.238.17:9000"
               }
           }
        }
     }
    
}
