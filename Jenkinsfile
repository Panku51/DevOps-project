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
